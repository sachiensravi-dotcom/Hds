import svgPaths from "./svg-v8mhxq91vx";
import imgHeroSection from "./86ed76ee86ae8f8c60a2bd7b738129117ab7cb62.png";

function RiFacebookFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:facebook-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:facebook-fill">
          <path d={svgPaths.p2a17ae60} fill="var(--fill-0, #989898)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiInstagramFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:instagram-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:instagram-fill">
          <path d={svgPaths.p33300600} fill="var(--fill-0, #989898)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocilaMedia() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="socila media">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[14px] text-right whitespace-nowrap">Follow us on</p>
      <RiFacebookFill />
      <RiInstagramFill />
    </div>
  );
}

function TopNav() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(20,20,20,0.5)] relative shrink-0 w-full" data-name="top nav">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[14px] whitespace-nowrap">GMT-5 | 8:05 AM</p>
          <SocilaMedia />
        </div>
      </div>
    </div>
  );
}

function Hyperion() {
  return (
    <div className="h-[20px] relative shrink-0 w-[131.175px]" data-name="HYPERION">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.175 20">
        <g id="HYPERION">
          <path d={svgPaths.pae2b200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p10eca630} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd61800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e0bf70} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b1eab00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1b895480} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3077a180} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1524c500} fill="url(#paint0_linear_1_366)" id="Ellipse 6 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_366" x1="102" x2="102" y1="20" y2="0">
            <stop stopColor="#FFE62A" />
            <stop offset="1" stopColor="#FFA62A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GlyphsChevronBold() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="glyphs:chevron-bold">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="glyphs:chevron-bold">
          <path d={svgPaths.p2334ce00} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] text-white" data-name="dropdown">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-inherit whitespace-nowrap select-none">Services</p>
      <GlyphsChevronBold />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="menu">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none">Works</p>
      <Dropdown />
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none">Industries</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none">Case studies</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none">Blogs</p>
    </div>
  );
}

function TablerMoon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler:moon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:moon">
          <path d={svgPaths.p17084400} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 size-[46px] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.18)] hover:scale-[1.05] active:scale-[0.96] text-white hover:text-[#ffa62a]" data-name="btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TablerMoon />
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.18)] hover:scale-[1.03] active:scale-[0.98] text-white hover:text-[#ffa62a]" data-name="btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-right text-inherit whitespace-nowrap select-none">Contact us</p>
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn group">
      <Btn />
      <Btn1 />
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="nav_right">
      <Menu />
      <BtnGroup />
    </div>
  );
}

function MainNav() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(20,20,20,0.5)] relative shrink-0 w-full" data-name="main nav">
      <div aria-hidden className="absolute border-[#3b3b3b] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[12px] relative size-full">
          <Hyperion />
          <NavRight />
        </div>
      </div>
    </div>
  );
}

function NavbarFull() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]" data-name="navbar full">
      <TopNav />
      <MainNav />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[297px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[363px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#141414] text-[20px] uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[#141414] text-[16px] uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#141414] text-[16px] uppercase whitespace-nowrap">Visit website →</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#141414] text-[16px] uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[429px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[495px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[561px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[627px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[693px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-start left-[40px] p-[20px] top-[759px] w-[1360px]" data-name="item">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist_Mono:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white uppercase w-[207px]">Autotraxs</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-white uppercase">New and Used Auto Directory</p>
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">2025 - 2026</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative size-full" data-name="Hero Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-[rgba(20,20,20,0.3)] inset-0" />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[calc(12.5%-140px)] not-italic text-[56px] text-white top-[205px] whitespace-nowrap">Our works</p>
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[168px] uppercase whitespace-nowrap">Built for Growth</p>
      <NavbarFull />
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}