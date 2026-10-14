import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dakingo - Decadent Chocolate Bliss Bakery",
  description: "Your Trusted FSSAI Certified Online Bakery for Every Celebration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} font-sans`}>
      <body className="bg-white text-[#4a2e2b] antialiased selection:bg-[#80211d] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
