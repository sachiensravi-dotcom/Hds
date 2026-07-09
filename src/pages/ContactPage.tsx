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
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Mini Hero Header */}
      <div className="relative w-[1440px] h-[300px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Let's Connect"
          title="Build your custom growth engine"
          isMini={true}
        />
      </div>

      {/* Contact Form Section */}
      <div className="relative w-[1440px] h-auto min-h-[650px] shrink-0">
        <ContactFormSection />
      </div>

      {/* FAQ Section */}
      <div className="relative w-[1440px] h-auto min-h-[750px] shrink-0">
        <FAQSection />
      </div>

      {/* Footer Section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
