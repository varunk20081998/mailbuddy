import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/Navbar";

const nunito = Nunito({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-nunito relative font-light", nunito.variable)}>
        <Navbar />
        <main className="absolute left-0 right-0 top-0 z-0">{children}</main>
      </body>
    </html>
  );
}
