import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import BentoGridSection from "../imports/Section-3/index";
import DifferentiationSection from "../imports/Section-8/index";
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
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      
      {/* Hero Section */}
      <div className="relative w-[1440px] h-[550px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Full-Suite Growth Systems & Automations"
          title="Scale your traffic, conversion, & sales pipeline"
          description="We combine custom high-performance web development, search engine rankings (SEO/AEO), paid social campaign optimization (SMM), and GoHighLevel CRM workflow automation into a single customer-acquisition engine."
          isMini={false}
        />
      </div>

      {/* Full 9-Card Bento Grid */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <BentoGridSection showAll={true} />
      </div>

      {/* Differentiation Section */}
      <div className="relative w-[1440px] h-[1550px] shrink-0">
        <DifferentiationSection />
      </div>

      {/* Our Process Section */}
      <div className="relative w-[1440px] h-auto min-h-[450px] shrink-0">
        <ProcessSection />
      </div>

      {/* Our Formula Section */}
      <div className="relative w-[1440px] h-auto min-h-[650px] shrink-0">
        <FormulaSection />
      </div>

      {/* Tech Stack logos */}
      <div className="relative w-[1440px] h-auto min-h-[250px] shrink-0">
        <TechStackSection />
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to build your growth engine?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
