import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Concord for Catering | Premium Airline & Industrial Catering — Egypt",
    template: "%s | Concord for Catering",
  },
  description:
    "Concord for Catering delivers premium airline catering, corporate catering, and large-scale food production across Egypt — built on precision, food safety, and international standards since 2011.",
  keywords: [
    "airline catering Egypt",
    "inflight catering",
    "aviation catering company",
    "industrial food production",
    "corporate catering Egypt",
    "Concord for Catering",
  ],
  metadataBase: new URL("https://www.concordcatering.com"),
  openGraph: {
    title: "Concord for Catering | Premium Airline & Industrial Catering",
    description:
      "Precision. Trust. International Standards. Premium airline catering and large-scale food production across Egypt since 2011.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
