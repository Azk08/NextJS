import { Inter } from "next/font/google";
import { Metadata } from "next";
import { inter } from "../font";
import style from "./../globals.css";

export const metadata: Metadata = {
  title: "dashboard",
  description: "Dashboard For look Data",
};

export default function nameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.classname}>{children}</body>
    </html>
  );
}
