import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

const productUrl = "/products/smart-touch-screen-hvac-thermostat/";
const productName = "Smart Touch Screen HVAC Thermostat";
const productDescription =
  "Smart touch screen HVAC thermostat with a white square housing, black mirror display, blue temperature digits and touch keys for fan coil units, hotel rooms, offices and commercial buildings.";

export const metadata: Metadata = {
  title: "Smart Touch Screen HVAC Thermostat | YATELEE OEM/ODM Manufacturer",
  description:
    "Smart touch screen HVAC thermostat for fan coil units, hotel rooms, offices and commercial buildings. OEM/ODM thermostat manufacturing support from YATELEE.",
  alternates: {
    canonical: productUrl
  },
  openGraph: {
    title: "Smart Touch Screen HVAC Thermostat | YATELEE",
    description: productDescription,
    url: productUrl,
    type: "website",
    images: [
      {
        url: "/images/smart-touch-screen-hvac-thermostat-cropped.jpg",
        width: 2000,
        height: 2500,
        alt: "Smart touch screen HVAC thermostat with black mirror screen and white housing"
      }
    ]
  }
};

const quickSpecs = [
  ["Product Type", "Touch screen HVAC thermostat"],
  ["Main Applications", "Fan coil unit, hotel room HVAC, office, commercial building"],
  ["Display", "Black mirror screen with blue temperature digits"],
  ["Control Mode", "Available upon request"],
  ["Communication", "To be confirmed"],
  ["OEM/ODM", "Logo, color, packaging and software options available upon request"]
];

const features = [
  "Black mirror touch screen with clear blue digital temperature display",
  "White square housing designed for modern room and hotel interiors",
  "Cooling mode display with snowflake icon and AUTO fan indication",
  "Touch key interface for power, menu, fan and temperature adjustment",
  "Suitable for fan coil unit control and room temperature management",
  "OEM/ODM options for distributors, HVAC brands and project buyers"
];

const technicalParameters = [
  ["Power Supply", "To be confirmed"],
  ["Load / Output", "To be confirmed"],
  ["Temperature Range", "Available upon request"],
  ["Sensor Type", "Available upon request"],
  ["Control Object", "Fan coil unit / room temperature control, project configuration required"],
  ["Display Type", "Mirror black touch screen"],
  ["Housing Color", "White housing with black front screen"],
  ["Installation", "Wall-mounted, installation details available upon request"],
  ["Communication Protocol", "To be confirmed"],
  ["Customization", "Logo, color, package, manual and software options available upon request"]
];

const modelOptions = [
  ["Standard HVAC Version", "Room temperature control for fan coil and commercial HVAC projects", "Available upon request"],
  ["Hotel Room Project Version", "Guest room HVAC control with project-specific interface needs", "To be confirmed"],
  ["OEM/ODM Version", "Private label, packaging and software configuration for brand buyers", "Available upon request"]
];

const scenarios = [
  "Fan Coil Unit",
  "Hotel Room HVAC",
  "Office",
  "Commercial Building",
  "Room Temperature Control",
  "HVAC Project Supply"
];

const packingList = [
  "Smart touch screen HVAC thermostat",
  "Installation accessory set, subject to final order configuration",
  "User manual or project document, available upon request",
  "Neutral or customized packaging, available upon request"
];

const faqs = [
  {
    question: "Can this thermostat be used for fan coil units?",
    answer:
      "Yes, the product is positioned for fan coil unit and room HVAC control projects. Final wiring and control configuration should be confirmed before order."
  },
  {
    question: "Do you support OEM or private label customization?",
    answer:
      "Yes. Logo, housing color, packaging, label, manual and software-related customization can be discussed based on project requirements."
  },
  {
    question: "Can you provide technical parameters and wiring information?",
    answer:
      "Yes. Detailed specifications, wiring diagram and installation documents are available upon request after confirming the project configuration."
  },
  {
    question: "Is this page showing confirmed certifications?",
    answer:
      "No unconfirmed certification claims are added on this page. Certificate files should be displayed only after they are provided and verified."
  }
];

const relatedProducts = [
  "Room Thermostat",
  "Fan Coil Thermostat",
  "Underfloor Heating Controller",
  "Electric Thermal Actuator"
];

