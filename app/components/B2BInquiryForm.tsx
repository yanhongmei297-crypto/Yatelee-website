"use client";

import { FormEvent, useMemo, useState } from "react";

type InquiryStatus = "idle" | "success" | "error";

type InquiryFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productRequirement: string;
  message: string;
  website: string;
};

const initialState: InquiryFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productRequirement: "",
  message: "",
  website: ""
};

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validatePhone(value: string) {
  return /^\+?[0-9\s().-]{7,24}$/.test(value.trim());
}

function i18nText(key: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const currentLang = localStorage.getItem("siteLanguage") || "en";
  const i18n = (
    window as Window & {
      YateleeI18n?: { translations?: Record<string, Record<string, string>> };
    }
  ).YateleeI18n;

  return (
    i18n?.translations?.[currentLang]?.[key] ||
    i18n?.translations?.en?.[key] ||
    fallback
  );
}

export function B2BInquiryForm() {
  const [form, setForm] = useState<InquiryFormState>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<InquiryStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const errors = useMemo(() => {
    const next: Partial<Record<keyof InquiryFormState, string>> = {};

    if (!form.name.trim()) next.name = i18nText("requiredName", "Please enter your name.");
    if (!form.email.trim()) next.email = i18nText("requiredEmail", "Please enter your email address.");
    else if (!validateEmail(form.email)) next.email = i18nText("invalidEmail", "Please enter a valid business email.");
    if (!form.phone.trim()) next.phone = i18nText("requiredPhone", "Please enter your phone or WhatsApp number.");
    else if (!validatePhone(form.phone)) next.phone = i18nText("invalidPhone", "Please enter a valid international phone number.");

    return next;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      country: true,
      productRequirement: true,
      message: true
    });

    if (form.website) {
      setStatus("error");
      setStatusMessage(i18nText("spamBlocked", "Submission blocked by anti-spam check."));
      return;
    }

    if (hasErrors) {
      setStatus("error");
      setStatusMessage(i18nText("requiredNotice", "Please complete the required fields before submitting."));
      return;
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setStatusMessage(i18nText("successNotice", "Thank you. Your inquiry has been submitted successfully."));
      setForm(initialState);
      setTouched({});
    } catch {
      setStatus("error");
      setStatusMessage(
        i18nText("backendPending", "The form is ready, but backend email or database integration is not connected yet.")
      );
    }
  }

  function updateField(field: keyof InquiryFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function markTouched(field: keyof InquiryFormState) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  return (
    <form className="b2b-inquiry-form" noValidate onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="anti-spam-field"
        name="website"
        onChange={(event) => updateField("website", event.target.value)}
        tabIndex={-1}
        value={form.website}
      />

      <div className="form-row">
        <label>
          <span data-i18n="nameRequired">
            Name <em>*</em>
          </span>
          <input
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-label="Name"
            data-i18n-placeholder="namePlaceholder"
            onBlur={() => markTouched("name")}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            required
            value={form.name}
          />
          {touched.name && errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          <span data-i18n="emailRequired">
            Email <em>*</em>
          </span>
          <input
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-label="Email"
            data-i18n-placeholder="emailPlaceholder"
            onBlur={() => markTouched("email")}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="name@company.com"
            required
            type="email"
            value={form.email}
          />
          {touched.email && errors.email ? <small>{errors.email}</small> : null}
        </label>
      </div>

      <div className="form-row">
        <label>
          <span data-i18n="phoneRequired">
            Phone / WhatsApp <em>*</em>
          </span>
          <input
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-label="Phone"
            data-i18n-placeholder="phonePlaceholder"
            inputMode="tel"
            onBlur={() => markTouched("phone")}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+86 180 0000 0000"
            required
            type="tel"
            value={form.phone}
          />
          {touched.phone && errors.phone ? <small>{errors.phone}</small> : null}
        </label>
        <label>
          <span data-i18n="companyName">Company Name</span>
          <input
            aria-label="Company Name"
            data-i18n-placeholder="companyPlaceholder"
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Your company name"
            value={form.company}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span data-i18n="countryRegion">Country / Region</span>
          <input
            aria-label="Country or Region"
            data-i18n-placeholder="countryPlaceholder"
            onChange={(event) => updateField("country", event.target.value)}
            placeholder="Country / Region"
            value={form.country}
          />
        </label>
        <label>
          <span data-i18n="productRequirement">Product Requirement</span>
          <input
            aria-label="Product Requirement"
            data-i18n-placeholder="productPlaceholder"
            onChange={(event) => updateField("productRequirement", event.target.value)}
            placeholder="Smart thermostat, fan coil thermostat, OEM/ODM..."
            value={form.productRequirement}
          />
        </label>
      </div>

      <label>
        <span data-i18n="message">Message</span>
        <textarea
          aria-label="Message"
          data-i18n-placeholder="messagePlaceholder"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your application, quantity, voltage, protocol, packaging or customization needs."
          rows={5}
          value={form.message}
        />
      </label>

      <p className="form-note">
        <span data-i18n="antiSpamNote">Optional anti-spam: keep the hidden honeypot field and add Turnstile/reCAPTCHA before launch.</span>
      </p>

      {statusMessage ? <div className={`form-status ${status}`}>{statusMessage}</div> : null}

      <button data-i18n="submitInquiry" type="submit">Submit Inquiry</button>
    </form>
  );
}
