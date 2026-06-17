import imgRectangle3 from "./86ed76ee86ae8f8c60a2bd7b738129117ab7cb62.png";

function RightSide() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative self-stretch shrink-0" data-name="right side">
      <div className="h-[113px] relative shrink-0 w-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter_Tight:Medium',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] w-[88px]">
        <p className="leading-[1.4]">View project</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[64px] items-start px-[40px] py-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#141414] text-[20px] uppercase w-[207px]">Autotraxs</p>
        <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#525252] text-[16px] uppercase w-[200px]">New and Used Auto Directory</p>
        <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#525252] text-[16px] w-[400px]">Autotraxs is an online directory with over a thousand of new and used cars being updated daily. Along with different estimate and calculation features to help users find their dream car in just a few clicks.</p>
        <RightSide />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="item">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start px-[40px] py-[32px] relative size-full">
        <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] uppercase w-[200px]">New and Used Auto Directory</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-[400px]">Autotraxs is an online directory with over a thousand of new and used cars being updated daily. Along with different estimate and calculation features to help users find their dream car in just a few clicks.</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="item">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start px-[40px] py-[32px] relative size-full">
        <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] uppercase w-[200px]">New and Used Auto Directory</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-[400px]">Autotraxs is an online directory with over a thousand of new and used cars being updated daily. Along with different estimate and calculation features to help users find their dream car in just a few clicks.</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="item">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[40px] py-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">View all our portfolio →</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[263px] w-[1440px]" data-name="list">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase whitespace-nowrap">Our portfolio</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] whitespace-nowrap">Website built for and by human</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[calc(58.33%+7px)] not-italic text-[#989898] text-[16px] top-[120px] w-[553px]">Every business has a different story, a different audience, and a different standard for how it should show up online. Our work reflects that. Explore our projects and see how Hyperion builds websites that are designed to stand out and built to perform.</p>
      <List />
    </div>
  );
}