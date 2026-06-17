import imgImage18 from "./1b6b44155aaa812c18258d2f5006f7602297f840.png";

function Btn() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ffa62a] content-stretch flex items-center justify-center left-1/2 px-[20px] py-[16px] rounded-[120px] top-[198px]" data-name="btn">
      <p className="[word-break:break-word] font-['Inter_Tight:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] text-right whitespace-nowrap">Talk with us</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-black relative size-full" data-name="Section">
      <div className="-translate-x-1/2 absolute h-[387px] left-[calc(50%-0.12px)] top-[195.32px] w-[663px]">
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
      <div className="absolute bottom-0 h-[352px] left-[calc(66.67%+11px)] w-[469px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
      <div className="absolute bottom-0 flex h-[352px] items-center justify-center left-0 w-[469px]">
        <div className="flex-none rotate-180">
          <div className="h-[352px] relative w-[469px]" data-name="image 19">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[calc(50%-355px)] not-italic text-[48px] text-white top-[100px] whitespace-nowrap">Start building your online presence</p>
      <Btn />
    </div>
  );
}