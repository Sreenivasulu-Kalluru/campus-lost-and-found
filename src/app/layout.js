import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Campus Lost & Found",
    template: "%s | Campus L&F", // %s will be replaced by specific page titles
  },
  description:
    "The official portal to report and find lost items at SV University MCA Department - Tirupati.",
  keywords: [
    "lost and found",
    "college",
    "campus",
    "lost items",
    "found items",
  ],
  openGraph: {
    title: "Campus Lost & Found",
    description: "Report lost items and find what belongs to you.",
    url: "https://your-domain.vercel.app", // You will update this after deploying
    siteName: "Campus L&F",
    images: [
      {
        url: "https://your-domain.vercel.app/og-image.jpg", // A generic banner image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {/* Navbar sits here, above all page content */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
