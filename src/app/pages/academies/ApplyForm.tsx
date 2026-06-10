import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";
import { submitAcademyApplication } from "../../../lib/contact-api";
import { EGYPTIAN_GOVERNORATES } from "../../../lib/governorates";
import {
  CheckCircle2,
  Clock,
  Eye,
  Mail,
  MessageSquare,
} from "lucide-react";

const POSITION_OPTIONS = [
  { value: "gk", label: "Goalkeeper" },
  { value: "defender", label: "Defender" },
  { value: "midfielder", label: "Midfielder" },
  { value: "forward", label: "Forward" },
  { value: "not-sure", label: "Not sure" },
] as const;

// DOB bounds for the date input. `dobMax` is today (can't be born in the
// future); `dobMin` is 25 years back (sane lower bound for U-10 to U-18
// applicants). Same pattern as the camps form.
const DOB_MAX = new Date().toISOString().slice(0, 10);
const DOB_MIN = new Date(Date.now() - 25 * 365 * 24 * 3600_000)
  .toISOString()
  .slice(0, 10);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()]{6,32}$/;
// Match the server-side https-only URL check — frontend gives a friendlier
// inline error if the user pastes a non-https URL.
const HTTPS_URL_RE = /^https:\/\/[^\s]+$/i;

const INPUT_CLASS =
  "w-full rounded-lg bg-[#0F172A] border border-white/20 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-colors";

type AcademyForm = {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  playerName: string;
  playerDob: string;
  playerGovernorate: string;
  position: string;
  currentClub: string;
  footageUrl: string;
  whyMaker: string;
  consent: boolean;
};

const initialState: AcademyForm = {
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  playerName: "",
  playerDob: "",
  playerGovernorate: "",
  position: "not-sure",
  currentClub: "",
  footageUrl: "",
  whyMaker: "",
  consent: false,
};

/**
 * ApplyForm — parent-facing academy application.
 *
 * Mirrors the a11y / focus / error-display contract from the camps
 * RegistrationForm and the scouts RequestAccessForm:
 *  - `<label htmlFor>` per field
 *  - aria-invalid + aria-describedby on errored inputs
 *  - role="alert" per-field errors
 *  - role="status" aria-live="polite" success state with focus moved to
 *    the success heading
 *  - submit NOT disabled when invalid — clicking surfaces all errors and
 *    focuses the first invalid field
 *  - hidden honeypot `website` field at input level (aria-hidden + tabIndex=-1)
 */
