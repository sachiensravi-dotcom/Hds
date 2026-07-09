import { useEffect } from "react";
import Navbar from "../../imports/HeroSection-1/index";
import CTASection from "../../imports/Section-13/index";
import FooterSection from "../../imports/Section-17/index";
import TiltCard from "../../imports/TiltCard";

export default function SMMServicePage() {
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
          Service / Social Media & Paid Ads
        </p>
        <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[24px]">
          Social Media Marketing (SMM) & Paid Ads
        </h1>
        <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px] max-w-[850px] mb-[64px] leading-relaxed">
          Accelerate your growth and capture market share. We plan, write, design, and optimize paid advertising campaigns on Meta, Google, and TikTok that generate consistent lead streams, lower acquisition costs, and maximize ad spend ROI.
        </p>

        {/* 3 Core Value Cards */}
        <div className="flex gap-[24px] w-full justify-between items-stretch mb-[80px]">
          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              01 / Creative
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Custom Ad Creatives
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              We draft thumb-stopping image overlays, custom graphics, and short-form video hooks designed to capture attention instantly in crowded feeds.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              02 / Copy
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Direct-Response Copy
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              We write persuasive, problem-solving headlines and bulletproof body copy that addresses customer pain points and drives immediate clicks.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              03 / Targeting
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Demographic Targeting
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              We build custom lookalike audiences, localized geo-targets, and retargeting lists so your budget only goes toward active buyers.
            </p>
          </TiltCard>
        </div>

        {/* The Paid Traffic Architecture */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px] mb-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            The Paid Traffic Architecture
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy tracking scripts and analytical split-testing frameworks to optimize and scale lead-generation campaigns.
          </p>

          <div className="grid grid-cols-2 gap-[40px] w-full">
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Meta Pixel & API Tracking
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We install Meta Pixels and Conversions API (CAPI) tracking to capture server-side events, enabling clean attribution and optimal ad-delivery optimization.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  A/B Creative Split Testing
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We run structured multi-variant split tests comparing different visuals, angles, hooks, and buttons to find the lowest cost per lead.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Custom Retargeting Funnels
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We design multi-tier retargeting campaigns that serve specific ads (testimonials, FAQs, special offers) to users who visited but didn't convert yet.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Budget Allocation Audits
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We analyze and reallocate ad budgets to high-performing campaigns, cutting waste on low-yielding ads to scale your return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Channels We Manage */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            Campaign Channels We Manage
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy specialized ad structures tailored to your campaign targets and demographic objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Meta (Facebook & Instagram) Lead Ads
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                High-volume, native lead form campaigns designed to capture contact details directly inside the social app, reducing landing page drop-off rates.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Google Search & Performance Max
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Intent-driven search campaigns placing text ads and shopping ads in front of users actively searching for your business or services in Google search.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                TikTok Short-Form Video Ads
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Dynamic video ads tailored to the TikTok algorithm, leveraging creative hooks and native formatting to engage younger, mobile-first audiences.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Local Service Ads (LSA)
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Set up and manage Google Local Service Ads (LSAs) to place your business at the very top of localized search results with a verified trust badge.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to optimize your ad campaigns?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
