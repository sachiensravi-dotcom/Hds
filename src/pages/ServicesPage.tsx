import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import ProcessSection from "../imports/Section-10/index";
import FormulaSection from "../imports/Section-11/index";
import TechStackSection from "../imports/Section-12/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden">
      <div className="relative w-full h-[600px] overflow-hidden">
        <HeroSection />
      </div>
      <div className="relative w-full h-[450px]">
        <ProcessSection />
      </div>
      <div className="relative w-full h-[650px]">
        <FormulaSection />
      </div>
      <div className="relative w-full h-[250px]">
        <TechStackSection />
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
