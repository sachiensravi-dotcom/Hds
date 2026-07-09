import { useEffect } from "react";
import Navbar from "../../imports/HeroSection-1/index";
import CTASection from "../../imports/Section-13/index";
import FooterSection from "../../imports/Section-17/index";
import TiltCard from "../../imports/TiltCard";

export default function CRMAutomationServicePage() {
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
          Service / Automation
        </p>
        <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[24px]">
          CRM & Sales Pipeline Automations
        </h1>
        <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px] max-w-[850px] mb-[64px] leading-relaxed">
          Maximize lead value with fully integrated CRM sales pipelines, automated email/SMS workflows, booking calendar setup, and review acquisition campaigns built directly on GoHighLevel. We structure every stage of your customer journey so no prospect slips through the cracks.
        </p>

        {/* 3 Core Value Cards */}
        <div className="flex gap-[24px] w-full justify-between items-stretch mb-[80px]">
          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              01 / Integration
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Unified Leads & Inbox
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Consolidate inquiries from Facebook Ads, Google Business Profile, web forms, and phone calls into a single, unified conversation stream. Respond in real-time.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              02 / Workflow
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Automated SMS & Email
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Trigger immediate auto-responses and multi-day sequence touchpoints when a new inquiry arrives to keep leads engaged when they are hottest.
            </p>
          </TiltCard>

          <TiltCard className="flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
            <span className="font-['Inter_Tight',sans-serif] text-[#ffa62a] text-[14px] uppercase mb-[12px] tracking-wide">
              03 / Management
            </span>
            <h2 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px]">
              Pipeline & Calendars
            </h2>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed">
              Track lead values, manage pipeline stages from discovery to close, and configure automated round-robin booking systems for your sales representatives.
            </p>
          </TiltCard>
        </div>

        {/* The Automation Engine */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px] mb-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            The Automation Engine
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We construct a reliable and scalable backend communication structure designed to maximize the conversion rate of every inbound inquiry.
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
                  Instant Contact Sync
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  We bridge your lead sources (Meta Ads, Web forms, Google Business Profile) directly to GoHighLevel CRM instantly, eliminating manual data entry delays.
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
                  Multi-Channel Sequences
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Build multi-step follow-ups using synchronized SMS, email, and internal push notifications to guarantee lead follow-through and prompt response metrics.
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
                  Sales Pipeline Tracking
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Visualize your deals with custom drag-and-drop pipelines showing lead stages, estimated deal values, and close rates, keeping your team organized.
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] text-[#ffa62a] mt-[4px]">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.355 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.18 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.768-.57-.374-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-white mb-[8px]">
                  Automated Reviews Setup
                </h3>
                <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                  Configure automations that send friendly feedback requests via text and email immediately after a job status is updated to 'completed' in your system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Systems We Implement */}
        <div className="w-full border-t border-[#2d2d2d] pt-[80px]">
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal mb-[16px] text-white">
            Automation Systems We Implement
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] max-w-[650px] mb-[48px]">
            We deploy specialized, ready-to-scale database structures tailored to your team's workflow and sales objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                GoHighLevel CRM Setup
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Complete workspace configuration including custom fields, unified communications inbox, pipeline visualizers, calendar integration, and account permissions mapping.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Lead Nurture Automations
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Instant auto-missed-call text-backs, speed-to-lead autoresponders, and multi-week drip campaigns that keep prospects warm and moving forward automatically.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Booking Calendar Systems
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Round-robin team calendars, automated text/email confirmations, and 24-hour reminder sequences designed to drastically reduce meeting no-show rates.
              </p>
            </TiltCard>

            <TiltCard className="border border-[#2d2d2d] p-[28px] rounded-[6px] bg-[rgba(255,255,255,0.01)] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold">
              <h3 className="font-['Inter_Tight',sans-serif] text-[20px] text-[#ffa62a] mb-[12px] font-semibold">
                Client Onboarding Pipelines
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Automate welcome emails, questionnaire delivery, contract signatures, and project tracking folder creation upon contract close to lower onboarding friction.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to automate your pipelines?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
