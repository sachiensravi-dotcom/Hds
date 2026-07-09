import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-v8mhxq91vx";

// Import laptop mockup images
import imgWhitewright from "./whitewright_laptop.png";
import imgTexasSun from "./texas_sun_laptop.png";
import imgCoffee from "./coffee_laptop.png";
import imgBruceNorwood from "./bruce_norwood_laptop.png";
import imgBarber from "./barber_laptop.png";

// Project database
const rp = [
  {
    name: "Whitewright",
    desc: "Chamber of Commerce & Area Guide",
    year: "2025",
    url: "https://www.whitewright.org/",
    image: imgWhitewright
  },
  {
    name: "Texas Sun",
    desc: "Premium Roofing & Solar Installation",
    year: "2025",
    url: "https://www.texas-sun.com/",
    image: imgTexasSun
  },
  {
    name: "Country Charm Coffee",
    desc: "Local Coffee Roastery & Cafe Website",
    year: "2024",
    url: "https://www.countrycharmcoffee.com/",
    image: imgCoffee
  },
  {
    name: "Bruce Norwood",
    desc: "Commercial Real Estate Platform",
    year: "2024 - 2025",
    url: "https://bruce-norwoods-website.webflow.io/",
    image: imgBruceNorwood
  },
  {
    name: "4th Main Barber & Co.",
    desc: "Premium Barber Shop & Booking System",
    year: "2024",
    url: "https://4thandmainbarber.com/",
    image: imgBarber
  }
];

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

function Btn1() {
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

function BtnGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn group">
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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px] z-50" data-name="navbar full">
      <TopNav />
      <MainNav />
    </div>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="relative size-full overflow-hidden bg-[#141414]" data-name="Hero Section">
      {/* Background crossfading laptop mockups */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        {rp.map((project, idx) => (
          <img
            key={project.name + idx}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              activeIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
            }`}
            src={project.image}
          />
        ))}
        {/* Subtle blur overlay */}
        <div className="absolute bg-[rgba(15,15,15,0.65)] inset-0 backdrop-blur-[2px]" />
      </div>

      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] leading-[normal] left-[40px] not-italic text-[56px] text-white top-[205px] whitespace-nowrap z-10">
        Our works
      </p>
      <p className="[word-break:break-word] absolute font-geist-mono font-medium leading-[normal] left-[40px] text-[#989898] text-[16px] top-[168px] uppercase whitespace-nowrap tracking-wide z-10">
        Built for Growth
      </p>
      
      <NavbarFull />

      {/* Dynamic list rows */}
      <div className="absolute top-[280px] left-[40px] w-[1360px] flex flex-col z-10">
        {rp.map((project, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={project.name}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => {
                if (project.url.startsWith("/")) {
                  navigate(project.url);
                } else {
                  window.open(project.url, "_blank");
                }
              }}
              className={`content-stretch flex gap-[64px] items-center p-[20px_24px] w-full cursor-pointer transition-all duration-300 border-b border-[rgba(255,255,255,0.15)] ${
                isActive ? "bg-white text-[#141414] rounded-[4px]" : "text-white bg-transparent"
              }`}
              data-name="item"
            >
              {/* Project Name */}
              <p className={`font-geist-mono font-semibold leading-[normal] text-[20px] uppercase w-[320px] transition-colors duration-300 ${
                isActive ? "text-[#141414]" : "text-white"
              }`}>
                {project.name}
              </p>

              {/* Project Description */}
              <p className={`flex-grow font-['Inter_Tight',sans-serif] leading-[1.4] text-[16px] uppercase transition-colors duration-300 ${
                isActive ? "text-[#141414]" : "text-[#989898]"
              }`}>
                {project.desc}
              </p>

              {/* Visit Link (only if active) */}
              {isActive && (
                <p className="font-['Inter_Tight',sans-serif] leading-[1.4] text-[#141414] text-[16px] uppercase font-bold whitespace-nowrap hover:underline decoration-2">
                  Visit website →
                </p>
              )}

              {/* Project Year */}
              <p className={`font-['Inter_Tight',sans-serif] leading-[1.4] text-[16px] uppercase whitespace-nowrap transition-colors duration-300 ${
                isActive ? "text-[#525252]" : "text-[#989898]"
              }`}>
                {project.year}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}