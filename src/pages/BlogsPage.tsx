import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden">
      <div className="relative w-full h-[600px] overflow-hidden">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center justify-center h-[400px] text-white">
        <h1 className="text-4xl font-['Inter_Tight'] mb-4">Blogs</h1>
        <p className="text-[#989898] font-['Geist_Mono'] uppercase tracking-widest">Insights from the team</p>
      </div>
      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
