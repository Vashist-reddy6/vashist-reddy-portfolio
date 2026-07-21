import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vashist Reddy Mosra — Computer Science & Engineering",
  description:
    "Portfolio of Vashist Reddy Mosra, a computer science student building practical systems across AI, data, and full-stack engineering.",
  authors: [{ name: "Vashist Reddy Mosra" }],
  openGraph: {
    title: "Vashist Reddy Mosra — Portfolio",
    description:
      "Practical systems across AI, data, and full-stack engineering.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
