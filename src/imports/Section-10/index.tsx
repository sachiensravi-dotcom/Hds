import { useState, useEffect, useRef } from "react";

const steps = [
  {
    label: "01. Discovery & Planning",
    desc: "We start by understanding your business, goals, and vision. This helps us create a clear plan for your website that aligns with your needs and future growth."
  },
  {
    label: "02. Design & Feedback",
    desc: "We craft custom, modern UI layouts tailored to your brand identity. You get direct revision cycles to make sure the style matches your expectation perfectly."
  },
  {
    label: "03. Development & Testing",
    desc: "We build your custom website using high-performance clean code. Every module, form, and page is thoroughly tested for performance, responsiveness, and speed."
  },
  {
    label: "04. Launch & Ongoing Support",
    desc: "We deploy your new website to fast hosting and configure SSL, domain settings, and SEO. We stay with you to provide ongoing optimization and scale support."
  }
];

export default function Section() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 6000); // cycle every 6 seconds
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    startTimer(); // reset timer on manual click
  };

  return (
    <div className="bg-[#141414] relative w-full pt-[100px] pb-[80px] px-[40px] flex flex-col items-start select-none" data-name="Section">
      {/* Tagline */}
      <p className="font-geist-mono font-normal leading-[normal] text-[#989898] text-[16px] uppercase tracking-widest mb-[24px]">
        Our process
      </p>

      {/* Description paragraph with fade transition */}
      <div className="relative w-full max-w-[1000px] h-[130px] mb-[64px]">
        {steps.map((step, idx) => (
          <p 
            key={idx}
            className={`absolute top-0 left-0 font-['Inter_Tight',sans-serif] leading-relaxed not-italic text-[36px] text-white transition-all duration-500 ease-in-out ${
              activeIndex === idx ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98] pointer-events-none"
            }`}
          >
            {step.desc}
          </p>
        ))}
      </div>

      {/* Tab List */}
      <div className="w-full relative pt-[24px]" data-name="tab list">
        {/* Progress Bar Track */}
        <div className="absolute top-0 left-0 h-[3px] bg-[rgba(255,255,255,0.1)] w-full" />
        <div 
          className="absolute top-0 h-[3px] bg-[#ffa62a] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{
            width: "25%",
            left: `${activeIndex * 25}%`
          }}
        />

        {/* Tab triggers */}
        <div className="flex w-full items-center justify-between">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              onClick={() => handleTabClick(idx)}
              className="flex-[1_0_0] text-start cursor-pointer group"
            >
              <p 
                className={`font-geist-mono font-medium leading-[normal] text-[16px] uppercase whitespace-nowrap transition-colors duration-300 ${
                  activeIndex === idx 
                    ? "text-white" 
                    : "text-[#8f8f8f] group-hover:text-white"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}