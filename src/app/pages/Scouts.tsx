import React, { useMemo, useState } from "react";
import { Button } from "../components/ui/Button";
import { Link } from "../components/ui/Link";
import { submitScoutApp } from "../../lib/contact-api";
import { SEO } from "../components/SEO";
import { breadcrumbJsonLd } from "../../lib/jsonld";

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

export const Scouts = () => {
  const [form, setForm] = useState<ScoutForm>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    if (!form.consent) e.consent = "Please accept the privacy notice to continue.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      organization: true,
      country: true,
      role: true,
      message: true,
      consent: true,
    });
    if (!isValid) return;

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

  const inputClass =
    "w-full rounded-lg bg-[#0F172A] border border-white/20 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40";

  return (
    <div className="pt-24 min-h-screen bg-[#0F172A] text-white">
      <SEO
        path="/scouts"
        title="For Scouts & Agents — The Maker"
        description="Access Egypt's most promising young talent through The Maker's professional scouting and agent network. Request a confidential introduction."
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Scouts", path: "/scouts" },
        ])}
      />
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">FOR SCOUTS & AGENTS</h1>
        <p className="text-xl text-gray-400 mb-12">
          Access Egypt’s most promising young talent through our professional scouting
          network and direct European partnerships.
        </p>
      </section>

      {/* Why The Maker */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Holistic Development", text: "4-pillar methodology producing complete players." },
            { title: "English Speakers", text: "Dedicated language programme for international readiness." },
            { title: "Culturally Prepared", text: "Education, psychology, and life skills for Europe." },
            { title: "Direct Pipeline", text: "Partnerships with Enosis Paralimni & SC Farense." },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#1E293B] p-6 rounded-xl border-t-4 border-[#16A34A]"
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* European Network */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Our European Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1E293B] p-8 rounded-xl border border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-bold">
              EP
            </div>
            <div>
              <h3 className="text-2xl font-bold">Enosis Paralimni</h3>
              <p className="text-gray-400 text-sm">
                Mido serves as Sporting Director — a direct bridge to Europe.
              </p>
            </div>
          </div>
          <div className="bg-[#1E293B] p-8 rounded-xl border border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-bold">
              SCF
            </div>
            <div>
              <h3 className="text-2xl font-bold">SC Farense</h3>
              <p className="text-gray-400 text-sm">
                Access to Portuguese methodologies and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="bg-white/5 p-8 rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Request Access</h2>
          <p className="text-gray-400 text-sm mb-6">
            Tell us a bit about you and we’ll be in touch within 48 hours.
          </p>

          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-[#16A34A]/40 bg-[#16A34A]/10 p-6"
            >
              <h3 className="font-bold text-lg mb-1">
                Thanks — we’ll be in touch within 48 hours.
              </h3>
              <p className="text-sm text-gray-300">
                Our scouting team will review your request and follow up by email.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-bold text-[#16A34A] hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="scout-name"
                    className="block text-sm font-bold mb-1"
                  >
                    Name <span className="text-[#D97706]">*</span>
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
                      showError("name") ? "scout-name-error" : undefined
                    }
                    className={inputClass}
                  />
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
                    className="block text-sm font-bold mb-1"
                  >
                    Organization <span className="text-[#D97706]">*</span>
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
                        : undefined
                    }
                    className={inputClass}
                  />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="scout-email"
                    className="block text-sm font-bold mb-1"
                  >
                    Email <span className="text-[#D97706]">*</span>
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
                      showError("email") ? "scout-email-error" : undefined
                    }
                    className={inputClass}
                  />
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
                    className="block text-sm font-bold mb-1"
                  >
                    Country <span className="text-[#D97706]">*</span>
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
                      showError("country") ? "scout-country-error" : undefined
                    }
                    className={inputClass}
                  />
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
                  className="block text-sm font-bold mb-1"
                >
                  Position
                </label>
                <select
                  id="scout-role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass}
                >
                  {ROLE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0F172A]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="scout-message"
                  className="block text-sm font-bold mb-1"
                >
                  Message / Players of Interest{" "}
                  <span className="text-[#D97706]">*</span>
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
                    showError("message") ? "scout-message-error" : undefined
                  }
                  className={inputClass}
                />
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
                    I agree to The Maker Football Incubator processing my data per the{" "}
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

              <Button
                type="submit"
                disabled={!isValid || status === "submitting"}
                className="w-full"
              >
                {status === "submitting" ? "Sending…" : "Submit Request"}
              </Button>
            </form>
          )}
          <p className="text-center text-gray-500 text-sm mt-4">
            All enquiries responded to within 48 hours.
          </p>
        </div>
      </section>
    </div>
  );
};
