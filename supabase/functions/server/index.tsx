import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import {
  constantTimeEqual,
  validateContact,
  validateScoutApplication,
  validateCampApplication,
  validateAcademyApplication,
} from "./validators.tsx";

const ROUTE_PREFIX = "/make-server-d60f0c19";

const app = new Hono();

// Request logger
app.use("*", logger(console.log));

// ---------- CORS ----------
// Default to the production GitHub Pages origin and local Vite dev.
// Allow extra origins via ALLOWED_ORIGINS env (comma-separated).
const DEFAULT_ORIGINS = [
  "https://sambawy01.github.io",
  "http://localhost:5173",
];
const EXTRA_ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter((s) => s.length > 0);
const ALLOWED_ORIGINS = new Set<string>([...DEFAULT_ORIGINS, ...EXTRA_ORIGINS]);

app.use(
  "/*",
  cors({
    origin: (origin) => (origin && ALLOWED_ORIGINS.has(origin) ? origin : ""),
    allowHeaders: ["Content-Type"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ---------- Rate limit (in-memory, per-IP, per-endpoint) ----------
// Max 5 requests per 60s per IP per endpoint.
// Note: in-memory means each isolate has its own counter — fine for a small
// public form on Supabase Edge, not a substitute for a real WAF.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const rateBuckets = new Map<string, number[]>();

function clientIp(c: { req: { header: (k: string) => string | undefined } }): string {
  const xff = c.req.header("x-forwarded-for") ?? "";
  const first = xff.split(",")[0]?.trim();
  return first || c.req.header("cf-connecting-ip") || "unknown";
}

function rateLimit(endpoint: string, ip: string): boolean {
  const key = `${endpoint}:${ip}`;
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const existing = rateBuckets.get(key) ?? [];
  // Drop expired timestamps.
  const fresh = existing.filter((t) => t > windowStart);
  if (fresh.length >= RATE_MAX) {
    rateBuckets.set(key, fresh);
    return false;
  }
  fresh.push(now);
  rateBuckets.set(key, fresh);
  // Opportunistic cleanup to bound memory.
  if (rateBuckets.size > 5000) {
    for (const [k, ts] of rateBuckets) {
      const f = ts.filter((t) => t > windowStart);
      if (f.length === 0) rateBuckets.delete(k);
      else rateBuckets.set(k, f);
    }
  }
  return true;
}

// ---------- Health ----------
app.get(`${ROUTE_PREFIX}/health`, (c) => {
  return c.json({ status: "ok" });
});

// ---------- POST /contact ----------
app.post(`${ROUTE_PREFIX}/contact`, async (c) => {
  const ip = clientIp(c);
  if (!rateLimit("contact", ip)) {
    return c.json({ error: "Too many requests." }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON." }, 400);
  }

  // Honeypot — silent success on bot fill.
  const website = (body as Record<string, unknown> | null)?.website;
  if (typeof website === "string" && website.trim() !== "") {
    return c.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return c.json({ error: "Invalid input.", fields: result.errors }, 400);
  }

  const id = crypto.randomUUID();
  await kv.set(`contact:${id}`, {
    ...result.value,
    ts: Date.now(),
    ip,
  });

  return c.json({ ok: true, id });
});

// ---------- POST /scout-application ----------
app.post(`${ROUTE_PREFIX}/scout-application`, async (c) => {
  const ip = clientIp(c);
  if (!rateLimit("scout-application", ip)) {
    return c.json({ error: "Too many requests." }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON." }, 400);
  }

  const website = (body as Record<string, unknown> | null)?.website;
  if (typeof website === "string" && website.trim() !== "") {
    return c.json({ ok: true });
  }

  const result = validateScoutApplication(body);
  if (!result.ok) {
    return c.json({ error: "Invalid input.", fields: result.errors }, 400);
  }

  const id = crypto.randomUUID();
  await kv.set(`scout:${id}`, {
    ...result.value,
    ts: Date.now(),
    ip,
  });

  return c.json({ ok: true, id });
});

// ---------- POST /camp-application ----------
app.post(`${ROUTE_PREFIX}/camp-application`, async (c) => {
  const ip = clientIp(c);
  if (!rateLimit("camp-application", ip)) {
    return c.json({ error: "Too many requests." }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON." }, 400);
  }

  const website = (body as Record<string, unknown> | null)?.website;
  if (typeof website === "string" && website.trim() !== "") {
    return c.json({ ok: true });
  }

  const result = validateCampApplication(body);
  if (!result.ok) {
    return c.json({ error: "Invalid input.", fields: result.errors }, 400);
  }

  const id = crypto.randomUUID();
  await kv.set(`camp:${id}`, {
    ...result.value,
    ts: Date.now(),
    ip,
  });

  return c.json({ ok: true, id });
});

// ---------- POST /academy-application ----------
app.post(`${ROUTE_PREFIX}/academy-application`, async (c) => {
  const ip = clientIp(c);
  if (!rateLimit("academy-application", ip)) {
    return c.json({ error: "Too many requests." }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON." }, 400);
  }

  const website = (body as Record<string, unknown> | null)?.website;
  if (typeof website === "string" && website.trim() !== "") {
    return c.json({ ok: true });
  }

  const result = validateAcademyApplication(body);
  if (!result.ok) {
    return c.json({ error: "Invalid input.", fields: result.errors }, 400);
  }

  const id = crypto.randomUUID();
  await kv.set(`academy:${id}`, {
    ...result.value,
    ts: Date.now(),
    ip,
  });

  return c.json({ ok: true, id });
});

// ---------- GET /admin/inquiries ----------
app.get(`${ROUTE_PREFIX}/admin/inquiries`, async (c) => {
  const ip = clientIp(c);
  if (!rateLimit("admin-inquiries", ip)) {
    return c.json({ error: "Too many requests." }, 429);
  }

  const adminToken = Deno.env.get("ADMIN_TOKEN") ?? "";
  if (adminToken.length === 0) {
    // Fail closed if not configured.
    return c.json({ error: "Admin not configured." }, 503);
  }

  const auth = c.req.header("authorization") ?? "";
  const prefix = "Bearer ";
  if (!auth.startsWith(prefix)) {
    return c.json({ error: "Unauthorized." }, 401);
  }
  const presented = auth.slice(prefix.length).trim();
  if (!constantTimeEqual(presented, adminToken)) {
    return c.json({ error: "Unauthorized." }, 401);
  }

  // Pull all prefixes, merge, sort newest-first, cap to 50.
  const [contacts, scouts, camps, academies] = await Promise.all([
    kv.getByPrefix("contact:"),
    kv.getByPrefix("scout:"),
    kv.getByPrefix("camp:"),
    kv.getByPrefix("academy:"),
  ]);

  const all = [
    ...contacts.map((v: any) => ({ kind: "contact", ...v })),
    ...scouts.map((v: any) => ({ kind: "scout", ...v })),
    ...camps.map((v: any) => ({ kind: "camp", ...v })),
    ...academies.map((v: any) => ({ kind: "academy", ...v })),
  ];
  all.sort((a, b) => (b?.ts ?? 0) - (a?.ts ?? 0));
  return c.json({ ok: true, items: all.slice(0, 50) });
});

// ---------- 404 / error handlers ----------
app.notFound((c) => c.json({ error: "Not found." }, 404));

app.onError((err, c) => {
  // Log internally; never return internal detail to the client.
  console.error("server error:", err);
  return c.json({ error: "Internal server error." }, 500);
});

Deno.serve(app.fetch);
