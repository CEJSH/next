import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";
const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gothic.className}>
        <header className="flex justify-between items-center p-[8px] border-solid border-b border-[#132f52]">
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
