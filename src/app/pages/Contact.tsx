import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "../components/ui/Link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { submitContact } from "../../lib/contact-api";
import { SEO } from "../components/SEO";
import { localBusinessJsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
import {
  MotionSection,
  MotionCard,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
  AnimatedUnderline,
} from "../components/ui/motion";
import { fadeUp, stagger } from "@/lib/motion";

const SUBJECT_OPTIONS = [
  { value: "general", label: "General Enquiry" },
  { value: "programme", label: "Programme & Admissions" },
  { value: "scout", label: "Scouts & Agents" },
  { value: "camps", label: "Camps" },
  { value: "partnership", label: "Partnerships & Sponsorship" },
];

const WHATSAPP_NUMBER = "201094045658";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hello! I'd like to learn more about The Maker Football Incubator."
);

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "general",
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
  const reduced = useReducedMotion();
  const initial = reduced ? false : "hidden";

  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // A11y: move focus to the success heading once the form transitions to
  // "success" so screen-reader users hear the confirmation.
  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
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
      phone: true,
      subject: true,
      message: true,
      consent: true,
    });
    if (!isValid) {
      // Defer focus until aria-invalid attributes have re-rendered, then
      // move focus to the first invalid field for keyboard + SR users.
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
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        subject: form.subject,
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

  const showError = (field: keyof FormState) =>
    Boolean(touched[field] && errors[field]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        path="/contact"
        title="Contact — The Maker"
        description="Get in touch with The Maker Football Incubator — Cairo, Egypt. Programme admissions, scouting, partnerships, and press."
        jsonLd={[
          localBusinessJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      {/* Hero — animated gradient mesh */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-[#0F172A]"
      >
        <GradientMesh variant="green-slate" opacity={0.6} />
        <GrainOverlay opacity={0.05} />
        <div className="absolute inset-0 bg-[#0F172A]/40" />
        <motion.div
          initial={initial}
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#16A34A] font-bold text-sm tracking-widest uppercase block mb-3">
            We'd love to hear from you
          </span>
          <h1
            id="contact-hero-heading"
            className="text-5xl md:text-6xl font-bold text-white"
          >
            GET IN TOUCH
          </h1>
        </motion.div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-20">
        {/* Contact method cards */}
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Parents */}
          <MotionCard
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#16A34A]"
            as="article"
          >
            <h3 className="font-bold text-[#0F172A] text-xl mb-4">
              For Parents & Players
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Learn about our scholarship track or enrol in our academy.
            </p>
            <div className="space-y-3">
              <AnimatedUnderline>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#16A34A] font-bold text-sm"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </AnimatedUnderline>
              <br />
              <AnimatedUnderline color="#64748B">
                <a
                  href="mailto:admissions@themaker.eg"
                  className="inline-flex items-center gap-2 text-gray-600 text-sm"
                >
                  <Mail size={16} /> admissions@themaker.eg
                </a>
              </AnimatedUnderline>
            </div>
          </MotionCard>

          {/* Scouts */}
          <MotionCard
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#15803D]"
            as="article"
          >
            <h3 className="font-bold text-[#0F172A] text-xl mb-4">
              For Scouts & Agents
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Access our player catalogue and discuss talent opportunities.
            </p>
            <div className="space-y-3">
              <AnimatedUnderline color="#15803D">
                <Link
                  to="/scouts"
                  className="inline-flex items-center gap-2 text-[#15803D] font-bold text-sm"
                >
                  Go to Scouts Portal →
                </Link>
              </AnimatedUnderline>
              <br />
              <AnimatedUnderline color="#64748B">
                <a
                  href="mailto:scouting@themaker.eg"
                  className="inline-flex items-center gap-2 text-gray-600 text-sm"
                >
                  <Mail size={16} /> scouting@themaker.eg
                </a>
              </AnimatedUnderline>
            </div>
          </MotionCard>

          {/* Sponsors */}
          <MotionCard
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#15803D]"
            as="article"
          >
            <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Sponsors</h3>
            <p className="text-gray-500 text-sm mb-6">
              Explore sponsorship tiers from Strategic Partner to Bronze.
            </p>
            <div className="space-y-3">
              <AnimatedUnderline color="#15803D">
                <a
                  href="mailto:partners@themaker.eg"
                  className="inline-flex items-center gap-2 text-gray-600 text-sm"
                >
                  <Mail size={16} /> partners@themaker.eg
                </a>
              </AnimatedUnderline>
              <Button
                variant="outline-white"
                className="border-[#15803D] text-[#15803D] hover:bg-[#15803D] hover:text-white w-full text-xs h-8"
              >
                Download Press Kit
              </Button>
            </div>
          </MotionCard>

          {/* Schools */}
          <MotionCard
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#15803D]"
            as="article"
          >
            <h3 className="font-bold text-[#0F172A] text-xl mb-4">For Schools</h3>
            <p className="text-gray-500 text-sm mb-6">
              Bring The Maker's training methodology to your school.
            </p>
            <AnimatedUnderline color="#15803D">
              <Link
                to="/schools"
                className="inline-flex items-center gap-2 text-[#15803D] font-bold text-sm"
              >
                Schools Programme →
              </Link>
            </AnimatedUnderline>
          </MotionCard>
        </motion.div>

        {/* Form + HQ */}
        <MotionSection
          ariaLabelledby="contact-form-heading"
          className="mt-16 relative"
        >
          {/* Subtle gradient mesh ambience behind the form */}
          <div
            className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-3xl"
            aria-hidden="true"
          >
            <GradientMesh variant="green" opacity={0.18} animate={false} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-[#0F172A] mb-2"
              >
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Tell us a bit about yourself and we'll be in touch within 48 hours.
              </p>

              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#16A34A]/30 bg-[#16A34A]/5 p-6 text-[#0F172A]"
                >
                  <h3
                    ref={successHeadingRef}
                    tabIndex={-1}
                    className="font-bold text-lg mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
                  >
                    Thanks — message received.
                  </h3>
                  <p className="text-sm text-gray-600">
                    We'll be in touch within 48 hours. If your request is urgent, feel
                    free to WhatsApp us directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-bold text-[#16A34A] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  noValidate
                  onSubmit={handleSubmit}
                  className="space-y-5 glass-light p-6 md:p-8 rounded-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-bold text-[#0F172A] mb-1"
                      >
                        Name <span className="text-slate-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={showError("name") || undefined}
                        aria-describedby={
                          showError("name") ? "contact-name-error" : undefined
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30"
                      />
                      {showError("name") && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1 text-xs text-red-600"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-bold text-[#0F172A] mb-1"
                      >
                        Email <span className="text-slate-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={showError("email") || undefined}
                        aria-describedby={
                          showError("email") ? "contact-email-error" : undefined
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30"
                      />
                      {showError("email") && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1 text-xs text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-bold text-[#0F172A] mb-1"
                      >
                        Phone{" "}
                        <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="contact-phone-hint"
                        className="w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30"
                      />
                      <p
                        id="contact-phone-hint"
                        className="mt-1 text-xs text-gray-500"
                      >
                        Include country code if outside Egypt.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-bold text-[#0F172A] mb-1"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30"
                      >
                        {SUBJECT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-bold text-[#0F172A] mb-1"
                    >
                      Message <span className="text-slate-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={showError("message") || undefined}
                      aria-describedby={
                        showError("message") ? "contact-message-error" : undefined
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30"
                    />
                    {showError("message") && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex gap-3 items-start text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={showError("consent") || undefined}
                        aria-describedby={
                          showError("consent") ? "contact-consent-error" : undefined
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#16A34A] focus:ring-[#16A34A]"
                      />
                      <span>
                        I agree to The Maker Football Incubator processing my data per
                        the{" "}
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
                        id="contact-consent-error"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                    >
                      {errorMessage || "Something went wrong. Please try again."}
                    </div>
                  )}

                  <MagneticButton>
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full md:w-auto"
                    >
                      {status === "submitting" ? "Sending…" : "Send Message"}
                    </Button>
                  </MagneticButton>
                </form>
              )}
            </div>

            {/* HQ */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Visit Our HQ</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-4">
                  <MapPin className="text-[#16A34A] shrink-0" />
                  <div>
                    <span className="font-bold block text-[#0F172A]">
                      The Maker Headquarters
                    </span>
                    Street 90, New Cairo
                    <br />
                    Cairo, Egypt
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-[#16A34A] shrink-0" />
                  <AnimatedUnderline>
                    <a href="tel:+201094045658" className="text-gray-600">
                      +20 109 404 5658
                    </a>
                  </AnimatedUnderline>
                </div>
                <div className="flex gap-4">
                  <MessageCircle className="text-[#16A34A] shrink-0" />
                  <AnimatedUnderline>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600"
                    >
                      WhatsApp +20 109 404 5658
                    </a>
                  </AnimatedUnderline>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-[#0F172A] mb-2">European Enquiries</h3>
                <p className="text-sm text-gray-500">
                  For matters related to Enosis Paralimni or SC Farense partnerships,
                  please contact our International Relations department.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </div>
  );
};
