import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "arabic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "arabic"] });

export const metadata = {
  metadataBase: new URL("https://shobkastore.vercel.app"),
  title: "Shobka Store - شوبكا ستور",
  description: "Shobka Store offers a unique shopping experience. High-quality products with fast and free delivery, cash on delivery.",
  keywords: [
    "Shobka Store", "Shopping", "High-Quality Products", "Fast Delivery", "Cash on Delivery", "Online Store",
    "شوبكا ستور", "تسوق", "منتجات عالية الجودة", "توصيل سريع", "الدفع عند الاستلام", "متجر إلكتروني"
  ],
  author: "Shobka Store",
  icons: { icon: "/LogoStr.jpg" },
  openGraph: {
    title: "Shobka Store",
    description: "Explore high-quality products at Shobka Store with fast and free delivery, cash on delivery.",
    url: "https://shobkastore.vercel.app",
    siteName: "Shobka Store",
    images: [{ url: "https://shobkastore.vercel.app/LogoStr.jpg", width: 800, height: 600, alt: "Shobka Store Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shobka Store",
    description: "Explore high-quality products at Shobka Store with fast and free delivery, cash on delivery.",
    images: ["https://shobkastore.vercel.app/LogoStr.jpg"],
  },
  alternates: {
    canonical: "https://shobkastore.vercel.app",
    languages: {
      "en": "https://shobkastore.vercel.app",
      "ar": "https://shobkastore.vercel.app/ar",
    },
  },
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61580281476906",
    instagram: "https://instagram.com/shobkastore",
    twitter: "https://x.com/shobkastore",
  },
};

export default function RootLayout({ children, lang = "en" }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
