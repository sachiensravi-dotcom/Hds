import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import ContactFormSection from "../imports/Section-16/index";
import FAQSection from "../imports/Section-15/index";
import FooterSection from "../imports/Section-17/index";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden">
      <div className="relative w-full h-[120px] overflow-hidden">
        <HeroSection />
      </div>
      <div className="relative w-full h-[850px]">
        <ContactFormSection />
      </div>
      <div className="relative w-full h-[950px]">
        <FAQSection />
      </div>
      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
