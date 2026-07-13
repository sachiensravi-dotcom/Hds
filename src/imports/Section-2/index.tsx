import svgPaths from "./svg-my23cdci1x";
import imgImage10 from "./44c8f3d7cdf98586f90269f9bf5135a49631a0c8.png";
import imgPexelsPhotoByThirdman from "./ec24980d043f99084e3e65e54bd1c0f3d0b423dc.png";

function Main() {
  return (
    <div className="absolute border border-[#3b3b3b] border-solid h-[393px] left-[40px] overflow-clip top-[255px] w-[553px]" data-name="main">
      <div className="absolute h-[229px] left-[-1px] top-[163px] w-[553px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute bg-gradient-to-b from-[#141414] h-[229px] left-[-1px] to-[rgba(20,20,20,0)] top-[163px] w-[553px]" />
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[31px] not-italic text-[#989898] text-[18px] top-[31px] w-[489px]">Too many businesses end up with websites that look polished at a glance but feel forgettable in practice. They rely on generic layouts, predictable messaging, and AI-generated shortcuts that make every brand start to look the same.</p>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute border border-[#3b3b3b] border-solid h-[393px] left-[calc(41.67%+17px)] overflow-clip top-[255px] w-[783px]" data-name="main">
      <div className="-translate-x-1/2 absolute left-[calc(50%+298.5px)] size-[406px] top-[2px]" data-name="Ellipse 3 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 406 406">
          <path d={svgPaths.p30bb1180} fill="url(#paint0_linear_1_417)" id="Ellipse 3 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_417" x1="203" x2="203" y1="0" y2="406">
              <stop stopColor="#FFE62A" />
              <stop offset="0.449794" stopColor="#FFA62A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[426px] left-[383px] top-[-34px] w-[539px]" data-name="Pexels Photo by Thirdman">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.06%] left-[-18.63%] max-w-none top-[-0.03%] w-[118.63%]" src={imgPexelsPhotoByThirdman} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#141414] h-[393px] left-[383px] to-[rgba(20,20,20,0)] top-[-1px] w-[157px]" />
      <div className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[0] left-[31px] not-italic text-[#989898] text-[18px] top-[31px] w-[400px] whitespace-pre-wrap">
        <p className="font-['Inter_Tight:SemiBold',sans-serif] leading-[1.4] mb-0">Hyperion takes a different approach.</p>
        <p className="leading-[1.4] mb-0">​</p>
        <p className="leading-[1.4]">We build websites from the ground up with real thought behind the structure, messaging, design, and user journey. The result is a website that feels more credible, more distinct, and more aligned with the actual business it represents.</p>
      </div>
      <div className="[word-break:break-word] absolute font-geist-mono font-semibold leading-[0] left-[31px] text-[#ffa62a] text-[16px] top-[230px] uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">Originality is not an extra.</p>
        <p className="leading-[normal]">It is the standard.</p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-geist-mono leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase whitespace-nowrap tracking-widest">What makes us different</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] whitespace-nowrap">No AI-generated websites. No generic output.</p>
      <Main />
      <Main1 />
    </div>
  );
}