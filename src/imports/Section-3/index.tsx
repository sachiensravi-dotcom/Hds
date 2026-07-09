import { useNavigate } from "react-router";
import TiltCard from "../TiltCard";
import imgImage11 from "./7b3b1f695a64167cbdeb76511e04e62c2b378710.png";

export default function Section() {
  const navigate = useNavigate();

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
              <h3 className="font-['Inter_Tight',sans-serif] text-[22px] font-normal text-white mb-[16px] group-hover:text-white transition-colors duration-300">
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