import Image from "next/image";

export const metadata = {
  title: "شوبكا ستور",
  description: "شوبكا ستور يقدم لك تجربة تسوق فريدة من نوعها. اكتشف مجموعة حصرية من المنتجات ذات الجودة العالية، مع توصيل سريع ومجاني والدفع عند الاستلام.",
  keywords: ["شوبكا ستور", "تسوق", "منتجات عالية الجودة", "توصيل سريع", "الدفع عند الاستلام", "متجر إلكتروني"],
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-orange-400 to-purple-500 text-white flex flex-col justify-center items-center overflow-hidden px-4">

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute top-20 right-1/4 w-56 h-56 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow"></div>

      {/* Hero content */}
      <div className="z-10 text-center max-w-3xl space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-6 animate-bounce-slow">
          <Image 
            src="/ShobkaWbg.png" 
            alt="شوبكا ستور" 
            width={140} 
            height={140} 
          />
        </div>

        {/* Store Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight animate-textShadow drop-shadow-lg">
          شوبكا ستور
        </h1>

        {/* Hero Text */}
        <p className="text-xl md:text-2xl text-white/90 animate-fadeIn">
          شوبكا ستور يقدم لك تجربة تسوق فريدة من نوعها. اكتشف مجموعة حصرية من المنتجات ذات الجودة العالية، مع توصيل سريع ومجاني والدفع عند الاستلام.
        </p>

        {/* Call-to-action Button */}
        <a 
          href="https://shobkastore.com" 
          target="_blank"
          className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-700"
        >
          اذهب إلى المتجر
        </a>

        {/* Contact Info */}
        <div className="mt-10 text-white/80 animate-fadeIn delay-200">
          <p>البريد الإلكتروني: <a href="mailto:shobkastore@gmail.com" className="underline">shobkastore@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
