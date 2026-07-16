import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const display = Anton({
  weight: "400",
  variable: "--font-display-face",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Main Barbershop – Saarbrücken",
    template: "%s | Main Barbershop Saarbrücken",
  },
  description:
    "Main Barbershop in Saarbrücken – moderner Barbershop in der Bahnhofstraße 40. Haarschnitt, Bart und Pflege. Jetzt Termin über Booksy buchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${serif.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
