import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroller";
import Top from "./components/Top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Angal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Top />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
