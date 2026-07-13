import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-js3pazu5gk";
import imgImage14 from "./ad701330b9a892a499a90aea9dc6e75c7c52daad.png";
import imgImage17 from "./ea330f50b9275ae1fc908298dd63d4095eb08e20.png";
import imgImage15 from "./8ae2193dbb10bec7783bfc1948549080c9af139a.png";

// Keep top definitions unchanged...


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

function Btn1() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/contact")}
      className="glow-button-company bg-[#ffa62a] hover:bg-[#ffe62a] active:scale-[0.97] transition-all duration-300 cursor-pointer flex items-center justify-center px-[22px] py-[12px] rounded-[6px]" 
      data-name="btn"
    >
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[16px] font-bold whitespace-nowrap select-none z-10">Contact us</p>
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="btn group">
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
      <MainNav />
    </div>
  );
}

function Graphic({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style} className="absolute content-stretch flex gap-[40px] items-center justify-center left-0 overflow-clip top-[583px] w-[1440px]" data-name="graphic">
      <div className="h-[480px] relative rounded-[6px] shrink-0 w-[768px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImage14} />
      </div>
      <div className="h-[482px] relative rounded-[6px] shrink-0 w-[220px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgImage17} />
      </div>
      <div className="h-[480px] relative rounded-[6px] shrink-0 w-[768px]" data-name="image 15">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
          <div className="absolute bg-white inset-0 rounded-[6px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[6px]">
            <img alt="" className="absolute h-full left-[-1.33%] max-w-none top-[3.38%] w-[102.67%]" src={imgImage15} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(20,20,20,0)] h-[240px] left-1/2 to-[#141414] w-[1440px]" />
    </div>
  );
}

export default function HeroSection({
  subtitle = "Custom Website Design That Drives Growth",
  title = "We create online presences that reach",
  description = "At Hyperion, we specialize in creating bespoke websites designed to help businesses like yours grow. We don't rely on generic templates, and we definitely don't use AI-generated solutions. Every website we build is unique, tailored to meet your business goals and deliver a seamless user experience.",
  isMini = false,
  ctaText = "Talk with us"
}: {
  subtitle?: string;
  title?: string;
  description?: string;
  isMini?: boolean;
  ctaText?: string;
}) {
  const navigate = useNavigate();
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMini) return; // No parallax on mini hero pages to maximize speed

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (subtitleRef.current) subtitleRef.current.style.transform = `translateY(${y * 0.16}px) translateZ(0)`;
          if (titleRef.current) titleRef.current.style.transform = `translateY(${y * 0.12}px) translateZ(0)`;
          if (descRef.current) descRef.current.style.transform = `translateY(${y * 0.08}px) translateZ(0)`;
          if (btnRef.current) btnRef.current.style.transform = `translateY(${y * 0.06}px) translateZ(0)`;
          if (graphicRef.current) graphicRef.current.style.transform = `translateY(${y * 0.03}px) translateZ(0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMini]);

  return (
    <div className="bg-[#141414] relative size-full flex flex-col items-center" data-name="Hero Section">
      <NavbarFull />
      
      <div 
        className={`relative z-20 flex flex-col items-center text-center w-full max-w-[1000px] px-6 ${
          isMini ? "mt-[115px]" : "mt-[180px]"
        } justify-start`}
        data-name="content"
      >
        <p 
          ref={subtitleRef}
          className="relative font-geist-mono font-normal leading-[normal] text-[#989898] text-[16px] uppercase tracking-widest whitespace-nowrap will-change-transform"
        >
          {subtitle}
        </p>
        <h1 
          ref={titleRef}
          className="relative mt-4 font-['Inter_Tight',sans-serif] leading-tight font-normal text-[52px] text-white w-full max-w-[900px] break-words will-change-transform"
        >
          {title}
        </h1>
        
        {!isMini && (
          <>
            <p 
              ref={descRef}
              className="relative mt-6 font-['Inter_Tight',sans-serif] leading-[1.6] text-[#989898] text-[17px] w-full max-w-[720px] break-words will-change-transform"
            >
              {description}
            </p>
            <div 
              ref={btnRef}
              onClick={() => navigate("/contact")}
              className="glow-button-company relative mt-8 bg-[#ffa62a] content-stretch flex items-center justify-center px-[24px] py-[16px] rounded-[6px] cursor-pointer hover:bg-[#ffe62a] transition-colors duration-300 active:scale-[0.97] will-change-transform"
              data-name="btn"
            >
              <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] text-right font-semibold whitespace-nowrap z-10">
                {ctaText}
              </p>
            </div>
          </>
        )}
      </div>

      {!isMini && (
        <div ref={graphicRef} className="will-change-transform absolute top-[583px]">
          <Graphic />
        </div>
      )}
    </div>
  );
}