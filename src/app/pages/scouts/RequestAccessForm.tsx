import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";
import { submitScoutApp } from "../../../lib/contact-api";
import { CheckCircle2, FileText, MessageSquare, Lock } from "lucide-react";

const ROLE_OPTIONS = [
  { value: "head-scout", label: "Head Scout" },
  { value: "recruiter", label: "Recruiter" },
  { value: "agent", label: "Agent" },
  { value: "club-official", label: "Club Official" },
  { value: "academy-director", label: "Academy Director" },
  { value: "other", label: "Other" },
];

type ScoutForm = {
  name: string;
  email: string;
  organization: string;
  country: string;
  role: string;
  message: string;
  consent: boolean;
};

const initialState: ScoutForm = {
  name: "",
  email: "",
  organization: "",
  country: "",
  role: "head-scout",
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  "w-full rounded-lg bg-[#0F172A] border border-white/20 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-colors";

/**
 * RequestAccessForm — visually upgraded two-column form section.
 * Field schema and validation behavior intentionally preserved from the
 * original Scouts.tsx implementation; the wire payload still calls
 * submitScoutApp with name/email/organization/country/position/message/
 * consent/website (honeypot).
 */
export const RequestAccessForm: React.FC = () => {
  const [form, setForm] = useState<ScoutForm>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Refs for SR-friendly focus management on submit + success.
  const formRef = useRef<HTMLFormElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (status === "success") {
      // Move focus to the success heading so screen readers + keyboard
      // users land on the confirmation rather than dropping to <body>.
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof ScoutForm, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!form.organization.trim())
      e.organization = "Please enter your organization.";
    if (!form.country.trim()) e.country = "Please enter your country.";
    if (!form.message.trim()) e.message = "Please add a short message.";
    else if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    if (!form.consent)
      e.consent = "Please accept the privacy notice to continue.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    >
  ) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Surface every field error first so the user can see what's wrong.
    setTouched({
      name: true,
      email: true,
      organization: true,
      country: true,
      role: true,
      message: true,
      consent: true,
    });
    if (!isValid) {
      // Move focus to the first invalid field — keyboard + SR users need
      // to know where the error is, not just that there is one.
      // We defer to the next tick so the aria-invalid attributes have
      // re-rendered before we query the DOM.
      requestAnimationFrame(() => {
        const firstInvalid = formRef.current?.querySelector<HTMLElement>(
          '[aria-invalid="true"]'
        );
        firstInvalid?.focus();
      });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      await submitScoutApp({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim(),
        country: form.country.trim(),
        position: form.role,
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
          : "Something went wrong. Please try again."
      );
    }
  };

  const showError = (field: keyof ScoutForm) =>
    Boolean(touched[field] && errors[field]);

  const REASSURANCE = [
    {
      icon: Lock,
      text: "Access link to encrypted pipeline dashboard",
    },
    {
      icon: FileText,
      text: "Scholar profile PDFs (stats, video, coach notes)",
    },
    {
      icon: MessageSquare,
      text: "Direct line to our scouting coordinator",
    },
  ];

  return (
    <section
      id="request-access"
      aria-labelledby="request-access-heading"
      tabIndex={-1}
      className="scroll-mt-24 bg-[#0F172A] py-20 md:py-24 focus:outline-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="text-[#15803D] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
            Request Scout Access
          </span>
          <h2
            id="request-access-heading"
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            Tell us a bit about you. We'll be in touch within 48 hours.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            All requests reviewed personally by our scouting coordinator. No
            auto-replies, no chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form column — lifted to bg-[#1E293B] for input/panel contrast
              separation (parity with the reassurance aside). */}
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
                  Thanks — we'll be in touch within 48 hours.
                </h3>
                <p className="text-sm text-gray-300">
                  Our scouting team will review your request and follow up by
                  email with verification next steps and pipeline access.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-bold text-[#16A34A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B] rounded"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="scout-name"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Name <span className="text-gray-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="scout-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("name") || undefined}
                      aria-describedby={
                        showError("name") ? "scout-name-error" : "scout-name-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("name") && (
                      <p
                        id="scout-name-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Your full name.
                      </p>
                    )}
                    {showError("name") && (
                      <p
                        id="scout-name-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="scout-organization"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Organization <span className="text-gray-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="scout-organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      required
                      value={form.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("organization") || undefined}
                      aria-describedby={
                        showError("organization")
                          ? "scout-organization-error"
                          : "scout-organization-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("organization") && (
                      <p
                        id="scout-organization-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Club, academy, or agency name.
                      </p>
                    )}
                    {showError("organization") && (
                      <p
                        id="scout-organization-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.organization}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="scout-email"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Email <span className="text-gray-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="scout-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("email") || undefined}
                      aria-describedby={
                        showError("email")
                          ? "scout-email-error"
                          : "scout-email-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("email") && (
                      <p
                        id="scout-email-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Work email preferred for credential verification.
                      </p>
                    )}
                    {showError("email") && (
                      <p
                        id="scout-email-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="scout-country"
                      className="block text-sm font-bold mb-1.5 text-white"
                    >
                      Country <span className="text-gray-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="scout-country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      required
                      value={form.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("country") || undefined}
                      aria-describedby={
                        showError("country")
                          ? "scout-country-error"
                          : "scout-country-help"
                      }
                      className={INPUT_CLASS}
                    />
                    {!showError("country") && (
                      <p
                        id="scout-country-help"
                        className="mt-1 text-xs text-gray-400"
                      >
                        Where your club or academy is based.
                      </p>
                    )}
                    {showError("country") && (
                      <p
                        id="scout-country-error"
                        role="alert"
                        className="mt-1 text-xs text-red-400"
                      >
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="scout-role"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Your Role
                  </label>
                  <select
                    id="scout-role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={INPUT_CLASS}
                  >
                    {ROLE_OPTIONS.map((opt) => (
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
                    Helps us route your request to the right coordinator.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="scout-message"
                    className="block text-sm font-bold mb-1.5 text-white"
                  >
                    Message / Players of Interest{" "}
                    <span className="text-gray-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="scout-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={showError("message") || undefined}
                    aria-describedby={
                      showError("message")
                        ? "scout-message-error"
                        : "scout-message-help"
                    }
                    className={INPUT_CLASS}
                  />
                  {!showError("message") && (
                    <p
                      id="scout-message-help"
                      className="mt-1 text-xs text-gray-400"
                    >
                      Tell us what positions, ages, or specific scholars you're
                      interested in.
                    </p>
                  )}
                  {showError("message") && (
                    <p
                      id="scout-message-error"
                      role="alert"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

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
                        showError("consent") ? "scout-consent-error" : undefined
                      }
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-[#0F172A] text-[#16A34A] focus:ring-[#16A34A]"
                    />
                    <span>
                      I agree to The Maker Football Incubator processing my data
                      per the{" "}
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
                      id="scout-consent-error"
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
                    // We intentionally do NOT set disabled={!isValid} —
                    // keyboard and screen-reader users must be able to
                    // click submit so handleSubmit can reveal per-field
                    // errors and move focus to the first invalid field.
                    disabled={status === "submitting"}
                    aria-disabled={!isValid || status === "submitting"}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    {status === "submitting" ? "Sending…" : "Submit Request"}
                  </Button>
                  <p className="mt-3 text-xs text-gray-400">
                    All enquiries responded to within 48 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Reassurance panel */}
          <aside
            aria-labelledby="reassurance-heading"
            className="lg:col-span-4 bg-[#1E293B] rounded-2xl border border-white/10 p-6 md:p-8 h-fit"
          >
            <h3
              id="reassurance-heading"
              className="text-white font-bold text-lg mb-2"
            >
              What you'll receive within 48 hours
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Once your credentials are verified, you'll get the full scouting
              package — not a sales pitch.
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
                No scouting fees
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Confidential — single coordinator handles your account
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden={true}
                  className="text-[#16A34A] flex-shrink-0"
                />
                Real data, never marketing decks
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default RequestAccessForm;
