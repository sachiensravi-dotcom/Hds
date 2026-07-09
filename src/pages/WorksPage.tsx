import { useEffect } from "react";
import WorksHeroSection from "../imports/HeroSection-2/index";
import TestimonialSlider from "../imports/Section-7/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";

export default function WorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden flex flex-col items-center">
      {/* 1. Works Hero & Interactive Table List */}
      <div className="relative w-[1440px] h-[840px] shrink-0">
        <WorksHeroSection />
      </div>

      {/* 2. Client Testimonials Slider */}
      <div className="relative w-[1440px] h-[450px] shrink-0">
        <TestimonialSlider />
      </div>

      {/* 3. Call to Action (CTA) */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to build your growth engine?" ctaText="Talk with us" />
      </div>

      {/* 4. Global Footer */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
