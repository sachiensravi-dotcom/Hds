import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import imgImage18 from "./1b6b44155aaa812c18258d2f5006f7602297f840.png";

export default function Section({ 
  title = "Start building your online presence", 
  ctaText = "Talk with us" 
}: { 
  title?: string; 
  ctaText?: string; 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;
      
      // Calculate offset from viewport center
      if (rect.top < winHeight && rect.bottom > 0) {
        const centerY = rect.top + rect.height / 2;
        const screenCenterY = winHeight / 2;
        setScrollY((centerY - screenCenterY) * -0.15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once initially
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="bg-black relative w-full h-[300px] flex flex-col items-center justify-center overflow-hidden" 
      data-name="Section"
    >
      {/* Background Radial Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[387px] w-[663px] pointer-events-none z-0">
        <div className="absolute inset-[-62.02%_-36.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1143 867">
            <g filter="url(#filter0_f_5_3681)" id="Ellipse 5">
              <ellipse cx="571.5" cy="433.5" fill="var(--fill-0, #FFA62A)" fillOpacity="0.1" rx="331.5" ry="193.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="867" id="filter0_f_5_3681" width="1143" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_5_3681" stdDeviation="120" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Right Waveform Image (Parallax moves down/up) */}
      <div 
        style={{ transform: `translateY(${scrollY}px) translateZ(0)` }}
        className="absolute bottom-0 h-[300px] right-0 w-[400px] pointer-events-none z-10"
        data-name="image 18"
      >
        <img 
          alt="" 
          className="absolute inset-0 object-cover size-full" 
          src={imgImage18} 
        />
      </div>

      {/* Left Waveform Image (Parallax moves opposite direction) */}
      <div 
        style={{ transform: `translateY(${-scrollY}px) translateZ(0)` }}
        className="absolute bottom-0 flex h-[300px] items-center justify-center left-0 w-[400px] pointer-events-none z-10"
      >
        <div className="flex-none rotate-180">
          <div className="h-[300px] relative w-[400px]" data-name="image 19">
            <img 
              alt="" 
              className="absolute inset-0 object-cover size-full" 
              src={imgImage18} 
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic text-[44px] text-white text-center font-normal">
          {title}
        </p>
        
        {/* Glow Button */}
        <div 
          onClick={() => navigate("/contact")}
          className="glow-button-company bg-[#ffa62a] hover:bg-[#ffe62a] active:scale-[0.97] transition-all duration-300 cursor-pointer flex items-center justify-center px-[36px] py-[16px] rounded-[6px]"
          data-name="btn"
        >
          <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] font-bold whitespace-nowrap z-10">
            {ctaText}
          </p>
        </div>
      </div>
    </div>
  );
}