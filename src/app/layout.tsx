import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
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
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      {/* Google tag (gtag.js)  */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DJLG0BC6GD"
      ></Script>
      <Script id="google-analytics">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DJLG0BC6GD');`}
      </Script>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
          }}
        />
      </body>
    </html>
  );
}
