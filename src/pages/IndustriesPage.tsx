import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";
import { Sun, Building2, Rocket } from "lucide-react";

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      icon: <Sun className="size-8 text-[#ffa62a]" />,
      title: "Solar Businesses",
      description: "Bespoke high-performance landing pages, custom calculators, and focused local SEO/AEO frameworks engineered to capture high-intent leads and drive residential and commercial solar installations.",
      tag: "Energy Sector"
    },
    {
      icon: <Building2 className="size-8 text-[#ffa62a]" />,
      title: "Successful Local Businesses",
      description: "Complete digital transformations for service leaders. We build fast, trustworthy online portals, automated review-generation funnels, and unified A2P communications that convert traffic into revenue.",
      tag: "Local Services"
    },
    {
      icon: <Rocket className="size-8 text-[#ffa62a]" />,
      title: "Startups & Tech",
      description: "From custom Web Apps to conversion-optimized launch funnels. We provide the rapid, robust development and clean architecture necessary to scale platforms and secure your market position.",
      tag: "Growth Stage"
    }
  ];

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden font-['Inter_Tight',sans-serif] text-white">
      <div className="relative w-full h-[120px] overflow-hidden">
        <HeroSection />
      </div>

      {/* Hero Title */}
      <div className="max-w-[1360px] mx-auto px-[40px] pt-20 pb-12">
        <span className="font-['Geist_Mono'] text-[#ffa62a] text-[16px] uppercase tracking-widest block mb-4">
          Who We Serve
        </span>
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 max-w-[700px] leading-tight">
          Industries We Drive Forward
        </h1>
        <p className="text-neutral-400 text-lg max-w-[600px] leading-relaxed">
          We build custom web systems designed specifically for sectors where conversion, credibility, and organic search visibility dictate business growth.
        </p>
      </div>

      {/* Industry Cards Grid */}
      <div className="max-w-[1360px] mx-auto px-[40px] pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {industries.map((ind, idx) => (
          <div 
            key={idx}
            className="bg-[#1a1a1a]/40 border border-[#2b2b2b] p-8 rounded-xl flex flex-col justify-between h-[360px] hover:border-[#ffa62a] transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div>
              <div className="size-14 rounded-lg bg-[rgba(255,166,42,0.08)] flex items-center justify-center mb-8 border border-[rgba(255,166,42,0.15)] group-hover:scale-105 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="text-[24px] font-semibold text-white mb-3 group-hover:text-[#ffa62a] transition-colors duration-300">
                {ind.title}
              </h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed">
                {ind.description}
              </p>
            </div>
            <span className="font-['Geist_Mono'] text-xs text-neutral-500 uppercase tracking-wider mt-4 block">
              {ind.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
