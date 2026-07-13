import { useNavigate } from "react-router";
import svgPaths from "./svg-7jy2cgk51z";

function Btn() {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate("/contact")}
      className="btn-shine-effect bg-[#ffa62a] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[120px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,166,42,0.4)] active:scale-[0.98]" 
      data-name="btn"
    >
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[16px] text-right whitespace-nowrap select-none">Book a Consultation</p>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute left-[40px] top-[373px] w-[740px]" data-name="main">
      {/* Short Dynamic Subtitle */}
      <p className="font-['Inter_Tight',sans-serif] text-[18px] text-[#b3b3b3] leading-[1.6] w-[620px] mb-[32px]">
        We are a dynamic organic growth agency dedicated to building high-performance websites that unlock your business's full potential through strategic design.
      </p>

      {/* CTA Button and Social Proof Avatars */}
      <div className="flex items-center gap-[24px] mb-[40px]">
        <Btn />
        <div className="flex items-center gap-[12px]">
          {/* Overlapping User Avatars */}
          <div className="flex -space-x-[12px]">
            <img src="/barber_owner_portrait.jpg" className="w-[36px] h-[36px] rounded-full border-2 border-[#141414] object-cover" alt="Client 1" />
            <img src="/founder_portrait.jpg" className="w-[36px] h-[36px] rounded-full border-2 border-[#141414] object-cover" alt="Client 2" />
            <img src="/barber_owner_portrait.jpg" className="w-[36px] h-[36px] rounded-full border-2 border-[#141414] object-cover" alt="Client 3" />
          </div>
          <p className="font-['Inter_Tight',sans-serif] text-[13px] text-[#8c8c8c] font-medium leading-none">
            More than <span className="text-white font-semibold">50+ local brands</span> grown with us
          </p>
        </div>
      </div>

      {/* Two Column Feature Cards */}
      <div className="flex gap-[24px] w-full">
        {/* Card 1: Creativity */}
        <div className="flex-1 bg-[#191919]/60 border border-white/5 rounded-[12px] p-[20px]">
          <div className="flex items-center justify-between mb-[12px]">
            <span className="text-[11px] font-geist-mono text-[#ffa62a] uppercase tracking-widest font-bold">01 / Creative</span>
            <span className="w-[6px] h-[6px] rounded-full bg-[#ffa62a]" />
          </div>
          <h4 className="font-['Inter_Tight',sans-serif] text-[16px] text-white font-bold mb-[6px]">Custom Figma Design</h4>
          <p className="font-['Inter_Tight',sans-serif] text-[13px] text-[#8c8c8c] leading-[1.5]">
            100% original designs crafted from scratch to align perfectly with your unique brand identity.
          </p>
        </div>

        {/* Card 2: SEO */}
        <div className="flex-1 bg-[#191919]/60 border border-white/5 rounded-[12px] p-[20px]">
          <div className="flex items-center justify-between mb-[12px]">
            <span className="text-[11px] font-geist-mono text-[#ffa62a] uppercase tracking-widest font-bold">02 / SEO</span>
            <span className="w-[6px] h-[6px] rounded-full bg-[#ffa62a]" />
          </div>
          <h4 className="font-['Inter_Tight',sans-serif] text-[16px] text-white font-bold mb-[6px]">Engineered to Grow</h4>
          <p className="font-['Inter_Tight',sans-serif] text-[13px] text-[#8c8c8c] leading-[1.5]">
            Built-in technical SEO, structured markup, and performance tuning for maximum ranking power.
          </p>
        </div>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute h-[520px] left-[820px] top-[235px] w-[580px] overflow-visible" data-name="main">
      {/* Brand Halos - Orbiting Glowing backdrops */}
      {/* Halo 1: Large Gold Glow backdrop */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#ffa62a]/12 blur-[120px] top-[35px] left-[65px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />

      {/* Halo 2: Thin Rotating Dashed Vector Ring */}
      <div 
        className="absolute border border-dashed border-[#ffa62a]/20 rounded-full animate-[spin_35s_linear_infinite] pointer-events-none"
        style={{
          width: '380px',
          height: '380px',
          left: 'calc(50% - 190px)',
          top: 'calc(50% - 190px)',
        }}
      />

      {/* Halo 3: Double Outline Swaying Vector Ring */}
      <div 
        className="absolute border border-double border-white/5 rounded-full animate-sway-slow pointer-events-none"
        style={{
          width: '460px',
          height: '460px',
          left: 'calc(50% - 230px)',
          top: 'calc(50% - 230px)',
        }}
      />

      {/* 3D Shapes Image Render - Screen blended for seamless page integration */}
      <div className="absolute inset-0 flex items-center justify-center z-10 animate-float-slow">
        <img 
          src="/hero_3d_shapes.jpg" 
          alt="3D Floating Shapes Render" 
          className="w-full h-auto object-contain select-none mix-blend-screen" 
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
      <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[14px] text-right whitespace-nowrap">Follow us on</p>
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
          <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[14px] whitespace-nowrap">GMT-5 | 8:05 AM</p>
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
      <TopNav />
      <MainNav />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Hero Section">
      {/* Brand Tagline Title */}
      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] font-bold leading-[1.15] left-[40px] not-italic text-[56px] text-white top-[205px] w-[750px]">
        Custom Websites Built for Businesses Ready to{" "}
        <span className="relative text-gold-gradient font-bold inline-block">
          Grow
          <span className="absolute -inset-x-3 -inset-y-1 bg-[#ffa62a] opacity-25 blur-2xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        </span>
      </p>
      
      <Main />
      <Main1 />
      
      <p className="[word-break:break-word] absolute font-geist-mono font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[168px] uppercase whitespace-nowrap tracking-wider">The organic growth Web Agency</p>
      
      <LogoMarquee />
      <NavbarFull />
    </div>
  );
}