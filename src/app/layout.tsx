import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from "./font";
// import { inter } from "@/app/font";
// import Image from "next/image";
// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Next-Portofolio",
  description: "Make By &copy; Aufa Ziya Khairi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
