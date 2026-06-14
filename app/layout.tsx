import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanzhao.xyz"),
  title: "YATELEE | HVAC Thermostat Manufacturer",
  description:
    "YATELEE manufactures OEM/ODM temperature control panels, room thermostats, fan coil thermostats, and underfloor heating controllers for global HVAC projects."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/i18n.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
