import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/mainHeader/page";
import MainFooter from "@/components/mainFooter/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PG GO",
  description: "PG Seamless Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
