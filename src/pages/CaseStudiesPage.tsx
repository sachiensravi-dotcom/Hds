import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";
import { Coffee, Scissors, Sun } from "lucide-react";

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      icon: <Coffee className="size-8 text-[#ffa62a]" />,
      num: "01",
      title: "Country Charm Coffee",
      client: "Kevin Daugherty",
      role: "Owner",
      quote: "“Hyperion helped me to have a fully functional website that being the base of my advertisement campaign. We had real growth in visitors since and it's been steadily growing.”",
      details: "Rebuilt their local storefront presence and online order funnels to scale organic customer flow."
    },
    {
      icon: <Scissors className="size-8 text-[#ffa62a]" />,
      num: "02",
      title: "4th Main Barber & Co.",
      client: "Marcus Vance",
      role: "Lead Barber",
      quote: "“Our booking rate doubled within three weeks of launching the new site. The A2P SMS notifications reduced appointment no-shows to practically zero.”",
      details: "Implemented custom booking wizards, local search optimizations, and automatic SMS text reminders."
    },
    {
      icon: <Sun className="size-8 text-[#ffa62a]" />,
      num: "03",
      title: "Texas Sun Power",
      client: "Dave Reynolds",
      role: "Director of Marketing",
      quote: "“The custom savings calculator they built is converting leads at 14%. Our cost per acquisition has dropped by over 30% since moving away from templates.”",
      details: "Engineered an interactive solar ROI calculator, landing page variants, and Google AEO schema markup."
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
          Proof of Performance
        </span>
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 max-w-[700px] leading-tight">
          Case Studies & Results
        </h1>
        <p className="text-neutral-400 text-lg max-w-[600px] leading-relaxed">
          See how our custom web systems and local growth frameworks help businesses unlock customer acquisition and search visibility.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-[1360px] mx-auto px-[40px] pb-24 flex flex-col gap-8">
        {cases.map((cs, idx) => (
          <div 
            key={idx}
            className="bg-[#1a1a1a]/40 border border-[#2b2b2b] rounded-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#ffa62a] transition-all duration-300 group"
          >
            {/* Left Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-['Geist_Mono'] text-[#ffa62a] text-lg font-semibold tracking-wider">
                {cs.num}. {cs.title}
              </span>
              <div className="size-14 rounded-lg bg-[rgba(255,166,42,0.08)] flex items-center justify-center border border-[rgba(255,166,42,0.15)] group-hover:scale-105 transition-transform duration-300">
                {cs.icon}
              </div>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                {cs.details}
              </p>
            </div>

            {/* Right Quote (8 cols) */}
            <div className="lg:col-span-8 border-l border-[#2b2b2b] pl-8 lg:pl-12 space-y-4">
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed italic">
                {cs.quote}
              </p>
              <div>
                <span className="text-white font-semibold block text-[16px]">{cs.client}</span>
                <span className="text-neutral-500 text-xs font-['Geist_Mono'] uppercase tracking-wider">{cs.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
