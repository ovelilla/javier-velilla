// Vendors
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
// Components
import { Header } from "./components/header";
import { Footer } from "./components/footer";
// Fonts
import "@fontsource-variable/noto-serif-display";
// Styles
import "./globals.css";

const akrobat = localFont({
  src: "./fonts/akrobat-semibold.woff2",
});

export const metadata: Metadata = {
  title: "Javier Velilla - Pintor de Cuadros en Madrid | Arte y Retratos",
  description:
    "Descubre las pinturas y retratos de Javier Velilla, pintor en Madrid. Arte único que captura la belleza y la emoción en cada pincelada. Visita la galería.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={akrobat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
