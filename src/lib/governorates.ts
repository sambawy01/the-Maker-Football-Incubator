// Typed list of Egyptian governorates served by The Maker Football Incubator.
// Used by the Academies application form's governorate dropdown and by the
// server's allow-list validator. The frontend (Vite) and server (Deno) can't
// share a module, so the server keeps its own copy in
// supabase/functions/server/validators.tsx (ALLOWED_GOVERNORATES).
// Adding a governorate here MUST be mirrored there.

export const EGYPTIAN_GOVERNORATES = [
  "Alexandria",
  "Aswan",
  "Asyut",
  "Beheira",
  "Beni Suef",
  "Cairo",
  "Dakahlia",
  "Damietta",
  "Faiyum",
  "Gharbia",
  "Giza",
  "Ismailia",
  "Kafr el-Sheikh",
  "Luxor",
  "Matruh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Port Said",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sharqia",
  "Sohag",
  "South Sinai",
  "Suez",
] as const;

export type EgyptianGovernorate = typeof EGYPTIAN_GOVERNORATES[number];

/**
 * The 16-governorate core scouting footprint highlighted in The Maker's
 * public-facing marketing. This is a subset of EGYPTIAN_GOVERNORATES — the
 * dropdown still accepts any of the 27 governorates, but the chip cloud on
 * /academies only renders these 16 with first-class visual treatment.
 */
export const CORE_SCOUTING_GOVERNORATES: readonly EgyptianGovernorate[] = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Qalyubia",
  "Sharqia",
  "Dakahlia",
  "Beheira",
  "Gharbia",
  "Monufia",
  "Kafr el-Sheikh",
  "Damietta",
  "Port Said",
  "Suez",
  "Ismailia",
  "Faiyum",
  "Beni Suef",
];
