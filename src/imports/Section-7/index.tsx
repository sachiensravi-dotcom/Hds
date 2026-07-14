import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import imgRectangle7 from "../Section-14/fe3273560c41cea13faaa5f45d423a2c6b6dd56c.png";
import imgBarberPortrait from "./barber_owner_portrait.jpg";

const Ts = [
  {
    quote: "“Hyperion helped me to have a fully functional website that being the base of my advertisement campaign. We had real growth in visitors since and it’s been steadily growing.”",
    author: "Kevin Daugherty",
    role: "Owner | Country charm coffee",
    label: "01. Country Charm Coffee",
    image: imgRectangle7,
    link: "/case-studies/ccc"
  },
  {
    quote: "“Hyperion completely streamlined our booking system. We saw booking friction drop by 40% and our direct appointments tripled within the first three months of launching the new schedule interface.”",
    author: "Jay Barber",
    role: "Owner | 4th Main Barber & Co.",
    label: "02. 4th Main Barber & Co.",
    image: imgBarberPortrait,
    link: "/case-studies/jay-barber-studio"
  }
];

export default function TestimonialSlider() {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % Ts.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#141414] relative w-full h-[450px] overflow-hidden" data-name="Section">
      {/* Client Portrait / Studio Image */}
      <div 
        onClick={() => navigate(Ts[activeIdx].link)}
        className="absolute left-[40px] size-[207px] top-[120px] rounded-[6px] overflow-hidden border border-[#3b3b3b] cursor-pointer hover:border-[#ffa62a] transition-all duration-300 group"
      >
        {Ts.map((item, idx) => (
          <img 
            key={idx}
            alt="" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${
              activeIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`} 
            src={item.image} 
          />
        ))}
      </div>

      {/* Quote Content */}
      <div className="absolute left-[calc(16.67%+47px)] top-[120px] w-[767px] h-[210px] relative">
        {Ts.map((item, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
              activeIdx === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[1.5] not-italic text-[26px] text-white">
              {item.quote}
            </p>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] font-semibold leading-[normal] not-italic text-[18px] text-white">
                  {item.author}
                </p>
                <p className="[word-break:break-word] font-geist-mono font-normal leading-[normal] text-[#989898] text-[14px] uppercase whitespace-nowrap mt-1">
                  {item.role}
                </p>
              </div>
              <div 
                onClick={() => navigate(item.link)}
                className="cursor-pointer text-[#ffa62a] hover:text-white font-['Inter_Tight',sans-serif] font-semibold text-[15px] flex items-center gap-1 transition-colors duration-200 select-none pb-1"
              >
                Read Case Study →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Navigation Selector Tabs */}
      <div className="absolute left-[calc(75%+54px)] top-[120px] flex flex-col gap-[36px] select-none z-10">
        {Ts.map((item, idx) => (
          <p 
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`[word-break:break-word] font-geist-mono font-normal leading-[normal] text-[14px] uppercase whitespace-nowrap cursor-pointer transition-colors duration-300 ${
              activeIdx === idx ? "text-white font-semibold" : "text-[#8f8f8f] hover:text-white"
            }`}
          >
            {item.label}
          </p>
        ))}
      </div>

      {/* Line Separator Graphic */}
      <div className="absolute flex h-[207px] items-center justify-center left-[calc(75%+14px)] top-[120px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[207px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                <line id="Line 10" stroke="var(--stroke-0, #3B3B3B)" x2="207" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Underline Indicator Slider */}
      <div className="absolute left-[calc(75%+54px)] top-[120px] w-[266px] h-[78px] pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0.08)] h-[2px] top-[24px] w-full" />
        <div className="absolute bg-[rgba(255,255,255,0.08)] h-[2px] top-[75px] w-full" />
        <div 
          className="absolute bg-[#ffa62a] h-[2px] w-[190px] transition-all duration-300 ease-in-out" 
          style={{ top: activeIdx === 0 ? "24px" : "75px" }} 
        />
      </div>
    </div>
  );
}