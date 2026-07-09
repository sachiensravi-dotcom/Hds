import { useNavigate } from "react-router";
import TiltCard from "../TiltCard";
import imgImage11 from "./7b3b1f695a64167cbdeb76511e04e62c2b378710.png";

export default function Section({ showAll = false }: { showAll?: boolean }) {
  const navigate = useNavigate();

  if (showAll) {
    return (
      <div 
        className="bg-[#141414] relative w-full py-[100px] px-[40px] border-t border-[#222222] website-package-section flex flex-col items-center justify-center" 
        data-name="Section"
        data-no-global-click="true"
      >
        {/* Custom SVG Gradient definition for gold icons */}
        <svg className="absolute w-0 h-0" width="0" height="0">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE62A" />
              <stop offset="100%" stopColor="#FFA62A" />
            </linearGradient>
          </defs>
        </svg>

        {/* CSS Keyframe animations for continuous icon movement */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes constant-code {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.08) rotate(3deg); }
          }
          @keyframes constant-rocket {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-4px) translateX(2px); }
          }
          @keyframes constant-sync {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes constant-cloud {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes constant-sparkle {
            0%, 100% { transform: scale(1) opacity(1); }
            50% { transform: scale(0.9) opacity(0.8); }
          }
          @keyframes constant-network {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes constant-funnel {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @keyframes constant-mic {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-5deg); }
          }
          @keyframes constant-mail {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.04) translateY(-2px); }
          }
          @keyframes constant-star {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.15) rotate(15deg); opacity: 0.85; }
          }
          @keyframes constant-db {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-2px) scaleY(0.96); }
          }

          .animate-constant-code { animation: constant-code 2.5s ease-in-out infinite; }
          .animate-constant-rocket { animation: constant-rocket 2s ease-in-out infinite; }
          .animate-constant-sync { animation: constant-sync 6s linear infinite; }
          .animate-constant-cloud { animation: constant-cloud 3s ease-in-out infinite; }
          .animate-constant-sparkle { animation: constant-sparkle 2.2s ease-in-out infinite; }
          .animate-constant-network { animation: constant-network 2.8s ease-in-out infinite; }
          .animate-constant-funnel { animation: constant-funnel 2.4s ease-in-out infinite; }
          .animate-constant-mic { animation: constant-mic 2s ease-in-out infinite; }
          .animate-constant-mail { animation: constant-mail 2.6s ease-in-out infinite; }
          .animate-constant-star { animation: constant-star 2s ease-in-out infinite; }
          .animate-constant-db { animation: constant-db 2.2s ease-in-out infinite; }

          .animate-constant-code,
          .animate-constant-rocket,
          .animate-constant-sync,
          .animate-constant-cloud,
          .animate-constant-sparkle,
          .animate-constant-network,
          .animate-constant-funnel,
          .animate-constant-mic,
          .animate-constant-mail,
          .animate-constant-star,
          .animate-constant-db {
            transform-origin: center;
            display: inline-block;
          }
        `}} />

        <div className="absolute right-[100px] top-[100px] w-[600px] h-[300px] bg-halo-gold pointer-events-none opacity-[0.08] mix-blend-screen" />
        <div className="absolute left-[100px] bottom-[100px] w-[600px] h-[300px] bg-halo-yellow pointer-events-none opacity-[0.08] mix-blend-screen" />
        
        <div className="mb-[64px] relative z-10 flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-[1360px]">
          <div>
            <p className="font-geist-mono text-[16px] text-[#989898] uppercase tracking-widest mb-[16px] font-semibold">
              WHAT WE DO
            </p>
            <h2 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal text-white max-w-[700px]">
              Full-Suite Growth Services & Automations
            </h2>
          </div>
        </div>

        {/* 3x3 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] relative z-10 w-full max-w-[1360px] mx-auto items-stretch">
          {/* Card 1: Custom Website Design */}
          <TiltCard 
            onClick={() => navigate("/services/website")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  01 / Website
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-code" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Custom Website Design & Development
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                We design and develop custom websites that help businesses present themselves at a higher level online. Every site is built around your goals, your positioning, and the experience your audience needs.
              </p>
            </div>
          </TiltCard>

          {/* Card 2: Landing Pages */}
          <TiltCard 
            onClick={() => navigate("/services/landing-pages")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  02 / Conversion
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-rocket" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41a6 6 0 0 1-3.79 7.38H2.25v-3.07a6 6 0 0 1 7.38-5.84l2.58 5.84Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 2.25a.75.75 0 0 1-.75.75H18m2.25-.75v3a.75.75 0 0 1-.75.75h-3" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Landing Pages & Conversion-Focused Pages
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                We create focused pages for campaign offers, paid media traffic, and local promotions that help turn more visits into booked appointments.
              </p>
            </div>
          </TiltCard>

          {/* Card 3: SEO & AEO */}
          <TiltCard 
            onClick={() => navigate("/services/seo")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  03 / Discovery
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-sparkle" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904ZM19.071 4.929L18.5 8L17.929 4.929L15 4.5L17.929 4.071L18.5 1L19.071 4.071L22 4.5L19.071 4.929Z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                AEO & Search Visibility Foundations
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Structure your site for discoverability by Answer Engines (AEO), voice search queries, and AI assistants like Gemini, ChatGPT, and Perplexity.
              </p>
            </div>
          </TiltCard>

          {/* Card 4: Social Media Marketing */}
          <TiltCard 
            onClick={() => navigate("/services/smm")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  04 / Acquisition
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-network" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-.72a3 3 0 0 0-3 3v3.72a3 3 0 0 0 3 3ZM6 18.72a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h.72a3 3 0 0 1 3 3v3.72a3 3 0 0 1-3 3ZM12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Social Media Marketing & Paid Ads
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                We structure high-converting Meta advertising campaigns targeting local demographics with geo-specific cost-saving calculators, retargeting non-converters, and driving high-intent leads.
              </p>
            </div>
          </TiltCard>

          {/* Card 5: CRM Automation */}
          <TiltCard 
            onClick={() => navigate("/services/crm-automation")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  05 / Automation
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-funnel" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 6h18M6 11h12M9 16h6" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                CRM & Sales Pipeline Automations
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Maximize lead value with fully integrated CRM sales pipelines, automated email/SMS workflows, booking calendar setup, and review acquisition campaigns built directly on GoHighLevel.
              </p>
            </div>
          </TiltCard>

          {/* Card 6: Voice AI */}
          <TiltCard 
            onClick={() => navigate("/services/voice-ai")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  06 / Conversational AI
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-mic" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Voice AI & Conversational Agents
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Deploy conversational AI agents that answer phone support, pre-qualify inbound calls, answer FAQs, and directly schedule appointments on your CRM calendar.
              </p>
            </div>
          </TiltCard>

          {/* Card 7: Email Nurturing */}
          <TiltCard 
            onClick={() => navigate("/services/email-nurturing")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  07 / Email Nurturing
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-mail" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Automated Email Campaigns & Flows
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Drive retention and secondary conversion with custom trigger flows, newsletters, drip campaigns, and newsletters tailored to customer lifecycle stages.
              </p>
            </div>
          </TiltCard>

          {/* Card 8: Reputation Management */}
          <TiltCard 
            onClick={() => navigate("/services/reputation-management")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  08 / Reputation
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-star" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.39.779-.39.974 0l2.25 4.502 4.967.72c.43.063.602.583.292.897l-3.596 3.506.848 4.94c.074.43-.377.759-.76.553L12 18.25l-4.405 2.32c-.383.206-.834-.122-.76-.553l.848-4.94-3.596-3.506c-.31-.314-.138-.834.292-.897l4.967-.72 2.25-4.502z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Reputation Management
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Automate customer review request cycles via email and SMS to capture 5-star feedback, display testimonials dynamically, and boost search visibility.
              </p>
            </div>
          </TiltCard>

          {/* Card 9: Database Reactivation */}
          <TiltCard 
            onClick={() => navigate("/services/database-reactivation")}
            className="relative bg-[rgba(255,255,255,0.015)] border border-[#2d2d2d] rounded-[8px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px] glow-card-gold"
          >
            <div>
              <div className="flex justify-between items-start mb-[20px] w-full">
                <span className="font-geist-mono text-[#ffa62a] text-[13px] uppercase tracking-wider block">
                  09 / Reactivation
                </span>
                <div className="p-[8px] rounded-[6px] bg-[rgba(255,166,42,0.05)] border border-[rgba(255,166,42,0.1)] group-hover:border-[rgba(255,166,42,0.3)] transition-colors duration-300">
                  <svg className="size-[28px] animate-constant-db" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gold-grad)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 0v3.75m-16.5-3.75v3.75" />
                  </svg>
                </div>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                Database Reactivation
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                Re-engage cold, dead, or inactive lead databases with highly specific SMS and email broadcast offers to generate immediate bookings at zero additional ad spend.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    );
  }

  // Else render original 5-card homepage packages list (compact mode)
  return (
    <div 
      className="bg-[#141414] relative size-full py-[80px] px-[40px] border-t border-[#222222] website-package-section flex flex-col items-center justify-center" 
      data-name="Section"
      data-no-global-click="true"
    >
      <div className="absolute right-[100px] top-[100px] w-[600px] h-[300px] bg-halo-gold pointer-events-none opacity-[0.08] mix-blend-screen" />
      <div className="absolute left-[100px] bottom-[100px] w-[600px] h-[300px] bg-halo-yellow pointer-events-none opacity-[0.08] mix-blend-screen" />
      
      <div className="mb-[64px] relative z-10 flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-[1360px]">
        <div>
          <p className="font-geist-mono text-[16px] text-[#989898] uppercase tracking-widest mb-[16px] font-semibold">
            WHAT WE DO
          </p>
          <h2 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal text-white max-w-[700px]">
            The complete website package for your growth
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] relative z-10 w-full max-w-[1360px] mx-auto items-stretch">
        <TiltCard 
          onClick={() => navigate("/services/landing-pages")}
          max={5}
          scale={1.01}
          className="lg:col-span-1 bg-[rgba(255,255,255,0.015)] border border-[#2b2b2b] rounded-[6px] p-[32px] flex flex-col justify-between h-full group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer glow-card-gold"
        >
          <div>
            <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-white transition-colors duration-300">
              Landing Pages & Conversion-Focused Pages
            </h3>
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed mb-[24px]">
              We create focused pages for offers, services, and campaigns that help turn more visits into inquiries, calls, and customers.
            </p>
          </div>
          <div className="w-full h-[280px] rounded-[6px] overflow-hidden mt-auto border border-[#2b2b2b]">
            <img 
              src={imgImage11} 
              alt="Landing pages mockup" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </TiltCard>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <TiltCard 
            onClick={() => navigate("/services/website")}
            max={5}
            scale={1.01}
            className="bg-[rgba(255,255,255,0.015)] border border-[#2b2b2b] rounded-[6px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer glow-card-gold min-h-[220px]"
          >
            <div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-white transition-colors duration-300">
                Custom Website Design & Development
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                We design and develop custom websites that help businesses present themselves at a higher level online. Every site is built around your goals, your positioning, and the experience your audience needs.
              </p>
            </div>
          </TiltCard>

          <TiltCard 
            onClick={() => navigate("/services/website")}
            max={5}
            scale={1.01}
            className="bg-[rgba(255,255,255,0.015)] border border-[#2b2b2b] rounded-[6px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer glow-card-gold min-h-[220px]"
          >
            <div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-white transition-colors duration-300">
                Website Redesigns
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                If your current site feels outdated, unclear, or underwhelming, we can rebuild it into something more modern, strategic, and conversion-focused.
              </p>
            </div>
          </TiltCard>

          <TiltCard 
            onClick={() => navigate("/services/seo")}
            max={5}
            scale={1.01}
            className="bg-[rgba(255,255,255,0.015)] border border-[#2b2b2b] rounded-[6px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer glow-card-gold min-h-[220px]"
          >
            <div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-white transition-colors duration-300">
                SEO-Ready Website Structure
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                We build websites with clean structure, page hierarchy, content organization, and on-page fundamentals that support stronger search visibility over time.
              </p>
            </div>
          </TiltCard>

          <TiltCard 
            onClick={() => navigate("/services/seo")}
            max={5}
            scale={1.01}
            className="bg-[rgba(255,255,255,0.015)] border border-[#2b2b2b] rounded-[6px] p-[32px] flex flex-col justify-between group hover:border-[#ffa62a] transition-all duration-300 cursor-pointer glow-card-gold min-h-[220px]"
          >
            <div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
                AEO & Search Visibility Foundations
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[15px] leading-relaxed">
                As search continues to evolve, websites need to be structured for clarity, relevance, and discoverability. We build with that future in mind so your site is better positioned for both traditional search and answer-driven search experiences.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}