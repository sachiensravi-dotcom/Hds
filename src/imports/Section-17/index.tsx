import svgPaths from "./svg-beszt3j2ew";
import { Link, useNavigate } from "react-router";

function Hyperion() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[115px] w-[128px]" data-name="HYPERION">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 20">
        <g id="HYPERION">
          <path d={svgPaths.p670400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30debb00} fill="var(--fill-0, #FFA62A)" id="Vector_2" />
          <path d={svgPaths.p10eca630} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1cd61800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1e0bf70} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2b1eab00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1b895480} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3077a180} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Hyperion1() {
  return (
    <div className="absolute h-[212px] left-[40px] top-[427px] w-[1360px]" data-name="HYPERION">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 212">
        <g id="HYPERION">
          <path d={svgPaths.p28ac100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p15ab23c0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p31d5ef00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pfc82480} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3d96fc00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3be97472} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2e330800} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3ad7e700} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute h-[212px] left-[40px] top-[427px] w-[1360px]" data-name="Mask group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 212">
        <g id="Mask group">
          <mask height="212" id="mask0_1_475" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1360" x="0" y="0">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p9b68800} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p2094e6f2} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37199c00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p3e761580} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p346bc580} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p39b2ad00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p8cde380} fill="var(--fill-0, white)" />
              <path d={svgPaths.p339b200} fill="var(--fill-0, white)" />
            </g>
          </mask>
          <g mask="url(#mask0_1_475)">
            <path d={svgPaths.p2b8cdb00} fill="url(#paint0_linear_1_475)" id="Ellipse 3 (Stroke)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_475" x1="1025" x2="1025" y1="-26" y2="1332">
            <stop stopColor="#FFE62A" />
            <stop offset="0.0975598" stopColor="#FFA62A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Section() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      {/* Top Contact Info */}
      <p className="absolute leading-[normal] left-[39px] not-italic text-[#989898] text-[16px] top-[24px] whitespace-nowrap">
        Sachien R:{" "}
        <a href="tel:9724397854" className="hover:text-white transition-colors duration-300">
          (972) 439-7854
        </a>
      </p>

      <p className="absolute leading-[normal] left-[calc(91.67%+80px)] -translate-x-full not-italic text-[#989898] text-[16px] text-right top-[24px] whitespace-nowrap">
        <a href="mailto:info@gohds.co" className="hover:text-white transition-colors duration-300">
          info@gohds.co
        </a>
      </p>

      {/* Navigation Column */}
      <p 
        onClick={() => navigate("/")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(41.67%+55px)] not-italic text-[24px] text-white top-[153px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Home
      </p>
      <p 
        onClick={() => navigate("/works")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(41.67%+55px)] not-italic text-[#8f8f8f] text-[24px] top-[198px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Portfolio
      </p>
      <p 
        onClick={() => navigate("/services")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(41.67%+55px)] not-italic text-[#8f8f8f] text-[24px] top-[243px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Services
      </p>
      <p 
        onClick={() => navigate("/blogs")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(41.67%+55px)] not-italic text-[#8f8f8f] text-[24px] top-[288px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Blog
      </p>

      {/* Services Column */}
      <p 
        onClick={() => navigate("/services/website")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(58.33%+27px)] not-italic text-[#8f8f8f] text-[24px] top-[153px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Custom website
      </p>
      <p 
        onClick={() => navigate("/services/smm")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(58.33%+27px)] not-italic text-[#8f8f8f] text-[24px] top-[198px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        SMM & Ads
      </p>
      <p 
        onClick={() => navigate("/services/website")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(58.33%+27px)] not-italic text-[#8f8f8f] text-[24px] top-[243px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Web application
      </p>
      <p 
        onClick={() => navigate("/services/seo")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(58.33%+27px)] not-italic text-[#8f8f8f] text-[24px] top-[288px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        SEO & AEO
      </p>

      {/* CRM Suite Column */}
      <p 
        onClick={() => navigate("/contact")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(75%+79px)] not-italic text-[#8f8f8f] text-[24px] top-[153px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        GHL CRM Setup
      </p>
      <p 
        onClick={() => navigate("/contact")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(75%+79px)] not-italic text-[#8f8f8f] text-[24px] top-[198px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        SMS & Email
      </p>
      <p 
        onClick={() => navigate("/contact")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(75%+79px)] not-italic text-[#8f8f8f] text-[24px] top-[243px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Calendar Booking
      </p>
      <p 
        onClick={() => navigate("/contact")}
        className="[word-break:break-word] absolute leading-[normal] left-[calc(75%+79px)] not-italic text-[#8f8f8f] text-[24px] top-[288px] whitespace-nowrap cursor-pointer hover:text-white transition-colors duration-300"
      >
        Review Automation
      </p>

      {/* Dividers */}
      <div className="absolute h-0 left-[40px] top-[67px] w-[1360px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1">
            <line id="Line 11" stroke="var(--stroke-0, #3B3B3B)" x2="1360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[379px] w-[1360px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1">
            <line id="Line 11" stroke="var(--stroke-0, #3B3B3B)" x2="1360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-px w-[1360px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1">
            <line id="Line 11" stroke="var(--stroke-0, #3B3B3B)" x2="1360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      <Hyperion />
      <Hyperion1 />
      <MaskGroup />

      {/* Slogans and Headers */}
      <p className="footer-slogan [word-break:break-word] absolute font-normal leading-[1.4] right-[calc(66.67%+440px)] text-[16px] text-white top-[159px] translate-x-full uppercase whitespace-nowrap">
        More than websites. Your engine for growth.
      </p>
      <p className="[word-break:break-word] absolute font-normal leading-[1.4] right-[calc(41.67%+185px)] text-[16px] text-white top-[115px] translate-x-full uppercase whitespace-nowrap font-bold">
        Navigation
      </p>
      <p className="[word-break:break-word] absolute font-normal leading-[1.4] right-[calc(33.33%+93px)] text-[16px] text-white top-[115px] translate-x-full uppercase whitespace-nowrap font-bold">
        Services
      </p>
      <p className="[word-break:break-word] absolute font-normal leading-[1.4] right-[calc(8.33%+161px)] text-[16px] text-white top-[115px] translate-x-full uppercase whitespace-nowrap font-bold">
        CRM SUITE
      </p>

      {/* Bottom Copyright and Compliance links */}
      <div className="absolute left-[40px] top-[298px] flex items-center gap-6 text-[#989898] text-[16px] font-['Inter_Tight',sans-serif] whitespace-nowrap">
        <span>@2024-2026. Hyperion Digital Solutions. All Rights Reserved.</span>
        <span className="text-[#3B3B3B]">|</span>
        <Link to="/privacy" className="hover:text-white transition-colors duration-200">
          Privacy Policy
        </Link>
        <span className="text-[#3B3B3B]">|</span>
        <Link to="/terms" className="hover:text-white transition-colors duration-200">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}