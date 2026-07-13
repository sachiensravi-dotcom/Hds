import { useState, useEffect } from "react";
import imgRectangle7 from "./fe3273560c41cea13faaa5f45d423a2c6b6dd56c.png";

const Ts = [
  {
    quote: "“Hyperion helped me to have a fully functional website that being the base of my advertisement campaign. We had real growth in visitors since and it’s been steadily growing.”",
    author: "Kevin Daugherty",
    role: "Owner | Country charm coffee",
    label: "01. Country Charm Coffee",
    image: imgRectangle7
  },
  {
    quote: "“Hyperion completely streamlined our booking system. We saw booking friction drop by 40% and our direct appointments tripled within the first three months of launching the new schedule interface.”",
    author: "Jay Barber",
    role: "Owner | 4th Main Barber & Co.",
    label: "02. 4th Main Barber & Co.",
    image: "/barber_owner_portrait.jpg"
  }
];

export default function Section() {
  const [i, o] = useState(0);

  useEffect(() => {
    const l = setInterval(() => {
      o(u => (u + 1) % Ts.length);
    }, 7000);
    return () => clearInterval(l);
  }, []);

  return (
    <div className="bg-[#141414] relative size-full overflow-hidden" data-name="Section">
      {/* Testimonial Image */}
      <div className="absolute left-[40px] size-[207px] top-[160px] rounded-[6px] overflow-hidden border border-[#3b3b3b]">
        {Ts.map((l, u) => (
          <img
            key={u}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-500 ease-in-out ${i === u ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            src={l.image}
          />
        ))}
      </div>

      {/* Quote Content */}
      <div className="absolute left-[calc(16.67%+47px)] top-[160px] w-[767px] h-[210px] relative">
        {Ts.map((l, u) => (
          <div
            key={u}
            className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${i === u ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
          >
            <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.5] not-italic text-[26px] text-white">
              {l.quote}
            </p>
            <div className="mt-4">
              <p className="[word-break:break-word] font-['Inter_Tight:SemiBold',sans-serif] leading-[normal] not-italic text-[18px] text-white font-semibold">
                {l.author}
              </p>
              <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] font-normal leading-[normal] text-[#989898] text-[14px] uppercase whitespace-nowrap mt-1">
                {l.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Selector Tabs Links */}
      <div className="absolute left-[calc(75%+54px)] top-[160px] flex flex-col gap-[36px] select-none z-10">
        {Ts.map((l, u) => (
          <p
            key={u}
            onClick={() => o(u)}
            className={`[word-break:break-word] font-geist-mono font-normal leading-[normal] text-[14px] uppercase whitespace-nowrap cursor-pointer transition-colors duration-300 ${i === u ? "text-white font-medium" : "text-[#8f8f8f] hover:text-white"}`}
          >
            {l.label}
          </p>
        ))}
      </div>

      {/* Vertical Divider line */}
      <div className="absolute flex h-[207px] items-center justify-center left-[calc(75%+14px)] top-[160px] w-0">
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

      {/* Animated Accent Bar */}
      <div className="absolute left-[calc(75%+54px)] top-[160px] w-[266px] h-[78px] pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0.08)] h-[2px] top-[24px] w-full" />
        <div className="absolute bg-[rgba(255,255,255,0.08)] h-[2px] top-[75px] w-full" />
        <div
          className="absolute bg-[#ffa62a] h-[2px] w-[190px] transition-all duration-300 ease-in-out"
          style={{ top: i === 0 ? "24px" : "75px" }}
        />
      </div>
    </div>
  );
}