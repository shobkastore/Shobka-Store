import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shobka Store",
  description: "Shobka Store offers a unique shopping experience. Explore high-quality products with fast and free delivery, and cash on delivery.",
  keywords: ["Shobka Store", "Shopping", "High-Quality Products", "Fast Delivery", "Cash on Delivery", "Online Store",
  "شوبكا ستور", "تسوق", "منتجات عالية الجودة", "توصيل سريع", "الدفع عند الاستلام", "متجر إلكتروني"
  ],
  author: "Shobka Store",
  icons: {
    icon: "/LogoStr.jpg",
  },
  openGraph: {
    title: "Shobka Store",
    description: "Explore high-quality products at Shobka Store with fast and free delivery, and cash on delivery.",
    url: "https://shobkastore.vercel.app",
    siteName: "Shobka Store",
    images: [
      {
        url: "/LogoStr.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61580281476906",
    instagram: "https://instagram.com/shobkastore",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
