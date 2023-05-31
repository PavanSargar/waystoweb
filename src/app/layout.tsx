import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

import FAVICON from "../assets/logos/icon.png";
import APPLEICON from "../assets/logos/apple-touch-icon.png";
import ICON from "../assets/logos/icon.png";

import "./globals.css";

export const metadata = {
  title: "WaystoWeb | Web is Easy",
  description:
    "WaysToWeb is a platform where you can get help with web development, programming, technologies and will guide you to change your learning curve!",
  icons: {
    icon: "/assets/logos/icon.png",
    shortcut: "/assets/logos/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-globalBg" lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/logos/favicon.ico" />
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
