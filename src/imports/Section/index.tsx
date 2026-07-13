import svgPaths from "./svg-jhwcgkx0x6";
import TiltCard from "../TiltCard";

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p18167500} id="Vector" stroke="var(--stroke-0, #462C07)" strokeWidth="1.5" />
            <path d={svgPaths.pe3fe700} id="Vector_2" stroke="var(--stroke-0, #462C07)" strokeWidth="1.5" />
            <path d={svgPaths.p2ff2d880} id="Vector_3" stroke="var(--stroke-0, #462C07)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsCustomize() {
  return (
    <div className="absolute left-[8px] overflow-clip size-[24px] top-[8px]" data-name="hugeicons:customize">
      <Group />
    </div>
  );
}

function IcWrap() {
  return (
    <div className="bg-[#ffa62a] overflow-clip relative rounded-[4px] shrink-0 size-[40px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#ffe62a] group-hover:shadow-[0_0_15px_rgba(255,166,42,0.4)]" data-name="ic-wrap">
      <HugeiconsCustomize />
    </div>
  );
}

function Main() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="main">
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-white w-full">Custom design</p>
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#989898] text-[16px] w-full">Original websites built around your brand, not adapted from a generic template.</p>
    </div>
  );
}

function Item() {
  return (
    <TiltCard 
      max={6}
      scale={1.02}
      className="flex-[1_0_0] min-w-px relative group cursor-pointer bg-[rgba(255,255,255,0.01)] border border-[#2d2d2d] rounded-[8px] p-[24px] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold" 
      data-name="item"
    >
      <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative size-full">
        <IcWrap />
        <Main />
      </div>
    </TiltCard>
  );
}

function SimpleIconsDevelopmentcontainers() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="simple-icons:developmentcontainers">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_396)" id="simple-icons:developmentcontainers">
          <path d={svgPaths.p3c197c80} fill="var(--fill-0, #462C07)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_396">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IcWrap1() {
  return (
    <div className="bg-[#ffa62a] overflow-clip relative rounded-[4px] shrink-0 size-[40px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#ffe62a] group-hover:shadow-[0_0_15px_rgba(255,166,42,0.4)]" data-name="ic-wrap">
      <SimpleIconsDevelopmentcontainers />
    </div>
  );
}

function Main1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="main">
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-white w-full">Professional development</p>
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#989898] text-[16px] w-full">Clean builds, smooth user experience, and modern site structure that supports performance.</p>
    </div>
  );
}

function Item1() {
  return (
    <TiltCard 
      max={6}
      scale={1.02}
      className="flex-[1_0_0] min-w-px relative group cursor-pointer bg-[rgba(255,255,255,0.01)] border border-[#2d2d2d] rounded-[8px] p-[24px] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold" 
      data-name="item"
    >
      <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative size-full">
        <IcWrap1 />
        <Main1 />
      </div>
    </TiltCard>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.09%_8.33%_-3.46%_4.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8906 23.8488">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2a448780} fill="var(--fill-0, #462C07)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteSearchLine() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="mingcute:search-line">
      <Group1 />
    </div>
  );
}

function IcWrap2() {
  return (
    <div className="bg-[#ffa62a] overflow-clip relative rounded-[4px] shrink-0 size-[40px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#ffe62a] group-hover:shadow-[0_0_15px_rgba(255,166,42,0.4)]" data-name="ic-wrap">
      <MingcuteSearchLine />
    </div>
  );
}

function Main2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="main">
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-white w-full">Search-ready foundation</p>
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[#989898] text-[16px] w-full">SEO and AEO considerations built into the website so your visibility can grow with it.</p>
    </div>
  );
}

function Item2() {
  return (
    <TiltCard 
      max={6}
      scale={1.02}
      className="flex-[1_0_0] min-w-px relative group cursor-pointer bg-[rgba(255,255,255,0.01)] border border-[#2d2d2d] rounded-[8px] p-[24px] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold" 
      data-name="item"
    >
      <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative size-full">
        <IcWrap2 />
        <Main2 />
      </div>
    </TiltCard>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[40px] top-[238px] w-[1360px]" data-name="list">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[80px] uppercase whitespace-nowrap">The complete website package</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[117px] whitespace-nowrap">Websites first. <span className="text-gold-gradient font-semibold">Growth</span> built in.</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[calc(58.33%+7px)] not-italic text-[#989898] text-[16px] top-[80px] w-[553px]">A strong website is not just about appearance. It is a business asset. It should support how your brand is perceived, how users move through your content, and how your business gets found online. We focus on custom websites that are built with performance, usability, clarity, and long-term visibility in mind. As your business grows, your site should be able to support that growth.</p>
      <List />
    </div>
  );
}