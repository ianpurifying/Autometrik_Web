import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Autometrik | Automate Assessment",
  description: "The comprehensive web-based platform for Philippine K-12 teachers to automate MPS computation, item analysis, and quiz management.",
  openGraph: {
    title: "Autometrik | Automate Assessment",
    description: "The comprehensive web-based platform for Philippine K-12 teachers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
