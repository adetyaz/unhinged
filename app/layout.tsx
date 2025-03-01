import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: "/fonts/SpaceGrotesk-Regular.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Unhinged",
  description: "Efficiency Beyond Limits: Monitor, Control, Sustain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
