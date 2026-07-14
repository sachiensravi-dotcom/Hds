import { useEffect } from "react";
import { useNavigate } from "react-router";
import HeroSection from "../../imports/HeroSection-1/index";
import FooterSection from "../../imports/Section-17/index";
import imgCoffeeLaptop from "../../imports/HeroSection-2/coffee_laptop.png";

export default function CountryCharmCoffeeCaseStudyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Mini Hero Header */}
      <div className="relative w-[1440px] h-[300px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Case Study"
          title="Country Charm Coffee"
          isMini={true}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative w-[1440px] py-[80px] px-[60px] flex flex-col items-center bg-[#141414] shrink-0">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start mb-[80px]">
          
          {/* Left Metrics Column */}
          <div className="lg:col-span-4 flex flex-col gap-[30px]">
            <div className="bg-[rgba(255,255,255,0.02)] border border-[#3b3b3b] rounded-[8px] p-[30px] flex flex-col gap-2">
              <span className="font-geist-mono text-[12px] text-[#ffa62a] uppercase tracking-widest">Client</span>
              <span className="font-['Inter_Tight',sans-serif] text-[20px] font-semibold">Country Charm Coffee</span>
            </div>

            <div className="bg-[rgba(255,255,255,0.02)] border border-[#3b3b3b] rounded-[8px] p-[30px] flex flex-col gap-2">
              <span className="font-geist-mono text-[12px] text-[#ffa62a] uppercase tracking-widest">Industry</span>
              <span className="font-['Inter_Tight',sans-serif] text-[20px] font-semibold">Coffee Roastery & Cafe</span>
            </div>

            <div className="bg-[rgba(255,166,42,0.03)] border border-[#ffa62a]/30 rounded-[8px] p-[30px] flex flex-col gap-2">
              <span className="font-geist-mono text-[12px] text-[#ffa62a] uppercase tracking-widest">Key Metric</span>
              <span className="font-['Inter_Tight',sans-serif] text-[32px] font-bold text-[#ffa62a]">+140% Search Traffic</span>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal leading-tight mb-4">
                The Challenge
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-[#b3b3b3] text-[18px] leading-[1.6]">
                Country Charm Coffee had a wonderful local presence in their cafe, but their online store was struggling to gain traction. The original website was outdated, slow, and lacked a search-engine-friendly structure, which made it invisible to coffee lovers searching for gourmet local roasters in North Texas.
              </p>
            </div>

            <div>
              <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal leading-tight mb-4">
                The Solution
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-[#b3b3b3] text-[18px] leading-[1.6] mb-4">
                Hyperion built a bespoke, speed-optimized website from the ground up, utilizing modern semantic structure and local schema markup. We also designed a beautiful, simplified user experience that showcases their custom blends and roasts directly on the homepage, allowing users to buy fresh coffee bags with just three clicks.
              </p>
              <ul className="list-disc pl-5 text-[#b3b3b3] text-[16px] flex flex-col gap-2">
                <li>Designed a clean, rustic-yet-modern visual interface mirroring their cafe vibe.</li>
                <li>Built a fully responsive design optimized for mobile shoppers.</li>
                <li>Implemented clean technical SEO structure to boost Google rankings.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="w-full max-w-[1200px] bg-[rgba(255,255,255,0.02)] border border-[#3b3b3b] rounded-[12px] p-[50px] flex items-center justify-center mb-[80px] relative overflow-hidden group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#ffa62a]/10 to-transparent opacity-30 blur-[20px] pointer-events-none" />
          <video 
            src="https://dl.dropboxusercontent.com/scl/fi/hcf5vwukzj0y4apz6x0n5/Country-Charm-Coffee.mp4?rlkey=zpij00b51yljvs8meohhjow32&st=y9i8k36r&raw=1" 
            controls 
            className="w-full max-w-[800px] rounded-[6px] border border-[#3b3b3b] shadow-2xl z-10"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        </div>

        {/* Testimonial Quote Section */}
        <div className="w-full max-w-[1000px] border-t border-b border-[#2b2b2b] py-[60px] flex flex-col items-center text-center">
          <p className="font-['Inter_Tight',sans-serif] text-[28px] leading-[1.5] text-white mb-6 italic">
            “Hyperion helped me to have a fully functional website that being the base of my advertisement campaign. We had real growth in visitors since and it’s been steadily growing.”
          </p>
          <div>
            <h4 className="font-['Inter_Tight',sans-serif] font-bold text-white text-[18px]">Kevin Daugherty</h4>
            <span className="font-geist-mono text-[#989898] text-[13px] uppercase tracking-wider block mt-1">Owner | Country charm coffee</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