export const ApplyForm: React.FC = () => {
  const [form, setForm] = useState<AcademyForm>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof AcademyForm, string>> = {};
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
    if (!form.playerGovernorate)
      e.playerGovernorate = "Please select a governorate.";
    if (form.currentClub.length > 200)
      e.currentClub = "Current club is limited to 200 characters.";
    if (form.footageUrl.trim().length > 0 && !HTTPS_URL_RE.test(form.footageUrl.trim()))
      e.footageUrl = "Footage link must start with https://.";
    if (form.footageUrl.length > 500)
      e.footageUrl = "Footage link is too long.";
    if (!form.whyMaker.trim())
      e.whyMaker = "Please share a few sentences about your motivation.";
    else if (form.whyMaker.trim().length < 50)
      e.whyMaker = "Please share at least 50 characters.";
    else if (form.whyMaker.length > 1000)
      e.whyMaker = "Please keep this under 1,000 characters.";
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
      playerGovernorate: true,
      position: true,
      currentClub: true,
      footageUrl: true,
      whyMaker: true,
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
      await submitAcademyApplication({
        parentName: form.parentName.trim(),
        parentEmail: form.parentEmail.trim(),
        parentPhone: form.parentPhone.trim(),
        playerName: form.playerName.trim(),
        playerDob: form.playerDob.trim(),
        playerGovernorate: form.playerGovernorate,
        position: form.position,
        currentClub: form.currentClub.trim() || undefined,
        footageUrl: form.footageUrl.trim() || undefined,
        whyMaker: form.whyMaker.trim(),
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

  const showError = (field: keyof AcademyForm) =>
    Boolean(touched[field] && errors[field]);

  const REASSURANCE = [
    { icon: Clock, text: "We confirm receipt within 14 days" },
    { icon: Eye, text: "Footage review by Mido's coaching staff" },
    { icon: Mail, text: "Trial invitation if selected" },
    { icon: CheckCircle2, text: "Scholarship pathway for selected scholars" },
    { icon: MessageSquare, text: "Direct line to our admissions team" },
  ];

  return (
    <section
      id="apply"
      aria-labelledby="apply-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-[#0F172A] py-20 md:py-24 focus:outline-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
            Apply to the Academy
          </span>
          <h2
            id="apply-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            Tell us about your player. We'll be in touch within 14 days.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Every application reviewed personally by our coaching staff. The
            assessment is free, and there's no deposit at any stage.
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
                  Application received — we'll be in touch within 14 days.
                </h3>
                <p className="text-sm text-gray-300">
                  Our coaching team will review the application and footage,
                  and follow up by email with next steps. No deposits, no
                  payment required until a scholarship is confirmed.
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
                {/* Honeypot — input itself is aria-hidden + tabIndex=-1 so
                    AT skips it entirely. Off-screen positioning (NOT
                    display:none) so bots still find and helpfully fill it. */}
                <input
                  id="academy-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                  aria-hidden="true"
                  aria-label="Do not fill"
                  className="absolute left-[-9999px] top-auto w-[1px] h-[1px] overflow-hidden"
                />

                {/* Parent name + email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="academy-parent-name"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Parent / Guardian Name{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="academy-parent-name"
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
                          ? "academy-parent-name-error"
                          : "academy-parent-name-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("parentName") && (
                      <p
                        id="academy-parent-name-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        The adult we'll be in touch with.
                      </p>
                    )}
                    {showError("parentName") && (
                      <p
                        id="academy-parent-name-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="academy-parent-email"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Email{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="academy-parent-email"
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
                          ? "academy-parent-email-error"
                          : "academy-parent-email-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("parentEmail") && (
                      <p
                        id="academy-parent-email-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Where we'll send your application response.
                      </p>
                    )}
                    {showError("parentEmail") && (
                      <p
                        id="academy-parent-email-error"
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
                    htmlFor="academy-parent-phone"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Phone{" "}
                    <span className="text-gray-400" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="academy-parent-phone"
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
                        ? "academy-parent-phone-error"
                        : "academy-parent-phone-help"
                    }
                    className={INPUT_CLASS}
                  />
                  {!showError("parentPhone") && (
                    <p
                      id="academy-parent-phone-help"
                      className="mt-1 text-xs text-gray-400"
                    >
                      WhatsApp number preferred for fast coordination.
                    </p>
                  )}
                  {showError("parentPhone") && (
                    <p
                      id="academy-parent-phone-error"
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
                      htmlFor="academy-player-name"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Player Name{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="academy-player-name"
                      name="playerName"
                      type="text"
                      required
                      value={form.playerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("playerName") || undefined}
                      aria-describedby={
                        showError("playerName")
                          ? "academy-player-name-error"
                          : undefined
                      }
                      className={INPUT_CLASS}
                    />
                    {showError("playerName") && (
                      <p
                        id="academy-player-name-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="academy-player-dob"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Player Date of Birth{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="academy-player-dob"
                      name="playerDob"
                      type="date"
                      required
                      min={DOB_MIN}
                      max={DOB_MAX}
                      value={form.playerDob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("playerDob") || undefined}
                      aria-describedby={
                        showError("playerDob")
                          ? "academy-player-dob-error"
                          : undefined
                      }
                      className={INPUT_CLASS}
                    />
                    {showError("playerDob") && (
                      <p
                        id="academy-player-dob-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerDob}
                      </p>
                    )}
                  </div>
                </div>

                {/* Governorate + position */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="academy-governorate"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Governorate{" "}
                      <span className="text-gray-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="academy-governorate"
                      name="playerGovernorate"
                      required
                      value={form.playerGovernorate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={
                        showError("playerGovernorate") || undefined
                      }
                      aria-describedby={
                        showError("playerGovernorate")
                          ? "academy-governorate-error"
                          : "academy-governorate-help"
                      }
                      className={INPUT_CLASS}
                    >
                      <option value="" className="bg-[#0F172A]">
                        Select governorate…
                      </option>
                      {EGYPTIAN_GOVERNORATES.map((g) => (
                        <option
                          key={g}
                          value={g}
                          className="bg-[#0F172A]"
                        >
                          {g}
                        </option>
                      ))}
                    </select>
                    {!showError("playerGovernorate") && (
                      <p
                        id="academy-governorate-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        We scout across all of Egypt.
                      </p>
                    )}
                    {showError("playerGovernorate") && (
                      <p
                        id="academy-governorate-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.playerGovernorate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="academy-position"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Player Position
                    </label>
                    <select
                      id="academy-position"
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
                      Pick "Not sure" if it varies.
                    </p>
                  </div>
                </div>

                {/* Current club + footage URL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="academy-current-club"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Current Club / School Team
                    </label>
                    <input
                      id="academy-current-club"
                      name="currentClub"
                      type="text"
                      autoComplete="organization"
                      value={form.currentClub}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("currentClub") || undefined}
                      aria-describedby={
                        showError("currentClub")
                          ? "academy-current-club-error"
                          : "academy-current-club-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("currentClub") && (
                      <p
                        id="academy-current-club-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Optional — where they currently train or play.
                      </p>
                    )}
                    {showError("currentClub") && (
                      <p
                        id="academy-current-club-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.currentClub}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="academy-footage-url"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Footage Link
                    </label>
                    <input
                      id="academy-footage-url"
                      name="footageUrl"
                      type="url"
                      inputMode="url"
                      placeholder="YouTube / Drive / Vimeo link to gameplay"
                      value={form.footageUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("footageUrl") || undefined}
                      aria-describedby={
                        showError("footageUrl")
                          ? "academy-footage-url-error"
                          : "academy-footage-url-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("footageUrl") && (
                      <p
                        id="academy-footage-url-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Optional but strongly encouraged. Speeds up review.
                      </p>
                    )}
                    {showError("footageUrl") && (
                      <p
                        id="academy-footage-url-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.footageUrl}
                      </p>
                    )}
                  </div>
                </div>

                {/* Why The Maker */}
                <div>
                  <label
                    htmlFor="academy-why-maker"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Why The Maker?{" "}
                    <span className="text-gray-400" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="academy-why-maker"
                    name="whyMaker"
                    rows={5}
                    required
                    minLength={50}
                    maxLength={1000}
                    value={form.whyMaker}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us briefly why you want your child to join the Maker academy."
                    aria-invalid={showError("whyMaker") || undefined}
                    aria-describedby={
                      showError("whyMaker")
                        ? "academy-why-maker-error"
                        : "academy-why-maker-help"
                    }
                    className={INPUT_CLASS}
                  />
                  {!showError("whyMaker") && (
                    <p
                      id="academy-why-maker-help"
                      className="mt-1 text-xs text-gray-400"
                    >
                      50-1,000 characters. Honest answers help us assess fit.
                    </p>
                  )}
                  {showError("whyMaker") && (
                    <p
                      id="academy-why-maker-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.whyMaker}
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
                        showError("consent")
                          ? "academy-consent-error"
                          : undefined
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
                      id="academy-consent-error"
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
                    Reviewed personally by our coaching staff within 14 days.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Reassurance aside */}
          <aside
            aria-labelledby="academy-reassurance-heading"
            className="lg:col-span-4 bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 h-fit"
          >
            <h3
              id="academy-reassurance-heading"
              className="text-white font-bold text-lg mb-2"
            >
              What happens after you apply
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Clear timelines, no deposits, no hidden costs. Here's exactly
              what comes next.
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
                Assessment is free
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                No deposits before scholarship offer
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Written feedback either way
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
