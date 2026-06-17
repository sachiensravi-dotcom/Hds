import { useEffect } from "react";
import WorksHeroSection from "../imports/HeroSection-2/index";
import FooterSection from "../imports/Section-17/index";

export default function WorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden">
      <div className="relative w-full h-[840px]">
        <WorksHeroSection />
      </div>
      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
