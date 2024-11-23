// Vendors
import localFont from "next/font/local";
import type { Metadata } from "next";
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
  title: "Javier Velilla Web Oficial",
  description: "Javier Velilla's personal website",
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

        <main className="flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
