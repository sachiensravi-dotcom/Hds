import TiltCard from "../TiltCard";
import imgFounder from "./founder_portrait.jpg";

function FounderCard() {
  return (
    <TiltCard 
      max={5}
      scale={1.01}
      className="absolute border border-[#3b3b3b] border-solid h-[410px] left-[386px] overflow-clip top-[337px] w-[668px] rounded-[6px] bg-[rgba(20,20,20,0.6)] backdrop-blur-sm glow-card-gold transition-all duration-300 hover:border-[#ffa62a] cursor-pointer" 
      data-name="main"
    >
      <div className="absolute h-[320px] left-[23px] top-[45px] w-[240px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px] overflow-hidden">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="Sachien R" className="absolute inset-0 object-cover size-full" src={imgFounder} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[287px] not-italic text-[32px] text-white top-[23px] whitespace-nowrap">
        Sachien R
      </p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[1.4] left-[287px] not-italic text-[16px] text-[#989898] top-[65px] w-[356px] font-semibold">
        Founder
      </p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-[287px] not-italic text-[#e0e0e0] text-[16px] top-[115px] w-[356px]">
        Sachien R, the founder of Hyperion Agency, is a visionary entrepreneur committed to creating distinctive and dynamic online identities for businesses. With a strong emphasis on creativity and contemporary design, he helps his clients stand out in the competitive digital arena. Sachien's detailed approach includes working closely with clients to enhance their online image, enabling them to present a more polished and professional look.
      </p>
    </TiltCard>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full overflow-hidden" data-name="Section">
      {/* Golden Blur Backdrops */}
      <div className="absolute left-[80px] top-[280px] w-[500px] h-[450px] bg-halo-gold pointer-events-none opacity-25 mix-blend-screen" />
      <div className="absolute right-[80px] top-[280px] w-[500px] h-[450px] bg-halo-yellow pointer-events-none opacity-20 mix-blend-screen" />

      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase whitespace-nowrap font-medium tracking-wide">
        Built on quality
      </p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] w-[651px]">
        Built by a young founder who cares deeply about <span className="font-bold text-gold-gradient">quality</span>
      </p>
      <div className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[0] left-[calc(50%+12px)] not-italic text-[#e0e0e0] text-[16px] top-[131px] w-[668px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">
          Hyperion Agency was built by a young entrepreneur with a clear belief: businesses should not have to settle for bland, mass-produced websites that fail to represent them properly.
        </p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">
          We bring a modern perspective, strong creative standards, and a hands-on approach to every project. That means sharper execution, more attention to detail, and a genuine investment in helping our clients look more established online.
        </p>
      </div>
      <FounderCard />
    </div>
  );
}