import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const productCategories = [
  {
    title: "Room Thermostat",
    text: "WiFi, Tuya, Zigbee, LCD and touch screen options for residential and commercial HVAC control.",
    spec: "Room / Wall Mounted"
  },
  {
    title: "Underfloor Heating Controller",
    text: "Wired and wireless control systems for water and electric underfloor heating projects.",
    spec: "Heating Systems"
  },
  {
    title: "Fan Coil Thermostat",
    text: "2 pipe and 4 pipe thermostat solutions for hotel rooms, offices, and commercial HVAC.",
    spec: "2 Pipe / 4 Pipe"
  },
  {
    title: "Electric Thermal Actuator",
    text: "Normally closed and normally open actuators for manifolds and heating control systems.",
    spec: "NC / NO Options"
  }
];

const applications = [
  "Underfloor Heating System",
  "Gas Boiler Heating",
  "Fan Coil Air Conditioning",
  "Hotel Room HVAC",
  "Smart Home Control",
  "Building Automation"
];

const advantages = [
  ["2015", "Established"],
  ["30,000+", "m2 factory area"],
  ["60+", "Elite team members"],
  ["OEM/ODM", "Customization support"]
];

const faqs = [
  {
    q: "Are you a thermostat manufacturer?",
    a: "Yes. YATELEE is positioned as a source manufacturer and OEM/ODM solution provider for thermostat and HVAC control products."
  },
  {
    q: "Can you support private label orders?",
    a: "Yes. Logo, color, packaging, label, manual, software program, and new product development can be discussed by project."
  },
  {
    q: "Which certificates can be shown?",
    a: "The current planning information lists CE, RoHS, RED and EAC. The website should only display certificates with real files."
  }
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function ProductMockup() {
  return (
    <div className="product-mockup" aria-label="YATELEE thermostat product preview">
      <div className="device device-large">
        <div className="device-screen">
          <span>25.2</span>
          <small>HVAC</small>
        </div>
      </div>
      <div className="device device-small">
        <div className="device-screen light">
          <span>22</span>
          <small>WiFi</small>
        </div>
      </div>
      <div className="circuit-card">
        <span>RS485</span>
        <span>Modbus</span>
        <span>BMS</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <h1>Temperature Control Panel & HVAC Thermostat Manufacturer</h1>
          <p>
            YATELEE manufactures room thermostats, underfloor heating controllers, fan coil thermostats,
            and OEM/ODM HVAC control solutions for importers, distributors, contractors, and smart home brands.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#products">
              View Products <ArrowIcon />
            </a>
            <a className="btn secondary" href="#contact">
              Get a Quote <ArrowIcon />
            </a>
          </div>
          <div className="proof-row" aria-label="Company strengths">
            <span>OEM/ODM Customization</span>
            <span>Global Delivery Support</span>
            <span>Industrial Quality Control</span>
          </div>
        </div>
        <ProductMockup />
      </section>

      <section className="product-preview" id="products">
        <div className="section-heading">
          <h2>Product Categories Built for HVAC Buyers</h2>
          <p>
            Clear product paths help buyers move from application needs to specifications, catalog downloads,
            and project inquiries.
          </p>
        </div>
        <div className="product-grid">
          {productCategories.map((item) => (
            <article className="product-card" key={item.title}>
              <div className="product-visual">
                <span>{item.spec}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact">Request details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="applications">
        <div>
          <h2>Application Pages for SEO and Paid Traffic</h2>
          <p>
            The homepage guides visitors into dedicated pages for hotel HVAC, fan coil units, underfloor heating,
            boiler heating, smart home control, and building automation projects.
          </p>
        </div>
        <div className="application-list">
          {applications.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="factory-section" id="factory">
        <div className="factory-image">
          <img src="/images/yatelee-team-exhibition.jpg" alt="YATELEE team at HVAC exhibition booth" />
        </div>
        <div className="factory-copy">
          <h2>Factory Strength Buyers Can Trust</h2>
          <p>
            Zhongshan Yatelee Electronic Technology Co., Ltd. presents itself as a source manufacturer with
            OEM/ODM customization, project support, and export-market experience across the Middle East,
            Africa, South America, Russia, Central Asia, and Europe.
          </p>
          <div className="stats-grid">
            {advantages.map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cert-section">
        <div className="section-heading">
          <h2>Certifications and OEM/ODM Support</h2>
          <p>
            Use real certificate files only. Current planning materials list CE, RoHS, RED and EAC as trust
            points for product pages and buyer FAQs.
          </p>
        </div>
        <div className="cert-row">
          {["CE", "RoHS", "RED", "EAC"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <h2>Buyer Questions Answered Before Inquiry</h2>
          <p>Structured FAQ content supports both conversion and AI/SEO visibility.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inquiry-section" id="contact">
        <div>
          <h2>Send Your Thermostat Requirement</h2>
          <p>
            Tell us your target country, application, product requirement, quantity, and customization needs.
            Our sales team will contact you soon.
          </p>
          <ul>
            <li>Kale Yan</li>
            <li>Kale.Yan@zhongshanyatelee.com</li>
            <li>WhatsApp: 85257877043</li>
            <li>Zhongshan, Guangdong, China</li>
          </ul>
        </div>
        <form>
          <input aria-label="Name" placeholder="Name" />
          <input aria-label="Email" placeholder="Email" type="email" />
          <input aria-label="Country" placeholder="Country" />
          <input aria-label="Product Requirement" placeholder="Product Requirement" />
          <textarea aria-label="Message" placeholder="Message" rows={5} />
          <button type="button">Send Inquiry</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
