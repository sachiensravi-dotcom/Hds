import { useNavigate } from "react-router";
import svgPaths from "./svg-7jy2cgk51z";
import imgRectangle from "./0fc5cd55bfcfabe97c24fc66a7c313eb74b63633.png";

function Btn() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/contact")}
      className="bg-[#ffa62a] content-stretch flex items-center justify-center px-[20px] py-[16px] relative rounded-[120px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,166,42,0.4)] active:scale-[0.98]" 
      data-name="btn"
    >
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] text-right whitespace-nowrap select-none">Book a Consultation</p>
    </div>
  );
}

function Btn1() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/works")}
      className="bg-white content-stretch flex items-center justify-center px-[20px] py-[16px] relative rounded-[120px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#eaeaea] hover:scale-[1.04] active:scale-[0.98]" 
      data-name="btn"
    >
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[120px]" />
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#141414] text-[18px] text-right whitespace-nowrap select-none">View Our Work</p>
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[31px] top-[203px]" data-name="btn group">
      <Btn />
      <Btn1 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute border border-[#3b3b3b] border-solid h-[400px] left-[40px] overflow-clip top-[373px] w-[783px]" data-name="main">
      <div className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[0] left-[31px] not-italic text-[20px] text-white top-[31px] w-[719px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`Hyperion Agency designs and builds fully original websites for businesses that want to look sharper, earn trust faster, and convert more attention into opportunity. `}</p>
        <p className="leading-[1.4] mb-0">​</p>
        <p className="leading-[1.4]">No AI-generated websites. No recycled templates. Just custom work built with intention.</p>
      </div>
      <BtnGroup />
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute bg-black h-[400px] left-[calc(58.33%+7px)] overflow-clip top-[373px] w-[553px]" data-name="main">
      <div className="absolute flex items-center justify-center left-[-68px] size-[1042.27px] top-[-139px]">
        <div className="flex-none rotate-[15.84deg]">
          <div className="opacity-70 relative size-[843.92px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-298px] size-[1042.27px] top-[-214px]">
        <div className="flex-none rotate-[15.84deg]">
          <div className="relative size-[843.92px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[387px] left-[calc(50%+0.03px)] top-[248px] w-[663px]">
        <div className="absolute inset-[-62.02%_-36.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1143 867">
            <g filter="url(#filter0_f_1_352)" id="Ellipse 5">
              <ellipse cx="571.5" cy="433.5" fill="var(--fill-0, #FFA62A)" fillOpacity="0.2" rx="331.5" ry="193.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="867" id="filter0_f_1_352" width="1143" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_352" stdDeviation="120" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[187px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 40">
        <g id="Logo">
          <path d={svgPaths.p3c9c4580} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.pbed8500} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p3873e680} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.p7cbf500} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p320e0000} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p44b6200} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p9ccca00} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p18d02100} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p3dc86f20} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p36d11d00} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p11a4200} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p28032e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p1e956500} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[186px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 40">
        <g id="Logo">
          <path d={svgPaths.p22265380} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.p3134c700} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p18924e90} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.pc265100} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p5ca9400} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p4adb800} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p2b8a0200} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p34ebfff2} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p4e2a300} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p15c5b980} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p2578bb00} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p3590e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p243d1dc0} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[186px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 40">
        <g id="Logo">
          <path d={svgPaths.p22265380} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.p3134c700} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p18924e90} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.pc265100} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p5ca9400} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p4adb800} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p2b8a0200} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p34ebfff2} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p4e2a300} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p15c5b980} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p2578bb00} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p3590e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p243d1dc0} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[186px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 40">
        <g id="Logo">
          <path d={svgPaths.p22265380} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.p3134c700} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p18924e90} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.pc265100} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p5ca9400} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p4adb800} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p2b8a0200} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p34ebfff2} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p4e2a300} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p15c5b980} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p2578bb00} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p3590e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p243d1dc0} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[187px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 40">
        <g id="Logo">
          <path d={svgPaths.p3c9c4580} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.pbed8500} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p3873e680} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.p7cbf500} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p320e0000} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p44b6200} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p9ccca00} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p18d02100} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p3dc86f20} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p36d11d00} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p11a4200} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p28032e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p1e956500} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[187px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 40">
        <g id="Logo">
          <path d={svgPaths.p3c9c4580} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.pbed8500} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p3873e680} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.p7cbf500} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p320e0000} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p44b6200} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p9ccca00} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p18d02100} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p3dc86f20} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p36d11d00} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p11a4200} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p28032e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p1e956500} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[187px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 40">
        <g id="Logo">
          <path d={svgPaths.p3c9c4580} fill="var(--fill-0, #989898)" id="Vector" />
          <path d={svgPaths.pbed8500} fill="var(--fill-0, #989898)" id="Vector_2" />
          <path d={svgPaths.p3873e680} fill="var(--fill-0, #989898)" id="Vector_3" />
          <path d={svgPaths.p7cbf500} fill="var(--fill-0, #989898)" id="Vector_4" />
          <path d={svgPaths.p320e0000} fill="var(--fill-0, #989898)" id="Vector_5" />
          <path d={svgPaths.p44b6200} fill="var(--fill-0, #989898)" id="Vector_6" />
          <path d={svgPaths.p9ccca00} fill="var(--fill-0, #989898)" id="Vector_7" />
          <path d={svgPaths.p18d02100} fill="var(--fill-0, #989898)" id="Vector_8" />
          <path d={svgPaths.p3dc86f20} fill="var(--fill-0, #989898)" id="Vector_9" />
          <path d={svgPaths.p36d11d00} fill="var(--fill-0, #989898)" id="Vector_10" />
          <path d={svgPaths.p11a4200} fill="var(--fill-0, #989898)" id="Vector_11" />
          <path d={svgPaths.p28032e00} fill="var(--fill-0, #989898)" id="Vector_12" />
          <path d={svgPaths.p1e956500} fill="var(--fill-0, #989898)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function LogoMarquee() {
  return (
    <div className="absolute overflow-hidden left-[40px] top-[813px] w-[1360px] h-[40px] flex items-center gap-[64px]" data-name="logo marquee">
      <div className="flex gap-[64px] shrink-0 min-w-full justify-around animate-marquee">
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo5 />
        <Logo6 />
      </div>
      <div className="flex gap-[64px] shrink-0 min-w-full justify-around animate-marquee" aria-hidden="true">
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo5 />
        <Logo6 />
      </div>
    </div>
  );
}

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
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/")}
      className="h-[20px] relative shrink-0 w-[131.175px] cursor-pointer" 
      data-name="HYPERION"
    >
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
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/services")}
      className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] text-white" 
      data-name="dropdown"
    >
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-inherit whitespace-nowrap select-none">Services</p>
      <GlyphsChevronBold />
    </div>
  );
}

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="menu">
      <p 
        onClick={() => navigate("/works")}
        className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none"
      >
        Works
      </p>
      <Dropdown />
      <p 
        onClick={() => navigate("/case-studies")}
        className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none"
      >
        Case studies
      </p>
      <p 
        onClick={() => navigate("/blogs")}
        className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap cursor-pointer transition-colors duration-250 hover:text-[#ffa62a] select-none"
      >
        Blogs
      </p>
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

function Btn2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 size-[46px] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.18)] hover:scale-[1.05] active:scale-[0.96] text-white hover:text-[#ffa62a]" data-name="btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TablerMoon />
    </div>
  );
}

function Btn3() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/contact")}
      className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.18)] hover:scale-[1.03] active:scale-[0.98] text-white hover:text-[#ffa62a]" 
      data-name="btn"
    >
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-right text-inherit whitespace-nowrap select-none">Contact us</p>
    </div>
  );
}

function BtnGroup1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn group">
      <Btn2 />
      <Btn3 />
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="nav_right">
      <Menu />
      <BtnGroup1 />
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

export default function HeroSection() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Hero Section">
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[56px] text-white top-[205px] w-[668px]">Custom Websites Built for Businesses Ready to Grow</p>
      <Main />
      <Main1 />
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[168px] uppercase whitespace-nowrap">The organic growth Web Agency</p>
      <LogoMarquee />
      <NavbarFull />
    </div>
  );
}