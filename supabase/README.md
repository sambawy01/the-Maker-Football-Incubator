# Supabase Edge Function — `server`

Public-form backend for the Maker Football Incubator site. Runs on Supabase Edge Functions (Deno + Hono) and persists submissions into the `kv_store_d60f0c19` table.

Route prefix: `/make-server-d60f0c19`

## Endpoints

| Method | Path                                              | Purpose                                    | Auth                  |
| ------ | ------------------------------------------------- | ------------------------------------------ | --------------------- |
| GET    | `/make-server-d60f0c19/health`                    | Health probe                               | none                  |
| POST   | `/make-server-d60f0c19/contact`                   | General contact form submission            | none (rate-limited)   |
| POST   | `/make-server-d60f0c19/scout-application`         | Scout application submission               | none (rate-limited)   |
| GET    | `/make-server-d60f0c19/admin/inquiries`           | Last 50 contact + scout entries, newest-first | `Bearer ADMIN_TOKEN` |

All POST endpoints:

- expect JSON,
- validate input (see `functions/server/validators.tsx`),
- include a honeypot field `website` — if non-empty, the server responds `200 {ok:true}` and discards the payload,
- are rate-limited to **5 requests per 60s per IP per endpoint**.

CORS is locked to:

- `https://sambawy01.github.io`
- `http://localhost:5173`
- Anything in the comma-separated `ALLOWED_ORIGINS` env var.

## One-time setup

### Prereqs

- [Supabase CLI](https://supabase.com/docs/guides/cli) installed (`brew install supabase/tap/supabase`)
- [Deno](https://docs.deno.com/runtime/getting_started/installation/) installed (`brew install deno`)

### Link the project

```bash
supabase login
supabase link --project-ref vxlruqkelfqfmxkywxdo
```

(Project ref pulled from `utils/supabase/info.tsx`.)

### Set secrets

```bash
# Pick a long random string. This token gates /admin/inquiries.
supabase secrets set ADMIN_TOKEN="$(openssl rand -hex 32)"

# Optional — add extra CORS origins. Comma-separated, no spaces required.
supabase secrets set ALLOWED_ORIGINS="https://staging.example.com,https://preview.example.com"
```

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected by the Edge runtime — do not set them manually.

### Deploy

```bash
supabase functions deploy server
```

The deployed URL will look like:

```
https://vxlruqkelfqfmxkywxdo.supabase.co/functions/v1/server/make-server-d60f0c19/health
```

(Hono sees the `/make-server-d60f0c19/...` portion as the path.)

### Smoke test

```bash
# health
curl -s https://vxlruqkelfqfmxkywxdo.supabase.co/functions/v1/server/make-server-d60f0c19/health

# contact (CORS-restricted in the browser; curl ignores CORS)
curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "subject":"general",
    "message":"This is a test submission long enough to validate.",
    "consent":true
  }' \
  https://vxlruqkelfqfmxkywxdo.supabase.co/functions/v1/server/make-server-d60f0c19/contact
```

## Reading inquiries

```bash
ADMIN_TOKEN="<the value you set above>"

curl -s \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  https://vxlruqkelfqfmxkywxdo.supabase.co/functions/v1/server/make-server-d60f0c19/admin/inquiries \
  | jq
```

Returns:

```json
{
  "ok": true,
  "items": [
    {
      "kind": "contact",
      "name": "…",
      "email": "…",
      "subject": "general",
      "message": "…",
      "ts": 1733846400000,
      "ip": "1.2.3.4"
    }
  ]
}
```

Items are sorted newest-first, capped at 50.

## Database

The function uses one table (already provisioned by Figma Make):

```sql
CREATE TABLE kv_store_d60f0c19 (
  key   TEXT  NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);
```

Keys:

- `contact:<uuid>` — general contact submissions
- `scout:<uuid>` — scout applications

You can browse rows directly at:
<https://supabase.com/dashboard/project/vxlruqkelfqfmxkywxdo/database/tables>

## Local development

```bash
supabase functions serve server --env-file ./supabase/.env.local
```

Where `./supabase/.env.local` contains:

```
ADMIN_TOKEN=dev-token
ALLOWED_ORIGINS=http://localhost:5173
```

`SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` are auto-provided by `supabase functions serve`.

## Security notes

- **Service-role key** is used server-side only (never exposed to the browser).
- **CORS** is allow-list based; wildcards are off.
- **Rate limiting** is in-memory per isolate — adequate for low-traffic forms, not a WAF replacement.
- **Honeypot** (`website` field) silently absorbs naive bot submissions.
- **Admin token** comparison is constant-time to prevent timing oracles.
- Internal errors return a generic `500` — stack traces stay in Supabase logs.
