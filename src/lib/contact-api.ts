import { projectId, publicAnonKey } from "../../utils/supabase/info";

const base = `https://${projectId}.supabase.co/functions/v1/make-server-d60f0c19`;

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  consent: boolean;
  website?: string;
}

export interface ScoutAppPayload {
  name: string;
  email: string;
  organization?: string;
  country?: string;
  position?: string;
  phone?: string;
  message: string;
  consent: boolean;
  website?: string;
}

async function postJson<T extends object>(path: string, payload: T): Promise<unknown> {
  let res: Response;
  try {
    res = await fetch(`${base}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${publicAnonKey}`,
        apikey: publicAnonKey,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new Error(
      "We couldn't reach our servers. Please check your connection and try again."
    );
  }

  if (!res.ok) {
    let detail = "";
    try {
      const data = await res.json();
      detail =
        (data && (data.error || data.message)) ||
        `Request failed with status ${res.status}`;
    } catch {
      detail = `Request failed with status ${res.status}`;
    }
    throw new Error(detail);
  }

  try {
    return await res.json();
  } catch {
    return {};
  }
}

export function submitContact(payload: ContactPayload) {
  return postJson("/contact", payload);
}

export function submitScoutApp(payload: ScoutAppPayload) {
  return postJson("/scout-application", payload);
}
