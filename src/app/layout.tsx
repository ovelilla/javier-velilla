// Vendors
import type { Metadata } from "next";
// Components
import { Header } from "./components/header";
// Fonts
import "@fontsource-variable/noto-serif-display";
import "@fontsource-variable/oswald";
// Styles
import "./globals.css";

import localFont from "next/font/local";

export const akrobat = localFont({
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

        <footer className="h-40 bg-[#0e1822]">
          <div></div>
        </footer>
      </body>
    </html>
  );
}
