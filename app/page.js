import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Shobka Store",
  description: "Explore our exclusive collection of high-quality products with fast and free delivery and cash on delivery.",
  keywords: [
    "Shobka Store", "Shopping", "High-Quality Products", "Fast Delivery", "Cash on Delivery", "Online Store",
    "شوبكا ستور", "تسوق", "منتجات عالية الجودة", "توصيل سريع", "الدفع عند الاستلام", "متجر إلكتروني"
  ],
  author: "Shobka Store",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-orange-400 to-purple-500 text-white flex flex-col justify-center items-center px-4 overflow-hidden">
      
      {/* Language Switcher */}
      <div className="absolute top-5 right-5 z-20">
        <Link href="/ar">
          <Image src="/saudi-flag.png" alt="العربية" width={40} height={40} className="rounded-md border border-white shadow-md cursor-pointer hover:scale-110 transition-transform"/>
        </Link>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute top-20 right-1/4 w-56 h-56 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow"></div>

      {/* Content */}
      <div className="z-10 text-center max-w-3xl space-y-5">
        <div className="flex justify-center mb-1 animate-bounce-slow">
          <Image src="/ShobkaWbg.png" alt="Shobka Store Logo" width={140} height={140}/>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight animate-textShadow drop-shadow-lg">
          Shobka Store
        </h1>

        <p className="text-xl md:text-2xl text-white/90 animate-fadeIn">
          unique shopping experience. Discover high-quality products with fast and free delivery and cash on delivery.
        </p>

        <a href="https://shobkastore.com" target="_blank" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-700">
          Click to Visit Our Store
        </a>

         {/* Social Media Links */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-4 animate-fadeIn delay-300">
                  <a href="mailto:shobkastore@gmail.com" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/gmail.png" alt="Gmail" width={40} height={40} className="rounded-lg" />
                  </a>
                  <a href="https://x.com/shobkastore" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/twit.svg" alt="X / Twitter" width={40} height={40} />
                  </a>
                  <a href="https://www.youtube.com/@ShobkaStore" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/yt.svg" alt="YouTube" width={40} height={40} />
                  </a>
                  <a href="https://www.instagram.com/shobkastore" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/ins.svg" alt="Instagram" width={40} height={40} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61580281476906" target="_blank" className="transform hover:scale-110 transition-transform bg-white rounded-full">
                     <Image src="/Icons/fb.svg" alt="Facebook" width={60} height={60} />
                   </a>
                   <a href="https://www.tiktok.com/@shobka.store" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/tik.svg" alt="TikTok" width={40} height={40} />
                  </a>
                  <a href="https://www.snapchat.com/add/shobkastore?share_id=iDiIFGbr1Ss&locale=en-GB" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/snap.svg" alt="Snapchat" width={40} height={40} />
                  </a>
                  <a href="https://www.threads.com/@shobkastore" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Image src="/Icons/threads.png" alt="Threads" width={40} height={40} />
                  </a>
                  <a href="https://www.linkedin.com/in/shobkastore" target="_blank" className="relative transform hover:scale-110 transition-transform">
                     <Image src="/Icons/link.svg" alt="LinkedIn" className="absolute" width={40} height={40} />
                     <div className="bg-white w-8 h-8 m-1  "></div>
                   </a>
                </div>

      </div>
    </div>
  );
}
