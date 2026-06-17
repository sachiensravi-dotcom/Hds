import imgRectangle10 from "./d5423702c39893f2ac8b4c85348edf99a8f1ed10.png";

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <div className="absolute h-[246px] left-[40px] top-[255px] w-[437px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
      </div>
      <div className="absolute h-[246px] left-[calc(33.33%+22px)] top-[255px] w-[437px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
      </div>
      <div className="absolute h-[246px] left-[calc(66.67%+3px)] top-[255px] w-[437px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle10} />
      </div>
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase w-[96px]">Blog</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] w-[651px]">{`News & Insights`}</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[20px] text-white top-[517px] w-[437px]">Why Webflow is our selected tech for website</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[normal] left-[calc(33.33%+22px)] not-italic text-[20px] text-white top-[517px] w-[437px]">Why Webflow is our selected tech for website</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[normal] left-[calc(66.67%+3px)] not-italic text-[20px] text-white top-[517px] w-[437px]">Why Webflow is our selected tech for website</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[40px] not-italic text-[#989898] text-[16px] top-[553px] w-[405px]">It’s more important on who the builder is. But Webflow definitely has its edges as we will explain in this article.</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[calc(33.33%+22px)] not-italic text-[#989898] text-[16px] top-[553px] w-[405px]">It’s more important on who the builder is. But Webflow definitely has its edges as we will explain in this article.</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[calc(66.67%+3px)] not-italic text-[#989898] text-[16px] top-[553px] w-[405px]">It’s more important on who the builder is. But Webflow definitely has its edges as we will explain in this article.</p>
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] left-[calc(83.33%+46px)] text-[16px] text-white top-[176px] underline uppercase whitespace-nowrap">View all blogs →</p>
    </div>
  );
}