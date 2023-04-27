import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

import FAVICON from "../assets/logos/favicon.ico";
import APPLEICON from "../assets/logos/apple-touch-icon.png";
import ICON from "../assets/logos/icon.png";

import "./globals.css";


export const metadata = {
  title: "WaystoWeb | Web is Easy",
  description:
    "WaysToWeb is a platform where you can get help with web development, programming, technologies and will guide you to change your learning curve!",
  icons: {
    icon: FAVICON,
    shortcut: ICON,
    apple: ICON,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: APPLEICON,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-globalBg" lang="en">
      {/* <Head /> */}

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