function JsonLd() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    image: "https://yanzhao.xyz/images/smart-touch-screen-hvac-thermostat-cropped.jpg",
    description: productDescription,
    brand: {
      "@type": "Brand",
      name: "YATELEE"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Zhongshan Yatelee Electronic Technology Co., Ltd."
    },
    category: "HVAC Thermostat",
    additionalProperty: quickSpecs.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yanzhao.xyz/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://yanzhao.xyz/products/"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productName,
        item: `https://yanzhao.xyz${productUrl}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      {[productSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </>
  );
}

export default function SmartTouchScreenHvacThermostatPage() {
  return (
    <main>
      <JsonLd />
      <SiteHeader />

      <section className="product-detail-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#products">Products</a>
          <span>/</span>
          <strong>Smart Touch Screen HVAC Thermostat</strong>
        </nav>

        <div className="product-hero-grid">
          <div className="product-gallery">
            <img
              src="/images/smart-touch-screen-hvac-thermostat-cropped.jpg"
              alt="White square smart touch screen HVAC thermostat with black mirror display and blue temperature digits"
            />
          </div>
          <div className="product-hero-copy">
            <h1>Smart Touch Screen HVAC Thermostat</h1>
            <p>
              A modern touch screen thermostat for fan coil units, hotel room HVAC, offices, commercial
              buildings and room temperature control projects. Designed for B2B buyers who need a clean
              appearance, project configuration support and OEM/ODM manufacturing options.
            </p>
            <ul>
              <li>Black mirror screen with blue temperature digits</li>
              <li>White square housing for modern interior projects</li>
              <li>Cooling, AUTO fan and touch key interface shown on the display</li>
              <li>Suitable for distributors, HVAC contractors, hotels and OEM/ODM buyers</li>
            </ul>
            <div className="product-actions">
              <a className="btn primary" href="#inquiry">
                Send Inquiry
              </a>
              <a className="btn secondary dark" href="https://wa.me/85257877043">
                WhatsApp
              </a>
              <a className="btn outline-dark" href="#inquiry">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section quick-specs-section">
        <div className="quick-specs-grid">
          {quickSpecs.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section two-column-section">
        <div>
          <h2>Product Introduction</h2>
          <p>
            This smart touch screen HVAC thermostat is planned for room temperature control in commercial
            and hospitality environments. The product appearance uses a white square body with a black
            mirror screen, blue digital temperature display, snowflake icon, AUTO indication, fan/valve
            symbols and touch keys at the bottom.
          </p>
        </div>
        <div className="compact-panel">
          <h3>Best Fit</h3>
          <p>
            Fan coil unit projects, hotel room HVAC systems, office buildings, commercial spaces and
            OEM/ODM thermostat programs.
          </p>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-heading">
          <h2>Key Features</h2>
          <p>Focused on practical B2B project requirements and easy buyer evaluation.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature}>
              <span />
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section table-section">
        <div className="product-section-heading">
          <h2>Technical Parameters</h2>
          <p>Final parameters should be confirmed according to the selected model and project configuration.</p>
        </div>
        <table>
          <tbody>
            {technicalParameters.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="product-section table-section">
        <div className="product-section-heading">
          <h2>Model Options</h2>
          <p>Use this table as a selection framework before final datasheet confirmation.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Option</th>
              <th>Recommended Use</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {modelOptions.map(([option, use, notes]) => (
              <tr key={option}>
                <td>{option}</td>
                <td>{use}</td>
                <td>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="product-section">
        <div className="product-section-heading">
          <h2>Application Scenarios</h2>
          <p>Built for commercial temperature control and project-based HVAC procurement.</p>
        </div>
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <span key={scenario}>{scenario}</span>
          ))}
        </div>
      </section>

      <section className="product-section two-column-section dark-band">
        <div>
          <h2>Wiring Diagram</h2>
          <p>
            Wiring varies by model, voltage, fan speed control and valve configuration. Final wiring diagram
            should be confirmed with the selected product version.
          </p>
        </div>
        <div className="diagram-placeholder">
          <span>Wiring diagram placeholder</span>
          <p>Available upon request after project configuration is confirmed.</p>
        </div>
      </section>

      <section className="product-section two-column-section">
        <div>
          <h2>OEM/ODM Customization</h2>
          <p>
            YATELEE supports customization discussions for thermostat buyers who need private label or
            project-specific requirements.
          </p>
        </div>
        <div className="support-list">
          <span>Logo printing</span>
          <span>Housing color and appearance options</span>
          <span>Packaging, label and manual customization</span>
          <span>Software and function configuration upon request</span>
        </div>
      </section>

      <section className="product-section two-column-section">
        <div>
          <h2>Quality & Manufacturing Support</h2>
          <p>
            As a source manufacturer and OEM/ODM solution provider, YATELEE can support overseas buyers
            with product selection, project communication and order preparation.
          </p>
        </div>
        <div className="support-list">
          <span>Project requirement review</span>
          <span>Product configuration confirmation</span>
          <span>Bulk order and export communication</span>
          <span>Technical documents available upon request</span>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-heading">
          <h2>Packing List</h2>
          <p>Packing content depends on final order configuration and packaging requirements.</p>
        </div>
        <div className="packing-grid">
          {packingList.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section className="product-section faq-section product-faq">
        <div className="product-section-heading">
          <h2>FAQ</h2>
          <p>Common questions from distributors, HVAC contractors and project buyers.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section download-section">
        <div>
          <h2>Download</h2>
          <p>Datasheet, installation manual, wiring diagram and product catalog can be added here.</p>
        </div>
        <div className="download-cards">
          <span>Datasheet: Available upon request</span>
          <span>Installation Manual: Available upon request</span>
          <span>Product Catalog: Upload pending</span>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-heading">
          <h2>Related Products</h2>
          <p>Help buyers continue browsing within the thermostat product line.</p>
        </div>
        <div className="related-grid">
          {relatedProducts.map((product) => (
            <a href="/#products" key={product}>
              {product}
            </a>
          ))}
        </div>
      </section>

      <section className="inquiry-section product-inquiry" id="inquiry">
        <div>
          <h2>Send Inquiry for Smart Touch Screen HVAC Thermostat</h2>
          <p>
            Share your country, application, expected quantity, control requirements and customization
            needs. YATELEE will help confirm the suitable configuration.
          </p>
          <ul>
            <li>Kale Yan</li>
            <li>Kale.Yan@zhongshanyatelee.com</li>
            <li>WhatsApp: 85257877043</li>
            <li>Zhongshan, Guangdong, China</li>
          </ul>
        </div>
        <form>
          {/* TODO: connect form submission to backend/email/CRM */}
          <input aria-label="Name" placeholder="Name" />
          <input aria-label="Email" placeholder="Email" type="email" />
          <input aria-label="Country" placeholder="Country" />
          <input aria-label="Product Requirement" placeholder="Product Requirement" />
          <input aria-label="Quantity" placeholder="Estimated Quantity" />
          <textarea aria-label="Message" placeholder="Message / Application / OEM requirements" rows={5} />
          <small>TODO: connect form submission to backend/email/CRM.</small>
          <button type="button">Send Inquiry</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}

