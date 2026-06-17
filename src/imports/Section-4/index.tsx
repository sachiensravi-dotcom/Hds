import imgRectangle7 from "./fe3273560c41cea13faaa5f45d423a2c6b6dd56c.png";

function Group() {
  return (
    <div className="absolute contents left-[calc(75%+54px)] top-[144px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[3px] left-[calc(75%+54px)] top-[144px] w-[266px]" />
      <div className="absolute bg-[#ffa62a] h-[3px] left-[calc(75%+54px)] top-[144px] w-[190px]" />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[calc(75%+54px)] px-[20px] py-[16px] rounded-[120px] top-[273px]" data-name="btn">
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[120px]" />
      <p className="[word-break:break-word] font-['Inter_Tight:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#141414] text-[18px] text-right whitespace-nowrap">All case studies</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <div className="absolute left-[40px] size-[207px] top-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[calc(16.67%+47px)] not-italic text-[28px] text-white top-[120px] w-[767px]">“Hyperion helped me to have a fully functional website that being the base of my advertisement campaign. We had real growth in visitors since and it’s been steadily growing.”</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:SemiBold',sans-serif] leading-[normal] left-[calc(16.67%+47px)] not-italic text-[18px] text-white top-[279px] whitespace-nowrap">Kevin Daugherty</p>
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[calc(16.67%+47px)] text-[#989898] text-[14px] top-[309px] uppercase whitespace-nowrap">Owner | Country charm coffee</p>
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[calc(75%+54px)] text-[14px] text-white top-[120px] uppercase whitespace-nowrap">01. Country Charm Coffee</p>
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[calc(75%+54px)] text-[#989898] text-[14px] top-[171px] uppercase whitespace-nowrap">{`02. 4th Main Barber & Co.`}</p>
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
      <Group />
      <Btn />
    </div>
  );
}