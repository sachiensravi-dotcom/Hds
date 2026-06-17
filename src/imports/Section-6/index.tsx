import imgRectangle42 from "./d5ffe7fae8a12fbb3cb464abf2b895cfe7132e5e.png";
import imgRectangle43 from "./a5886d4c0c5391756000f8920be8a9afc6b2d0e1.png";

function Main() {
  return (
    <div className="absolute border border-[#3b3b3b] border-solid h-[368px] left-[40px] overflow-clip top-[337px] w-[668px]" data-name="main">
      <div className="absolute h-[320px] left-[23px] top-[23px] w-[240px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle42} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle43} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[287px] not-italic text-[32px] text-white top-[23px] whitespace-nowrap">Gavin D</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[287px] not-italic text-[#989898] text-[16px] top-[145px] w-[356px]">{`Gavin D, the founder of Hyperion Agency, is a visionary entrepreneur dedicated to crafting unique and vibrant online presences for businesses. With a keen focus on creativity and modern design, he ensures that his clients shine in the competitive digital landscape. Gavin's meticulous approach involves collaborating closely with clients to refine their online image, helping them project a more professional appearance.`}</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[1.4] left-[287px] not-italic text-[16px] text-white top-[74px] w-[356px]">Co-Founder</p>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute border border-[#3b3b3b] border-solid h-[368px] left-[calc(50%+12px)] overflow-clip top-[337px] w-[668px]" data-name="main">
      <div className="absolute h-[320px] left-[23px] top-[23px] w-[240px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle42} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle43} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[287px] not-italic text-[32px] text-white top-[23px] whitespace-nowrap">Sachien R</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[287px] not-italic text-[#989898] text-[16px] top-[145px] w-[356px]">{`Sachien R, the founder of Hyperion Agency, is a visionary entrepreneur committed to creating distinctive and dynamic online identities for businesses. With a strong emphasis on creativity and contemporary design, he helps his clients stand out in the competitive digital arena. Sachien's detailed approach includes working closely with clients to enhance their online image, enabling them to present a more polished and professional look.`}</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[1.4] left-[287px] not-italic text-[16px] text-white top-[74px] w-[356px]">Co-Founder</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase whitespace-nowrap">Built on quality</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] w-[651px]">Built by young founders who care deeply about quality</p>
      <div className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[0] left-[calc(50%+12px)] not-italic text-[#989898] text-[16px] top-[131px] w-[668px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">Hyperion Agency was built by young entrepreneurs with a clear belief: businesses should not have to settle for bland, mass-produced websites that fail to represent them properly.</p>
        <p className="leading-[1.4] mb-0">​</p>
        <p className="leading-[1.4]">We bring a modern perspective, strong creative standards, and a hands-on approach to every project. That means sharper execution, more attention to detail, and a genuine investment in helping our clients look more established online.</p>
      </div>
      <Main />
      <Main1 />
    </div>
  );
}