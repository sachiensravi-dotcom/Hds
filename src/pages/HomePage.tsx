import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import DifferentSection from "../imports/Section-8/index";
import TestimonialSection from "../imports/Section-14/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden">
      <div className="relative w-full h-[1063px]">
        <HeroSection />
      </div>
      <div className="relative w-full h-[1530px]">
        <DifferentSection />
      </div>
      <div className="relative w-full h-[500px]">
        <TestimonialSection />
      </div>
      <div className="relative w-full h-[400px]">
        <CTASection />
      </div>
      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
