import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BR Cargo Solutions Pvt. Ltd. | International Freight & Logistics",
  description:
    "Premier international logistics partner specializing in seamless cross-border freight management — air, ocean, and land. Customs clearance, DGFT documentation, door-to-door delivery.",
  keywords: [
    "freight forwarding",
    "international logistics",
    "air cargo",
    "ocean freight",
    "customs clearance",
    "DGFT",
    "supply chain",
    "BR Cargo",
    "India logistics",
  ],
  authors: [{ name: "BR Cargo Solutions Pvt. Ltd." }],
  creator: "BR Cargo Solutions Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brcargosolutions.com",
    title: "BR Cargo Solutions Pvt. Ltd. | International Freight & Logistics",
    description:
      "Seamless global logistics & end-to-end freight solutions. Air, ocean, and land freight forwarding with full customs clearance.",
    siteName: "BR Cargo Solutions",
  },
  icons: {
    icon: "/favicon.jpeg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0F2C59",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} bg-background scroll-smooth`}>
      <head>
        <link rel="preload" href="/hero-bg.mp4" as="video" type="video/mp4" />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
