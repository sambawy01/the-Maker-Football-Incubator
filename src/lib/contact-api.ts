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

export interface CampApplicationPayload {
  /** Parent/guardian name. */
  parentName: string;
  /** Parent/guardian email. */
  parentEmail: string;
  /** Parent/guardian phone (tel). */
  parentPhone: string;
  /** Player full name. */
  playerName: string;
  /** Player date of birth, ISO date (YYYY-MM-DD). */
  playerDob: string;
  /** U-10 / U-12 / U-14 / U-16 / U-18. */
  playerAgeGroup: string;
  /** Camp id from src/lib/camps.ts, or "not-sure". */
  preferredCamp: string;
  /** Optional position. */
  position?: string;
  /** Optional medical notes for coaches. */
  medicalNotes?: string;
  /** Optional message. */
  message?: string;
  /** GDPR-style consent — required true. */
  consent: boolean;
  /** Honeypot — must be empty. */
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

export function submitCampApplication(payload: CampApplicationPayload) {
  return postJson("/camp-application", payload);
}
