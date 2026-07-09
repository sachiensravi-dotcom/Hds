import { useEffect } from "react";
import { useNavigate } from "react-router";
import HeroSection from "../imports/HeroSection-1/index";
import TestimonialSlider from "../imports/Section-7/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";
import TiltCard from "../imports/TiltCard";

const lx = [
  {
    title: "Country Charm Coffee",
    category: "Successful Local Business",
    metric: "+140% Search Traffic",
    desc: "How a local roastery and coffee shop restructured their website structure, resulting in a massive boost in local organic visibility and online bag purchases.",
    color: "#ffa62a",
    url: "/case-studies/ccc"
  },
  {
    title: "4th Main Barber & Co.",
    category: "Local Service",
    metric: "40% Booking Friction Reduction",
    desc: "A custom booking integration built around barber booking systems, giving them a seamless mobile schedule reservation interface that customers love.",
    color: "#fff",
    url: "/case-studies/jay-barber-studio"
  },
  {
    title: "Texas Sun Roofing & Solar",
    category: "Local Service & Solar",
    metric: "52% Conversion Increase",
    desc: "Redesigning a boutique roofing and solar installer website in North Texas, optimizing booking conversion rates and clarifying service options.",
    color: "#ffa62a",
    url: "https://www.texas-sun.com/"
  }
];

export default function CaseStudiesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Mini Hero Section */}
      <div className="relative w-[1440px] h-[300px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Client Success Stories"
          title="Real Results. Organic Stable Growth."
          isMini={true}
        />
      </div>

      {/* Interactive Testimonial Slider */}
      <div className="relative w-[1440px] h-[450px] shrink-0">
        <TestimonialSlider />
      </div>

      {/* Grid listing section */}
      <div className="relative w-[1440px] py-[80px] px-[40px] flex flex-col items-start bg-[#141414] shrink-0">
        <p className="font-geist-mono font-normal text-[#989898] text-[16px] uppercase tracking-widest mb-[16px]">
          Client Success Stories
        </p>
        <h2 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal mb-[64px]">
          Real Results. Organic Stable Growth.
        </h2>

        {/* 3 cards side-by-side */}
        <div className="flex gap-[24px] w-full justify-between items-stretch">
          {lx.map((o) => (
            <TiltCard 
              key={o.title}
              onClick={() => {
                if (o.url.startsWith("/")) {
                  navigate(o.url);
                } else {
                  window.open(o.url, "_blank");
                }
              }}
              className="case-study-card flex-1 border border-[#3b3b3b] p-[32px] rounded-[6px] bg-[rgba(255,255,255,0.02)] flex flex-col items-center text-center hover:border-[#ffa62a] cursor-pointer transition-all duration-300 group glow-card-gold"
            >
              <div className="flex flex-col items-center justify-center gap-[4px] mb-[24px] w-full min-h-[44px]">
                <span className="font-['Inter_Tight',sans-serif] text-[14px] text-[#989898] uppercase">
                  {o.category}
                </span>
                <span 
                  style={{ color: o.color }} 
                  className="font-['Inter_Tight',sans-serif] text-[14px] uppercase font-bold tracking-wide"
                >
                  {o.metric}
                </span>
              </div>
              <h3 className="font-['Inter_Tight',sans-serif] text-[28px] font-semibold mb-[16px] text-center group-hover:text-[#ffa62a] transition-colors duration-300">
                {o.title}
              </h3>
              <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[16px] leading-relaxed flex-grow text-center">
                {o.desc}
              </p>
              <div className="border-t border-[#3b3b3b] pt-[24px] mt-[32px] w-full flex items-center justify-center gap-[8px]">
                <span className="font-['Inter_Tight',sans-serif] text-[16px] text-white group-hover:text-[#ffa62a] transition-colors duration-300 font-medium">
                  Read full case study
                </span>
                <span className="text-[18px] text-[#989898] group-hover:text-[#ffa62a] group-hover:translate-x-[4px] transition-all duration-300">
                  →
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to build your success story?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
