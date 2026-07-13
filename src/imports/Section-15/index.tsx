import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-7qtkueje2v";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does it take to build a custom website?",
    answer: "Most projects are completed in less than a week, depending on the scope, features, and feedback process."
  },
  {
    question: "Do you use templates or pre-made designs?",
    answer: "No, we build everything custom from scratch in Figma and Webflow to match your brand and unique business needs perfectly."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. Every site we build is optimized for all screen sizes, from mobile phones to tablets and desktop screens."
  },
  {
    question: "Can I update the website myself after launch?",
    answer: "Yes, we build our sites on Webflow, which offers a simple editor that allows you to easily update text, images, and other content without touching any code."
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "We set up hosting and domain mapping for you during launch. Webflow provides ultra-fast, secure hosting backed by AWS and Fastly CDN."
  },
  {
    question: "Is SEO included in the website build?",
    answer: "Yes, basic on-site and technical SEO (site structure, fast loading times, meta tags, and image alt text) is built directly into every project we launch."
  },
  {
    question: "What happens after the website goes live?",
    answer: "We provide 30 days of free post-launch support to resolve any issues. We also offer monthly growth and maintenance packages to keep your site optimized."
  },
  {
    question: "How much does a custom website cost?",
    answer: "Pricing depends on the number of pages, scope of features, and custom requirements. Contact us to get an exact custom quote for your project."
  }
];

function LucidePlus({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[20px] transition-transform duration-300 ${isOpen ? "rotate-45 text-[#ffa62a]" : "text-white"}`} data-name="lucide:plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide:plus">
          <path d={svgPaths.p1c75eb80} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Section() {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default first one open

  return (
    <div className="bg-[#141414] relative size-full" data-name="Section">
      {/* FAQ Taglines */}
      <p className="[word-break:break-word] absolute font-geist-mono leading-[normal] left-[calc(4.17%-20px)] text-[#989898] text-[16px] top-[100px] uppercase whitespace-nowrap tracking-widest">FAQs</p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] leading-[normal] left-[calc(20.83%-260px)] not-italic text-[40px] text-white top-[137px] whitespace-nowrap">Frequently asked questions</p>

      {/* Accordion FAQ List */}
      <div className="absolute content-stretch flex flex-col items-start left-[calc(41.67%+80px)] top-[100px] w-[720px] select-none" data-name="faq list">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className="relative shrink-0 w-full cursor-pointer border-b border-[#3b3b3b] py-[24px]" 
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              data-name="item"
            >
              {/* Question Header */}
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="faq question">
                <p className={`[word-break:break-word] flex-[1_0_0] font-['Inter_Tight',sans-serif] font-medium leading-[normal] text-[16px] transition-colors duration-300 ${isOpen ? "text-[#ffa62a]" : "text-white"}`}>
                  {item.question}
                </p>
                <LucidePlus isOpen={isOpen} />
              </div>

              {/* Answer Content - Smooth Accordion Height Toggle */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-[16px]" : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] leading-[1.4] not-italic text-[#989898] text-[16px] w-full">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] leading-[1.4] left-[40px] not-italic text-[#989898] text-[16px] top-[209px] w-[478px]">Can not find your answer? Send us a message.</p>

      {/* Action CTA Button */}
      <div 
        onClick={() => navigate("/contact")}
        className="absolute bg-white content-stretch flex items-center justify-center left-[40px] px-[24px] py-[14px] rounded-[120px] top-[263px] cursor-pointer transition-all duration-300 hover:bg-[#ffa62a] hover:scale-[1.03] active:scale-[0.98]" 
        data-name="btn"
      >
        <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] font-semibold leading-[normal] not-italic text-[#141414] text-[18px] text-right whitespace-nowrap select-none">Chat with us</p>
      </div>
    </div>
  );
}