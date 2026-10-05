import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
export const metadata: Metadata = { title: "A little birthday surprise 🎁" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${caveat.variable} ${jakarta.variable}`}><body>{children}</body></html>;
}
