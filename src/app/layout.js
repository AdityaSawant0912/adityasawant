import "./globals.css";
import { Bricolage_Grotesque, Spectral, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://adityasawant.vercel.app"),
  title: "Aditya Sawant — Full-stack Engineer",
  description:
    "Aditya Sawant — full-stack software engineer. Design systems to production APIs, with a creative-coding streak.",
  openGraph: {
    url: "https://adityasawant.vercel.app",
    title: "Aditya Sawant — Full-stack Engineer",
    description: "Design systems to production APIs, with a creative-coding streak.",
    images: [{ url: "/logo_square.webp", width: 400, height: 400, alt: "Aditya Sawant" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adzzhere",
    creator: "@adzzhere",
  },
};

export const viewport = {
  themeColor: "#131722",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
