function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[3px] left-0 top-0 w-[1360px]" />
      <div className="absolute bg-[#ffa62a] h-[3px] left-0 top-0 w-[227.143px]" />
    </div>
  );
}

function Tab() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pr-[24px] pt-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">{`01. Discovery & Planning`}</p>
          <Group />
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[24px] pt-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#989898] text-[16px] uppercase whitespace-nowrap">{`02. Design & Feedback`}</p>
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[24px] pt-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#989898] text-[16px] uppercase whitespace-nowrap">{`03. Development & Testing`}</p>
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="tab">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[24px] pt-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#989898] text-[16px] uppercase whitespace-nowrap">{`04. Launch & Ongoing Support`}</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="absolute content-stretch flex items-center left-[40px] top-[281px] w-[1360px]" data-name="tab list">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[#989898] text-[16px] top-0 uppercase whitespace-nowrap">Our process</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[40px] not-italic text-[40px] text-white top-[37px] w-[960px]">We start by understanding your business, goals, and vision. This helps us create a clear plan for your website that aligns with your needs and future growth.</p>
      <TabList />
    </div>
  );
}