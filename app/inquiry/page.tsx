import type { Metadata } from "next";
import { B2BInquiryForm } from "../components/B2BInquiryForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Submit Inquiry | YATELEE HVAC Thermostat Manufacturer",
  description:
    "Submit your HVAC thermostat, fan coil thermostat, room temperature control or OEM/ODM product requirement to YATELEE.",
  alternates: {
    canonical: "/inquiry/"
  }
};

export default function InquiryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inquiry-page">
        <div className="inquiry-page-copy">
          <nav className="breadcrumb contact-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Submit Inquiry</strong>
          </nav>
          <h1>Submit Your B2B Inquiry</h1>
          <p>
            Share your product requirement, country, phone or WhatsApp number, and project details.
            Required fields are marked clearly so our sales team can follow up efficiently.
          </p>
          <div className="inquiry-trust-list">
            <span>Manufacturer communication</span>
            <span>OEM/ODM project support</span>
            <span>HVAC thermostat selection help</span>
          </div>
        </div>
        <B2BInquiryForm />
      </section>
      <SiteFooter />
    </main>
  );
}
