import { useEffect } from "react";
import Navbar from "../../imports/HeroSection-1/index";
import CTASection from "../../imports/Section-13/index";
import FooterSection from "../../imports/Section-17/index";
import TiltCard from "../../imports/TiltCard";

export default function LandingPagesServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Navbar wrapper */}
      <div className="relative w-[1440px] h-[120px] shrink-0 overflow-hidden">
        <Navbar />
      </div>

      {/* Hero and Details container */}
      <div className="relative w-[1440px] py-[80px] px-[40px] flex flex-col items-start bg-[#141414] shrink-0">
        <p className="font-['Inter_Tight',sans-serif] font-normal text-[#ffa62a] text-[16px] uppercase tracking-widest mb-[16px]">
          Service / Conversion Optimization
        </p>
        <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[24px]">
          Landing Pages & Conversion-Focused Funnels
        </h1>
        <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px] max-w-[850px] mb-[64px] leading-relaxed">
          Turn paid traffic and organic campaigns into high-value leads. We design and build high-performance, distraction-free landing pages and interactive sales funnels engineered to convert visitors into booked appointments and active clients at peak efficiency.
        </p>

        {/* 3 Core Value Cards */}
        <div className="flex gap-[24px] w-full justify-between items-stretch mb-[80px]">
          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              01 / Focus
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Bespoke Custom Layouts
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              We design every single landing page layout from scratch, optimized for a single objective. Removing headers, footers, and external links funnels 100% of user focus toward your main call-to-action.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              02 / Engagement
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Interactive Funnels & Quizzes
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Pre-qualify leads with interactive questionnaires, savings calculators, and custom multi-step forms. By gamifying the lead capture process, we increase conversion rates and ensure lead quality.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              03 / Trust
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Authority & Social Proof
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Strategic placement of client testimonials, case studies, trust badges, and security seals directly in the conversion path to eliminate buyer skepticism and maximize trust immediately.
            </p>
          </TiltCard>
        </div>

        {/* The Conversion Architecture */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px] mb-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            The Conversion Architecture
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            Every landing page we construct is engineered with specific, scientifically proven optimization tactics designed to maximize advertising ROI.
          </p>

          <div className="grid grid-cols-2 gap-[40px] w-full">
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Distraction-Free Navigation
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We eliminate traditional global header navigation and site footers to remove exit paths. The user has only two choices: complete the action, or leave. This results in direct, focused attention.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Sub-0.5s Load Speeds
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  A 1-second delay in page load times can decrease conversions by up to 20%. We write lightweight markup, optimize image assets, and minimize JS code to deliver lightning-fast response times.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Mobile-First Optimization
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Over 80% of ad traffic from Meta and Google campaigns hits your page on mobile devices. We design and test layouts for thumb-friendly actions, readable mobile typography, and responsive forms.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Instant CRM & Pipeline Sync
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Every submission is automatically parsed and pushed to GoHighLevel CRM workflows in real-time, instantly triggering SMS notifications and auto-replies to engage leads while they're warm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Funnels We Build */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            Campaign Funnels We Build
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy specialized landing structures tailored to your campaign channels and demographic objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Quiz & Qualification Funnels
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Ideal for lead generation. Users answer questions like "What is your monthly electric bill?" and "Do you own your home?". This filters out low-intent users and boosts qualification status.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Direct Booking Funnels
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Send pre-qualified users directly to a calendar booking page. Leads select a time, answer questions, and sync appointments directly to your sales reps' schedules without manual calls.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Paid Ad Match Landing Pages
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Highly targeted pages built specifically for Meta (Facebook/Instagram) and Google Ads campaigns. We align the headings, copy, and visuals to match the ads, boosting quality scores and reducing ad spend.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Lead Magnet Funnels
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Offer premium solar savings guides, cheat sheets, or local solar reports in exchange for contact information. Great for building an active email database for automated nurturing.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to optimize your ad spend?" ctaText="Let's build a funnel" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
