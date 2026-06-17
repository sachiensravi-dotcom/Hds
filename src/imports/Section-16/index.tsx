import svgPaths from "./svg-yfyuewiki1";

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full">Your email *</p>
      <Input1 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full">Your name *</p>
      <Input3 />
    </div>
  );
}

function InputRow() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[31px] top-[31px] w-[656px]" data-name="input row">
      <Input />
      <Input2 />
    </div>
  );
}

function GlyphsChevronBold() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="glyphs:chevron-bold">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="glyphs:chevron-bold">
          <path d={svgPaths.p7dfe800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#2b2b2b] relative rounded-[4px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.5)]">Select an option</p>
          <GlyphsChevronBold />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[31px] top-[341px] w-[656px]" data-name="input">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full">Your estimated budget *</p>
      <Input5 />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-[#2b2b2b] h-[160px] relative rounded-[4px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
      <p className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full">Tell us more about your website *</p>
      <Input7 />
    </div>
  );
}

function InputRow1() {
  return (
    <div className="absolute content-stretch flex items-center left-[31px] top-[129px] w-[656px]" data-name="input row">
      <Input6 />
    </div>
  );
}

function Btn() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ffa62a] content-stretch flex items-center justify-center left-1/2 px-[20px] py-[16px] rounded-[120px] top-[439px] w-[656px]" data-name="btn">
      <p className="[word-break:break-word] font-['Inter_Tight:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] text-right whitespace-nowrap">Send to the team</p>
    </div>
  );
}

function Form() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(20,20,20,0.2)] border border-[rgba(255,255,255,0.1)] border-solid h-[526px] left-1/2 overflow-clip rounded-[6px] top-[252px] w-[720px]" data-name="form">
      <InputRow />
      <Input4 />
      <InputRow1 />
      <Btn />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-black relative size-full" data-name="Section">
      <div className="-translate-x-1/2 absolute h-[524.435px] left-[calc(50%+0.27px)] top-[650.97px] w-[1226.039px]">
        <div className="absolute inset-[-91.53%_-39.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2186.04 1484.44">
            <g filter="url(#filter0_f_5_3698)" id="Ellipse 5">
              <ellipse cx="1093.02" cy="742.218" fill="var(--fill-0, #FFA62A)" fillOpacity="0.2" rx="613.02" ry="262.218" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1484.44" id="filter0_f_5_3698" width="2186.04" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_5_3698" stdDeviation="240" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[48px] text-center text-white top-[100px] whitespace-nowrap">Thinking about your website?</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-1/2 not-italic text-[#989898] text-[16px] text-center top-[182px] w-[640px]">We will help you to plan and execute your next move for long-term growth.</p>
      <Form />
    </div>
  );
}