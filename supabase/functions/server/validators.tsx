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

// Camp application — public form for parents enrolling a player.
export const ALLOWED_CAMP_AGE_GROUPS = [
  "U-10",
  "U-12",
  "U-14",
  "U-16",
  "U-18",
] as const;
export type CampAgeGroup = typeof ALLOWED_CAMP_AGE_GROUPS[number];

function isAllowedCampAgeGroup(s: string): s is CampAgeGroup {
  return (ALLOWED_CAMP_AGE_GROUPS as readonly string[]).includes(s);
}

// Preferred camp ids are the slugs from src/lib/camps.ts plus "not-sure".
// Kept here as a literal allow-list so the server is self-contained and
// doesn't import the frontend.
export const ALLOWED_PREFERRED_CAMPS = [
  "winter-2026",
  "summer-elite-2027",
  "international-2027",
  "year-round-2027",
  "not-sure",
] as const;
export type PreferredCamp = typeof ALLOWED_PREFERRED_CAMPS[number];

function isAllowedPreferredCamp(s: string): s is PreferredCamp {
  return (ALLOWED_PREFERRED_CAMPS as readonly string[]).includes(s);
}

// Optional position field — same shape as the contact form's, but with a
// "not-sure" escape hatch since this form is parent-facing.
export const ALLOWED_CAMP_POSITIONS = [
  "gk",
  "defender",
  "midfielder",
  "forward",
  "not-sure",
] as const;
export type CampPosition = typeof ALLOWED_CAMP_POSITIONS[number];

function isAllowedCampPosition(s: string): s is CampPosition {
  return (ALLOWED_CAMP_POSITIONS as readonly string[]).includes(s);
}

// Loose ISO date check — YYYY-MM-DD. Date parse must succeed and the value
// must not be in the future (DOBs are always past).
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
function isPastIsoDate(s: string): boolean {
  if (!ISO_DATE_RE.test(s)) return false;
  const t = Date.parse(s);
  if (Number.isNaN(t)) return false;
  return t <= Date.now();
}

export interface CampApplicationInput {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  playerName: string;
  playerDob: string;
  playerAgeGroup: CampAgeGroup;
  preferredCamp: PreferredCamp;
  position?: CampPosition;
  medicalNotes?: string;
  message?: string;
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

// ---------- validateCampApplication ----------

export function validateCampApplication(
  body: unknown,
): ValidationResult<CampApplicationInput> {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const parentName = trimStr(b.parentName);
  if (!lenBetween(parentName, 2, 100)) {
    errors.parentName = "Parent name must be 2-100 characters.";
  }

  const parentEmail = trimStr(b.parentEmail).toLowerCase();
  if (!isEmail(parentEmail)) {
    errors.parentEmail = "Valid email required.";
  }

  const parentPhone = trimStr(b.parentPhone);
  if (!PHONE_RE.test(parentPhone)) {
    errors.parentPhone = "Phone format invalid.";
  }

  const playerName = trimStr(b.playerName);
  if (!lenBetween(playerName, 2, 100)) {
    errors.playerName = "Player name must be 2-100 characters.";
  }

  const playerDob = trimStr(b.playerDob);
  if (!isPastIsoDate(playerDob)) {
    errors.playerDob = "Valid date of birth required (YYYY-MM-DD).";
  }

  const playerAgeGroup = trimStr(b.playerAgeGroup);
  if (!isAllowedCampAgeGroup(playerAgeGroup)) {
    errors.playerAgeGroup = "Age group not allowed.";
  }

  const preferredCamp = trimStr(b.preferredCamp);
  if (!isAllowedPreferredCamp(preferredCamp)) {
    errors.preferredCamp = "Preferred camp not allowed.";
  }

  let position: CampPosition | undefined;
  if (b.position !== undefined && b.position !== null && trimStr(b.position) !== "") {
    const p = trimStr(b.position).toLowerCase();
    if (!isAllowedCampPosition(p)) {
      errors.position = "Position not allowed.";
    } else {
      position = p;
    }
  }

  let medicalNotes: string | undefined;
  if (b.medicalNotes !== undefined && b.medicalNotes !== null) {
    const m = trimStr(b.medicalNotes);
    if (m.length > 2000) {
      errors.medicalNotes = "Medical notes must be 2000 characters or fewer.";
    } else if (m.length > 0) {
      medicalNotes = m;
    }
  }

  let message: string | undefined;
  if (b.message !== undefined && b.message !== null) {
    const m = trimStr(b.message);
    if (m.length > 2000) {
      errors.message = "Message must be 2000 characters or fewer.";
    } else if (m.length > 0) {
      message = m;
    }
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
      parentName,
      parentEmail,
      parentPhone,
      playerName,
      playerDob,
      playerAgeGroup: playerAgeGroup as CampAgeGroup,
      preferredCamp: preferredCamp as PreferredCamp,
      position,
      medicalNotes,
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
