import { useEffect } from "react";
import Navbar from "../../imports/HeroSection-1/index";
import CTASection from "../../imports/Section-13/index";
import FooterSection from "../../imports/Section-17/index";
import TiltCard from "../../imports/TiltCard";

export default function ReputationServicePage() {
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
          Service / Reputation
        </p>
        <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[24px]">
          Reputation Management
        </h1>
        <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px] max-w-[850px] mb-[64px] leading-relaxed">
          Automate review request cycles to capture 5-star customer feedback, display testimonials dynamically on your website, and significantly boost your local search visibility.
        </p>

        {/* 3 Core Value Cards */}
        <div className="flex gap-[24px] w-full justify-between items-stretch mb-[80px]">
          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              01 / Review
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Automated Requests
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Trigger automated SMS and email review invitations immediately after a project is marked completed, capturing positive customer feedback seamlessly.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              02 / Protection
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Feedback Filtering
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Direct unhappy customers to a private feedback form first, letting you resolve customer service issues internally before they post public reviews.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              03 / SEO
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Google Maps Ranking
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Generate a steady stream of authentic reviews to improve prominence in Google Maps search results, driving organic local discovery and trust.
            </p>
          </TiltCard>
        </div>

        {/* The Reputation Architecture */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px] mb-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            The Reputation Architecture
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy real-time feedback loops and widgets designed to continuously collect and display 5-star social proof.
          </p>

          <div className="grid grid-cols-2 gap-[40px] w-full">
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Instant Webhook Triggers
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Connect review campaigns directly to your CRM, project management, or POS software to launch review requests immediately upon project close.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Dual-Channel Campaigns
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Reach customers on their preferred platforms with coordinated review request flows utilizing both text message and email channels.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Testimonial Showcase Widgets
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Embed dynamic review widgets on your landing pages that automatically sync and showcase your latest positive client reviews.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Negative Feedback Intercept
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Route low ratings privately to a service desk form first, allowing you to resolve disputes and address complaints before public posting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reputation Actions We Implement */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            Reputation Actions We Implement
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We build and optimize review capture frameworks designed to scale authority automatically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Google Review Automations
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Connect your Google Business Profile and set up SMS/email prompts that guide satisfied clients straight to your Google Maps review link.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Private Feedback Portals
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Create mobile-friendly review filtering landing pages that ask customers to rate their experience before directing them to external public profiles.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Onsite Social Proof Widgets
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Install beautifully styled review display sliders on your main pages that sync with live platforms to build instant customer trust.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Local Citation Audits
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Clean up name, address, and phone number (NAP) listings across online directories to support local search authority and map rankings.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to capture positive feedback automatically?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
