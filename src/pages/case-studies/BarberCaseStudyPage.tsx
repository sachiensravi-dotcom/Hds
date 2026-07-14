import { useEffect } from "react";
import { useNavigate } from "react-router";
import HeroSection from "../../imports/HeroSection-1/index";
import FooterSection from "../../imports/Section-17/index";
import imgBarberLaptop from "../../imports/HeroSection-2/barber_laptop.png";

export default function BarberCaseStudyPage() {
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
          title="4th Main Barber & Co."
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
              <span className="font-['Inter_Tight',sans-serif] text-[20px] font-semibold">4th Main Barber & Co.</span>
            </div>

            <div className="bg-[rgba(255,255,255,0.02)] border border-[#3b3b3b] rounded-[8px] p-[30px] flex flex-col gap-2">
              <span className="font-geist-mono text-[12px] text-[#ffa62a] uppercase tracking-widest">Industry</span>
              <span className="font-['Inter_Tight',sans-serif] text-[20px] font-semibold">Premium Grooming & Barbershop</span>
            </div>

            <div className="bg-[rgba(255,166,42,0.03)] border border-[#ffa62a]/30 rounded-[8px] p-[30px] flex flex-col gap-2">
              <span className="font-geist-mono text-[12px] text-[#ffa62a] uppercase tracking-widest">Key Metric</span>
              <span className="font-['Inter_Tight',sans-serif] text-[32px] font-bold text-[#ffa62a]">40% Booking Friction Reduction</span>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal leading-tight mb-4">
                The Challenge
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-[#b3b3b3] text-[18px] leading-[1.6]">
                4th Main Barber & Co. has a highly sought-after team of master barbers, but their customer scheduling process was full of friction. Their existing online booking calendar was complex, not mobile-friendly, and frequently caused double-bookings, leading to customer drop-offs and lost appointment revenue.
              </p>
            </div>

            <div>
              <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal leading-tight mb-4">
                The Solution
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-[#b3b3b3] text-[18px] leading-[1.6] mb-4">
                We rebuilt the front-end schedule interface, custom-integrating a streamlined booking API. This simplified user flow allows customers to choose their favorite barber, view live slot availability, and finalize booking notifications in under 30 seconds on any mobile screen.
              </p>
              <ul className="list-disc pl-5 text-[#b3b3b3] text-[16px] flex flex-col gap-2">
                <li>Integrated custom live-sync calendar API with SMS reminders.</li>
                <li>Created a slick, premium dark UI matching their luxury shop aesthetics.</li>
                <li>Eliminated booking steps to drastically reduce cart and session drop-offs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="w-full max-w-[1200px] bg-[rgba(255,255,255,0.02)] border border-[#3b3b3b] rounded-[12px] p-[50px] flex items-center justify-center mb-[80px] relative overflow-hidden group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#ffa62a]/10 to-transparent opacity-30 blur-[20px] pointer-events-none" />
          <video 
            src="https://dl.dropboxusercontent.com/scl/fi/uuj3ozl599mlvstme6jwx/Jay-s-Barber-Studio.mp4?rlkey=clzfhedx2lnolrje66izprmfi&st=dao8k9k9&raw=1" 
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
            “Hyperion completely streamlined our booking system. We saw booking friction drop by 40% and our direct appointments tripled within the first three months of launching the new schedule interface.”
          </p>
          <div>
            <h4 className="font-['Inter_Tight',sans-serif] font-bold text-white text-[18px]">Jay Barber</h4>
            <span className="font-geist-mono text-[#989898] text-[13px] uppercase tracking-wider block mt-1">Owner | 4th Main Barber & Co.</span>
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
