import type { Metadata } from "next";
import { B2BInquiryForm } from "../components/B2BInquiryForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const companyAddress =
  "2nd floor, building C, No.15 Gangbao road, Xiaolan town, Zhongshan city, Guangdong province";
const osmSearchUrl =
  "https://www.openstreetmap.org/search?query=2nd%20floor%2C%20building%20C%2C%20No.15%20Gangbao%20road%2C%20Xiaolan%20town%2C%20Zhongshan%20city%2C%20Guangdong%20province";

export const metadata: Metadata = {
  title: "Contact YATELEE | HVAC Thermostat Manufacturer",
  description:
    "Contact Zhongshan Yatelee Electronic Technology Co., Ltd. for HVAC thermostat, fan coil thermostat and OEM/ODM temperature control panel inquiries.",
  alternates: {
    canonical: "/contact-us/"
  },
  openGraph: {
    title: "Contact YATELEE | HVAC Thermostat Manufacturer",
    description:
      "Send thermostat project requirements, OEM/ODM inquiries and HVAC control product requests to YATELEE.",
    url: "/contact-us/",
    type: "website"
  }
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="contact-hero">
        <div>
          <nav className="breadcrumb contact-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Contact Us</strong>
          </nav>
          <h1>Contact YATELEE</h1>
          <p>
            Send your HVAC thermostat requirement, OEM/ODM customization request, project application
            and target market information. Our sales team will help confirm the suitable product
            configuration.
          </p>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-card">
          <span>Company Address</span>
          <h2>Zhongshan Yatelee Electronic Technology Co., Ltd.</h2>
          <p>{companyAddress}</p>
          <div className="contact-lines">
            <a href="mailto:Kale.Yan@zhongshanyatelee.com">Kale.Yan@zhongshanyatelee.com</a>
            <a href="https://wa.me/85257877043">WhatsApp: 85257877043</a>
            <a href={osmSearchUrl}>Open in OpenStreetMap</a>
          </div>
        </div>
        <div className="map-shell">
          <iframe
            title="YATELEE address map on OpenStreetMap"
            src="https://www.openstreetmap.org/export/embed.html?bbox=113.2258%2C22.6602%2C113.2565%2C22.6866&layer=mapnik&marker=22.6734%2C113.2412"
            loading="lazy"
          />
          <div className="map-caption">
            <strong>OpenStreetMap</strong>
            <span>Marker location should be confirmed with an exact map pin before final launch.</span>
          </div>
        </div>
      </section>

      <section className="inquiry-section contact-inquiry" id="contact-form">
        <div>
          <h2>Send Your Project Requirement</h2>
          <p>
            Tell us your country, product interest, quantity, application and customization needs.
            We will reply with suitable product information and next steps.
          </p>
          <ul>
            <li>Kale Yan</li>
            <li>Kale.Yan@zhongshanyatelee.com</li>
            <li>WhatsApp: 85257877043</li>
            <li>Zhongshan, Guangdong, China</li>
          </ul>
        </div>
        <B2BInquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}
