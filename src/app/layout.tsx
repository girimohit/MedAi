import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedAI - Smart Medicine App - AI-Powered Medication Management",
  description:
    "Smart Medicine is an AI-driven platform designed to help patients manage medications, track adherence, and stay connected with caregivers, doctors, and pharmacies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            
          </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
