import { useNavigate } from "react-router";
import svgPaths from "./svg-7jy2cgk51z";
import imgRectangle from "./0fc5cd55bfcfabe97c24fc66a7c313eb74b63633.png";

function Btn() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/contact")}
      className="btn-shine-effect bg-[#ffa62a] content-stretch flex items-center justify-center px-[20px] py-[16px] relative rounded-[120px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,166,42,0.4)] active:scale-[0.98]" 
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
    <div className="absolute border border-[#3b3b3b] border-solid h-[400px] left-[40px] overflow-clip top-[373px] w-[783px] animate-border-glow" data-name="main">
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
    <div className="absolute bg-[#111111] border border-[#3b3b3b] border-solid h-[400px] left-[calc(58.33%+7px)] overflow-clip top-[373px] w-[553px] rounded-[8px] animate-float-hero-card" data-name="main">
      {/* Background Halo 1: Pulsing Gold Glow (Top Left) */}
      <div className="absolute w-[240px] h-[240px] rounded-full bg-[#ffa62a]/10 blur-3xl -top-[20px] -left-[20px] animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />

      {/* Background Halo 2: Pulsing Amber Glow (Bottom Right) */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#ffa62a]/8 blur-3xl -bottom-[10px] -right-[10px] animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />

      {/* Background Halo 3: Thin Rotating Dashed Vector Ring */}
      <div 
        className="absolute border border-dashed border-[#ffa62a]/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"
        style={{
          width: '340px',
          height: '340px',
          left: 'calc(50% - 170px)',
          top: 'calc(50% - 170px)',
        }}
      />

      {/* Background Halo 4: Double Outline Swaying Vector Ring */}
      <div 
        className="absolute border border-double border-white/5 rounded-full animate-sway-slow pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          left: 'calc(50% - 210px)',
          top: 'calc(50% - 210px)',
        }}
      />

      {/* Wireframe Illustration - Inverted to render as clean white-on-dark lines */}
      <div className="absolute inset-0 flex items-center justify-center p-[20px] z-10">
        <img 
          src="/hero_notion_illustration.jpg" 
          alt="Web Wireframing Illustration" 
          className="w-full h-auto object-contain rounded-[6px] select-none opacity-85 hover:opacity-100 transition-opacity duration-300 filter invert-[0.9] brightness-[1.25] contrast-[1.05]" 
        />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center shrink-0 h-[80px]" data-name="Logo">
      <img src="/logo_whitewright.png" className="h-[52px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none mix-blend-screen" alt="Whitewright" />
    </div>
  );
}

function Logo1() {
  return (
    <div className="flex items-center justify-center shrink-0 h-[80px]" data-name="Logo">
      <img src="/logo_texas_sun.png" className="h-[52px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none" alt="Texas Sun" />
    </div>
  );
}

function Logo2() {
  return (
    <div className="flex items-center justify-center shrink-0 h-[80px]" data-name="Logo">
      <img src="/logo_coffee.png" className="h-[60px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none" alt="Country Charm Coffee" />
    </div>
  );
}

function Logo3() {
  return (
    <div className="flex items-center justify-center shrink-0 h-[80px]" data-name="Logo">
      <img src="/logo_remax.png" className="h-[48px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none brightness-0 invert" alt="Remax" />
    </div>
  );
}

function Logo4() {
  return (
    <div className="flex items-center justify-center shrink-0 h-[80px]" data-name="Logo">
      <img src="/logo_barber.png" className="h-[60px] w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none mix-blend-screen" alt="4th Main Barber" />
    </div>
  );
}

function LogoMarquee() {
  return (
    <div className="absolute overflow-hidden left-[40px] top-[793px] w-[1360px] h-[80px] flex items-center gap-[80px]" data-name="logo marquee">
      <div className="flex gap-[80px] shrink-0 animate-marquee">
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
      </div>
      <div className="flex gap-[80px] shrink-0 animate-marquee" aria-hidden="true">
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
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

function Btn3() {
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

function BtnGroup1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="btn group">
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
      <MainNav />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Hero Section">
      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] font-bold leading-[1.15] left-[40px] not-italic text-[64px] text-white top-[195px] w-[750px]">
        Build something{" "}
        <span className="relative text-gold-gradient font-bold inline-block">
          beautiful
          <span className="absolute -inset-x-4 -inset-y-1 bg-[#ffa62a] opacity-30 blur-2xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4.5s' }} />
        </span>
        .
      </p>
      <Main />
      <Main1 />
      <p className="[word-break:break-word] absolute font-geist-mono font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[168px] uppercase whitespace-nowrap">The organic growth Web Agency</p>
      <LogoMarquee />
      <NavbarFull />
    </div>
  );
}