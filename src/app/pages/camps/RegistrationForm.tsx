import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";
import { submitCampApplication } from "../../../lib/contact-api";
import { camps } from "../../../lib/camps";
import {
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  RotateCcw,
} from "lucide-react";

const AGE_GROUPS = ["U-10", "U-12", "U-14", "U-16", "U-18"] as const;

const POSITION_OPTIONS = [
  { value: "gk", label: "Goalkeeper" },
  { value: "defender", label: "Defender" },
  { value: "midfielder", label: "Midfielder" },
  { value: "forward", label: "Forward" },
  { value: "not-sure", label: "Not sure" },
] as const;

// Preferred camp options derived from src/lib/camps.ts + "Not sure".
const PREFERRED_CAMP_OPTIONS = [
  ...camps.map((c) => ({ value: c.id, label: c.name })),
  { value: "not-sure", label: "Not sure yet" },
];

type CampForm = {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  playerName: string;
  playerDob: string;
  playerAgeGroup: string;
  preferredCamp: string;
  position: string;
  medicalNotes: string;
  message: string;
  consent: boolean;
};

const initialState: CampForm = {
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  playerName: "",
  playerDob: "",
  playerAgeGroup: "",
  preferredCamp: "",
  position: "not-sure",
  medicalNotes: "",
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()]{6,32}$/;

const INPUT_CLASS =
  "w-full rounded-lg bg-[#0F172A] border border-white/20 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-colors";

/**
 * Read the `?camp=<id>` parameter from the URL hash (e.g.
 * "#register?camp=summer-elite-2027"). Returns the matching camp id when
 * it's a known camp, else null.
 *
 * Kept hash-based (not query-string) because the page is anchor-scrollable
 * within a SPA route — using `?camp=` in the real query string would
 * fight react-router and reload the page.
 */
function readCampFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  const qIdx = hash.indexOf("?");
  if (qIdx === -1) return null;
  const sp = new URLSearchParams(hash.slice(qIdx + 1));
  const id = sp.get("camp");
  if (!id) return null;
  return camps.some((c) => c.id === id) ? id : null;
}

/**
 * RegistrationForm — parent-facing camp application.
 *
 * Mirrors the a11y / focus / error-display contract from RequestAccessForm:
 *  - `<label htmlFor>` per field
 *  - aria-invalid + aria-describedby on errored inputs
 *  - role="alert" per-field errors
 *  - role="status" aria-live="polite" success state with focus moved to
 *    the success heading
 *  - submit NOT disabled when invalid — clicking surfaces all errors and
 *    focuses the first invalid field
 *  - hidden honeypot `website` field, identical to the other public forms
 */
