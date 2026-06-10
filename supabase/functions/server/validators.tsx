// Pure-TS validators for public form endpoints.
// No external deps. Safe for Deno runtime.

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; errors: Record<string, string> };

// ---------- Primitive validators ----------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function trimStr(v: unknown): string {
  return isString(v) ? v.trim() : "";
}

function lenBetween(s: string, min: number, max: number): boolean {
  return s.length >= min && s.length <= max;
}

function isEmail(s: string): boolean {
  return s.length <= 254 && EMAIL_RE.test(s);
}

// Allowed subject list for the public contact form.
// Keep liberal but bounded — clients pick from a dropdown.
export const ALLOWED_CONTACT_SUBJECTS = [
  "general",
  "programme",
  "scout",
  "camps",
  "partnership",
  "media",
  "support",
  "other",
] as const;
export type ContactSubject = typeof ALLOWED_CONTACT_SUBJECTS[number];

function isAllowedSubject(s: string): s is ContactSubject {
  return (ALLOWED_CONTACT_SUBJECTS as readonly string[]).includes(s);
}

// Light phone sanitiser — accepts digits, spaces, +, -, (), max 32 chars.
const PHONE_RE = /^[+\d\s\-()]{6,32}$/;

// ---------- Public input types ----------

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  subject: ContactSubject;
  message: string;
  consent: true;
  website?: string; // honeypot — handled by route, not validator
}

export interface ScoutApplicationInput {
  name: string;
  email: string;
  organization: string;
  country: string;
  position: string;
  message: string;
  consent: true;
  website?: string;
}

// ---------- validateContact ----------

export function validateContact(
  body: unknown,
): ValidationResult<ContactInput> {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const name = trimStr(b.name);
  if (!lenBetween(name, 2, 100)) {
    errors.name = "Name must be 2-100 characters.";
  }

  const email = trimStr(b.email).toLowerCase();
  if (!isEmail(email)) {
    errors.email = "Valid email required.";
  }

  let phone: string | undefined;
  if (b.phone !== undefined && b.phone !== null && trimStr(b.phone) !== "") {
    const p = trimStr(b.phone);
    if (!PHONE_RE.test(p)) {
      errors.phone = "Phone format invalid.";
    } else {
      phone = p;
    }
  }

  const subject = trimStr(b.subject).toLowerCase();
  if (!isAllowedSubject(subject)) {
    errors.subject = "Subject not allowed.";
  }

  const message = trimStr(b.message);
  if (!lenBetween(message, 10, 2000)) {
    errors.message = "Message must be 10-2000 characters.";
  }

  if (b.consent !== true) {
    errors.consent = "Consent required.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      phone,
      subject: subject as ContactSubject,
      message,
      consent: true,
      website: isString(b.website) ? b.website : undefined,
    },
  };
}

// ---------- validateScoutApplication ----------

export function validateScoutApplication(
  body: unknown,
): ValidationResult<ScoutApplicationInput> {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const name = trimStr(b.name);
  if (!lenBetween(name, 2, 100)) {
    errors.name = "Name must be 2-100 characters.";
  }

  const email = trimStr(b.email).toLowerCase();
  if (!isEmail(email)) {
    errors.email = "Valid email required.";
  }

  const organization = trimStr(b.organization);
  if (!lenBetween(organization, 2, 150)) {
    errors.organization = "Organization must be 2-150 characters.";
  }

  const country = trimStr(b.country);
  if (!lenBetween(country, 2, 80)) {
    errors.country = "Country must be 2-80 characters.";
  }

  const position = trimStr(b.position);
  if (!lenBetween(position, 2, 100)) {
    errors.position = "Position must be 2-100 characters.";
  }

  const message = trimStr(b.message);
  if (!lenBetween(message, 10, 2000)) {
    errors.message = "Message must be 10-2000 characters.";
  }

  if (b.consent !== true) {
    errors.consent = "Consent required.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      organization,
      country,
      position,
      message,
      consent: true,
      website: isString(b.website) ? b.website : undefined,
    },
  };
}

// ---------- Constant-time string compare ----------
// Used to compare admin tokens without leaking timing info.
export function constantTimeEqual(a: string, b: string): boolean {
  // Compare bytewise on UTF-8; bail to length-mismatch path but still
  // walk the full longer string to keep timing uniform.
  const enc = new TextEncoder();
  const aa = enc.encode(a);
  const bb = enc.encode(b);
  const len = Math.max(aa.length, bb.length);
  let diff = aa.length ^ bb.length;
  for (let i = 0; i < len; i++) {
    const av = i < aa.length ? aa[i] : 0;
    const bv = i < bb.length ? bb[i] : 0;
    diff |= av ^ bv;
  }
  return diff === 0;
}
