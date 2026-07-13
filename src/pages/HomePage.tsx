import { useEffect } from "react";
import HeroSection from "../imports/HeroSection/index";
import FeaturePromoSection from "../imports/Section/index";
import TrustedBySection from "../imports/Section-9/index";
import ServicesSection from "../imports/Section-3/index";
import TestimonialSection from "../imports/Section-14/index";
import BlogSection from "../imports/Section-5/index";
import FounderSection from "../imports/Section-6/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden flex flex-col items-center">
      {/* 1. Hero Section */}
      <div className="relative w-[1440px] h-[1063px] shrink-0 z-20">
        <HeroSection />
      </div>

      {/* 2. Websites first. Growth built in. */}
      <div className="relative w-[1440px] h-[600px] shrink-0">
        <FeaturePromoSection />
      </div>

      {/* 3. Trusted By Logo Row */}
      <div className="relative w-[1440px] h-[280px] shrink-0">
        <TrustedBySection />
      </div>

      {/* 4. Complete Website Package Grid */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <ServicesSection />
      </div>

      {/* 5. Interactive Testimonial Slider */}
      <div className="relative w-[1440px] h-[500px] shrink-0">
        <TestimonialSection />
      </div>

      {/* 6. Blog News & Insights */}
      <div className="relative w-[1440px] h-[720px] shrink-0">
        <BlogSection />
      </div>

      {/* 7. Built on Quality (Sachien R Founder) */}
      <div className="relative w-[1440px] h-[800px] shrink-0">
        <FounderSection />
      </div>

      {/* 8. Parallax Waveform CTA */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection />
      </div>

      {/* 9. Premium Footer */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
