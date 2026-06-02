import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import Footer from "@/components/Home/Footer";

// have to optimize it later for seo purrposes
export const metadata: Metadata = {
  title: "RzrJaw",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
