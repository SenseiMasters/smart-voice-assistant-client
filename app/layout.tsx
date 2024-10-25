import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

import { QueryProvider } from "@/providers/query.provider";
import { LangProvider } from "@/providers/lang.provider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Voice Assistant",
  description: "Smart voice assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 min-h-screen`}
      >
        <LangProvider>
          <QueryProvider>{children}</QueryProvider>
        </LangProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
