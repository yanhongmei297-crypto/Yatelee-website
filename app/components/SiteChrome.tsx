export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/images/yatelee-logo-white.png" alt="YATELEE logo" />
      </a>
      <nav aria-label="Main navigation">
        <div className="nav-item has-mega">
          <a className="nav-link" data-i18n="navProducts" href="/#products">
            Products
            <span aria-hidden="true" />
          </a>
          <div className="mega-menu" role="group" aria-label="Product menu">
            <div className="mega-intro">
              <strong data-i18n="megaTitle">Thermostat Product Center</strong>
              <p data-i18n="megaText">Choose by product type, HVAC application, or OEM customization requirement.</p>
              <a data-i18n="megaInquiry" href="/inquiry/">Send project inquiry</a>
            </div>
            <div className="mega-column">
              <span data-i18n="megaCore">Core Categories</span>
              <a data-i18n="roomThermostat" href="/#products">Room Thermostat</a>
              <a data-i18n="underfloorController" href="/#products">Underfloor Heating Controller</a>
              <a data-i18n="fanCoilThermostat" href="/products/smart-touch-screen-hvac-thermostat/">Fan Coil Thermostat</a>
              <a data-i18n="electricActuator" href="/#products">Electric Thermal Actuator</a>
            </div>
            <div className="mega-column">
              <span data-i18n="megaSolutions">Popular Solutions</span>
              <a data-i18n="hotelHvac" href="/#applications">Hotel Room HVAC</a>
              <a data-i18n="bmsAutomation" href="/#applications">BMS / Building Automation</a>
              <a data-i18n="gasBoiler" href="/#applications">Gas Boiler Heating</a>
              <a data-i18n="smartHome" href="/#applications">Smart Home Control</a>
            </div>
            <div className="mega-feature">
              <span data-i18n="oemOdm">OEM / ODM</span>
              <strong data-i18n="megaPrivate">Private label thermostat programs</strong>
              <p data-i18n="megaPrivateText">Logo, color, packaging, manual, software and new product development support.</p>
            </div>
          </div>
        </div>
        <a data-i18n="navApplications" href="/#applications">Applications</a>
        <a data-i18n="navFactory" href="/#factory">Factory</a>
        <a data-i18n="navFaq" href="/#faq">FAQ</a>
        <a data-i18n="navContact" href="/contact-us/">Contact</a>
      </nav>
      <a className="header-cta" data-i18n="quote" href="/inquiry/">
        Get a Quote
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <img src="/images/yatelee-logo-white.png" alt="YATELEE logo" />
      <p data-i18n="footerCompany">Zhongshan Yatelee Electronic Technology Co., Ltd.</p>
      <div>
        <a data-i18n="navProducts" href="/#products">Products</a>
        <a data-i18n="navApplications" href="/#applications">Applications</a>
        <a data-i18n="navFactory" href="/#factory">Factory</a>
        <a data-i18n="navContact" href="/contact-us/">Contact</a>
      </div>
    </footer>
  );
}
