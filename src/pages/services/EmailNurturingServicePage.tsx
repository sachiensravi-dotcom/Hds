import { useEffect } from "react";
import Navbar from "../../imports/HeroSection-1/index";
import CTASection from "../../imports/Section-13/index";
import FooterSection from "../../imports/Section-17/index";
import TiltCard from "../../imports/TiltCard";

export default function EmailNurturingServicePage() {
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
          Service / Email Nurturing
        </p>
        <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[24px]">
          Automated Email Campaigns & Flows
        </h1>
        <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px] max-w-[850px] mb-[64px] leading-relaxed">
          Nurture prospects into long-term clients and drive repeat business. We design and write custom trigger flows, monthly newsletters, and behavioral drip sequences tailored to customer lifecycle stages.
        </p>

        {/* 3 Core Value Cards */}
        <div className="flex gap-[24px] w-full justify-between items-stretch mb-[80px]">
          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              01 / Drips
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Nurture & Welcome
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Build automated educational drip campaigns that warm up cold prospects by delivering high-value insights directly to their inbox over weeks and months.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              02 / Broadcasts
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Newsletters & Offers
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Create responsive, premium email newsletters and promotions that keep your brand top-of-mind and trigger repeat purchases.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              03 / Analytics
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              List Segmentation
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Segment lists by engagement levels, purchase history, and demographics. Optimize open and click rates with continuous A/B testing.
            </p>
          </TiltCard>
        </div>

        {/* The Email Engine */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px] mb-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            The Email Engine
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy secure delivery setups and data systems designed to ensure your marketing emails reach the inbox and drive action.
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
                  High-Deliverability DNS Setup
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We configure SPF, DKIM, DMARC, and custom tracking domains to maximize inbox placement and prevent your marketing campaigns from hitting spam folders.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Dynamic Personalization
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Inject customer details dynamically (first name, business name, purchase history) into subject lines and copy to boost relevance and click-through rates.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Engagement Split Triggers
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Build automated email paths that branch depending on user activity (e.g., send reminder flow A if they opened, and alternative offer flow B if they ignored).
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  A/B Subject Line Testing
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Continuously test subject lines, body hooks, and sender names to optimize click-through rates and verify email open percentage gains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Flows We Build */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            Email Flows We Build
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy specialized newsletters and nurture paths to maximize your client retention and lifetime value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Welcome & Brand Introductions
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                A multi-day automated sequence introducing new subscribers to your brand history, core values, case studies, and primary service options.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Educational Nurture Drips
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Keep your audience engaged over months by sharing helpful tips, industry insights, and case studies, establishing authority and top-of-mind brand status.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Re-engagement Sequences
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Win back cold subscribers who haven't opened emails in 90+ days with special offers, short surveys, or automated list-cleaning triggers.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Promotion & Launch Broadcasts
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Strategic email blast campaigns designed to drive immediate traffic and sales for new services, seasonal promotions, or events.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to launch conversion-focused email flows?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