export const RegistrationForm: React.FC = () => {
  const [form, setForm] = useState<CampForm>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // Pre-fill preferred camp from #register?camp=<id>, both on mount and
  // whenever the hash changes (e.g. user clicks a different camp card).
  useEffect(() => {
    const apply = () => {
      const id = readCampFromHash();
      if (id) {
        setForm((prev) =>
          prev.preferredCamp && prev.preferredCamp !== ""
            ? prev
            : { ...prev, preferredCamp: id },
        );
      }
    };
    apply();
    const onHash = () => apply();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof CampForm, string>> = {};
    if (!form.parentName.trim())
      e.parentName = "Please enter the parent/guardian name.";
    if (!form.parentEmail.trim()) e.parentEmail = "Please enter your email.";
    else if (!EMAIL_RE.test(form.parentEmail.trim()))
      e.parentEmail = "Please enter a valid email address.";
    if (!form.parentPhone.trim())
      e.parentPhone = "Please enter a contact phone number.";
    else if (!PHONE_RE.test(form.parentPhone.trim()))
      e.parentPhone = "Phone format looks invalid.";
    if (!form.playerName.trim())
      e.playerName = "Please enter the player's name.";
    if (!form.playerDob.trim())
      e.playerDob = "Please enter the player's date of birth.";
    if (!form.playerAgeGroup)
      e.playerAgeGroup = "Please select an age group.";
    if (!form.preferredCamp)
      e.preferredCamp = "Please pick a camp (or 'Not sure yet').";
    if (form.medicalNotes.length > 2000)
      e.medicalNotes = "Medical notes are limited to 2,000 characters.";
    if (form.message.length > 2000)
      e.message = "Message is limited to 2,000 characters.";
    if (!form.consent)
      e.consent = "Please accept the privacy notice to continue.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      parentName: true,
      parentEmail: true,
      parentPhone: true,
      playerName: true,
      playerDob: true,
      playerAgeGroup: true,
      preferredCamp: true,
      position: true,
      medicalNotes: true,
      message: true,
      consent: true,
    });
    if (!isValid) {
      // Defer focus until aria-invalid attributes have re-rendered.
      requestAnimationFrame(() => {
        const firstInvalid = formRef.current?.querySelector<HTMLElement>(
          '[aria-invalid="true"]',
        );
        firstInvalid?.focus();
      });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      await submitCampApplication({
        parentName: form.parentName.trim(),
        parentEmail: form.parentEmail.trim(),
        parentPhone: form.parentPhone.trim(),
        playerName: form.playerName.trim(),
        playerDob: form.playerDob.trim(),
        playerAgeGroup: form.playerAgeGroup,
        preferredCamp: form.preferredCamp,
        position: form.position,
        medicalNotes: form.medicalNotes.trim(),
        message: form.message.trim(),
        consent: form.consent,
        website: "",
      });
      setStatus("success");
      setForm(initialState);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const showError = (field: keyof CampForm) =>
    Boolean(touched[field] && errors[field]);

  const REASSURANCE = [
    { icon: Clock, text: "Confirmation within 72 hours" },
    { icon: FileText, text: "Welcome pack with full kit list & arrivals info" },
    { icon: MessageSquare, text: "Direct WhatsApp line to your child's coach" },
    {
      icon: RotateCcw,
      text: "Full refund if you cancel 14+ days before the camp",
    },
  ];

  return (
    <section
      id="register"
      aria-labelledby="register-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-[#0F172A] py-20 md:py-24 focus:outline-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
            Apply for a Camp
          </span>
          <h2
            id="register-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            Tell us about your player. We'll confirm within 72 hours.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Every application reviewed personally by our coaching staff. No
            auto-replies, no chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8">
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-xl border border-[#15803D]/40 bg-[#15803D]/10 p-6"
              >
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="font-bold text-white text-lg mb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B] rounded"
                >
                  Application received — we'll be in touch within 72 hours.
                </h3>
                <p className="text-sm text-gray-300">
                  Our coaching team will review the application and follow up
                  by email with the welcome pack, payment details, and kit
                  list.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-bold text-[#16A34A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B] rounded"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Honeypot — visually hidden, off-screen, not tab-stoppable. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto w-[1px] h-[1px] overflow-hidden"
                >
                  <label htmlFor="camp-website">
                    Leave this field empty
                  </label>
                  <input
                    id="camp-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                {/* Parent name + email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="camp-parent-name"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Parent / Guardian Name{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="camp-parent-name"
                      name="parentName"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.parentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("parentName") || undefined}
                      aria-describedby={
                        showError("parentName")
                          ? "camp-parent-name-error"
                          : "camp-parent-name-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("parentName") && (
                      <p
                        id="camp-parent-name-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        The adult we'll be in touch with.
                      </p>
                    )}
                    {showError("parentName") && (
                      <p
                        id="camp-parent-name-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="camp-parent-email"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Email{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="camp-parent-email"
                      name="parentEmail"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.parentEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("parentEmail") || undefined}
                      aria-describedby={
                        showError("parentEmail")
                          ? "camp-parent-email-error"
                          : "camp-parent-email-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("parentEmail") && (
                      <p
                        id="camp-parent-email-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        We send confirmation and welcome pack here.
                      </p>
                    )}
                    {showError("parentEmail") && (
                      <p
                        id="camp-parent-email-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.parentEmail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Parent phone */}
                <div>
                  <label
                    htmlFor="camp-parent-phone"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Phone{" "}
                    <span className="text-gray-400" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="camp-parent-phone"
                    name="parentPhone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.parentPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showError("parentPhone") || undefined}
                    aria-describedby={
                      showError("parentPhone")
                        ? "camp-parent-phone-error"
                        : "camp-parent-phone-help"
                    }
                    className={INPUT_CLASS}
                  />
                  {!showError("parentPhone") && (
                    <p
                      id="camp-parent-phone-help"
                      className="mt-1 text-xs text-gray-400"
                    >
                      Used for camp-day contact. WhatsApp number preferred.
                    </p>
                  )}
                  {showError("parentPhone") && (
                    <p
                      id="camp-parent-phone-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.parentPhone}
                    </p>
                  )}
                </div>

                <div className="h-px bg-white/10 my-1" aria-hidden="true" />

                {/* Player name + DOB */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="camp-player-name"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Player Name{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="camp-player-name"
                      name="playerName"
                      type="text"
                      required
                      value={form.playerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("playerName") || undefined}
                      aria-describedby={
                        showError("playerName")
                          ? "camp-player-name-error"
                          : undefined
                      }
                      className={INPUT_CLASS}
                    />
                    {showError("playerName") && (
                      <p
                        id="camp-player-name-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="camp-player-dob"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Player Date of Birth{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="camp-player-dob"
                      name="playerDob"
                      type="date"
                      required
                      value={form.playerDob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("playerDob") || undefined}
                      aria-describedby={
                        showError("playerDob")
                          ? "camp-player-dob-error"
                          : undefined
                      }
                      className={INPUT_CLASS}
                    />
                    {showError("playerDob") && (
                      <p
                        id="camp-player-dob-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerDob}
                      </p>
                    )}
                  </div>
                </div>

                {/* Age group + preferred camp */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="camp-player-age-group"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Age Group{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="camp-player-age-group"
                      name="playerAgeGroup"
                      required
                      value={form.playerAgeGroup}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("playerAgeGroup") || undefined}
                      aria-describedby={
                        showError("playerAgeGroup")
                          ? "camp-player-age-group-error"
                          : undefined
                      }
                      className={INPUT_CLASS}
                    >
                      <option value="" className="bg-[#0F172A]">
                        Select age group…
                      </option>
                      {AGE_GROUPS.map((g) => (
                        <option key={g} value={g} className="bg-[#0F172A]">
                          {g}
                        </option>
                      ))}
                    </select>
                    {showError("playerAgeGroup") && (
                      <p
                        id="camp-player-age-group-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerAgeGroup}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="camp-preferred"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Preferred Camp{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="camp-preferred"
                      name="preferredCamp"
                      required
                      value={form.preferredCamp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("preferredCamp") || undefined}
                      aria-describedby={
                        showError("preferredCamp")
                          ? "camp-preferred-error"
                          : "camp-preferred-help"
                      }
                      className={INPUT_CLASS}
                    >
                      <option value="" className="bg-[#0F172A]">
                        Select a camp…
                      </option>
                      {PREFERRED_CAMP_OPTIONS.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-[#0F172A]"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {!showError("preferredCamp") && (
                      <p
                        id="camp-preferred-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Pre-filled if you came from a specific camp card.
                      </p>
                    )}
                    {showError("preferredCamp") && (
                      <p
                        id="camp-preferred-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.preferredCamp}
                      </p>
                    )}
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="camp-position"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Player Position
                  </label>
                  <select
                    id="camp-position"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={INPUT_CLASS}
                  >
                    {POSITION_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#0F172A]"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-400">
                    Helps our coaches group on day 1. Pick "Not sure" if it
                    varies.
                  </p>
                </div>

                {/* Medical notes */}
                <div>
                  <label
                    htmlFor="camp-medical"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Medical Notes
                  </label>
                  <textarea
                    id="camp-medical"
                    name="medicalNotes"
                    rows={3}
                    value={form.medicalNotes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Any allergies, injuries, or notes for our coaches"
                    aria-invalid={showError("medicalNotes") || undefined}
                    aria-describedby={
                      showError("medicalNotes")
                        ? "camp-medical-error"
                        : "camp-medical-help"
                    }
                    className={INPUT_CLASS}
                  />
                  {!showError("medicalNotes") && (
                    <p
                      id="camp-medical-help"
                      className="mt-1 text-xs text-gray-400"
                    >
                      Optional. Shared only with the on-site medical team.
                    </p>
                  )}
                  {showError("medicalNotes") && (
                    <p
                      id="camp-medical-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.medicalNotes}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="camp-message"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    id="camp-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showError("message") || undefined}
                    aria-describedby={
                      showError("message") ? "camp-message-error" : undefined
                    }
                    className={INPUT_CLASS}
                  />
                  {showError("message") && (
                    <p
                      id="camp-message-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div>
                  <label className="flex gap-3 items-start text-sm text-gray-300">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("consent") || undefined}
                      aria-describedby={
                        showError("consent") ? "camp-consent-error" : undefined
                      }
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-[#0F172A] text-[#16A34A] focus:ring-[#16A34A]"
                    />
                    <span>
                      I agree to The Maker Football Incubator processing my
                      family's data per the{" "}
                      <Link
                        to="/privacy"
                        className="text-[#16A34A] font-bold hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {showError("consent") && (
                    <p
                      id="camp-consent-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200"
                  >
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-disabled={!isValid || status === "submitting"}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    {status === "submitting"
                      ? "Sending…"
                      : "Submit Application"}
                  </Button>
                  <p className="mt-3 text-xs text-gray-400">
                    All applications confirmed within 72 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Reassurance aside */}
          <aside
            aria-labelledby="camp-reassurance-heading"
            className="lg:col-span-4 bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 h-fit"
          >
            <h3
              id="camp-reassurance-heading"
              className="text-white font-bold text-lg mb-2"
            >
              What happens after you apply
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              No deposits before confirmation. Here's exactly what comes next.
            </p>

            <ul className="space-y-4 mb-6">
              {REASSURANCE.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#16A34A]/15 text-[#16A34A]">
                      <Icon size={16} aria-hidden={true} />
                    </div>
                    <span className="text-sm text-gray-200 leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-white/10 pt-5 space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Insurance included for every player
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Medical staff on-site for every session
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Parent WhatsApp line during camp
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
