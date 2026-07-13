import { useState } from "react";
import { useNavigate } from "react-router";
import TiltCard from "../TiltCard";

const blogPosts = [
  {
    title: "Minimizing Facebook Ad Fraud for Solar Ads",
    image: "https://cdn.prod.website-files.com/663f961a262cb09078153625/67c918b786e468ffe964856e_facebook.webp",
    url: "https://www.gohds.co/blog-posts/minimizing-facebook-ad-fraud-for-solar-ads",
    leftClass: "left-[40px]"
  },
  {
    title: "Why does Content Matter for SEO? | Google's Ranking Algorithm",
    image: "https://cdn.prod.website-files.com/663f961a262cb09078153625/671581488732075457d93f8e_13.webp",
    url: "https://www.gohds.co/blog-posts/on-site-content",
    leftClass: "left-[calc(33.33%+22px)]"
  },
  {
    title: "An Overview on Technical SEO | Google's Ranking Algorithm",
    image: "https://cdn.prod.website-files.com/663f961a262cb09078153625/67158130e716bcdd2f18b4b2_11.webp",
    url: "https://www.gohds.co/blog-posts/technical-seo",
    leftClass: "left-[calc(66.67%+3px)]"
  }
];

export default function Section() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#141414] relative size-full blog-section-container" data-name="Section">
      {blogPosts.map((post, idx) => (
        <TiltCard
          key={idx}
          onClick={() => navigate("/blogs")}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          max={6}
          scale={1.02}
          className={`absolute top-[255px] w-[437px] h-[380px] group cursor-pointer ${post.leftClass}`}
        >
          <div className="relative h-[246px] w-[437px] overflow-hidden rounded-[4px] border border-transparent group-hover:border-[#ffa62a] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <img
              alt={post.title}
              className="absolute inset-0 object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
              src={post.image}
            />
          </div>
          <p className="[word-break:break-word] font-['Inter_Tight',sans-serif] font-medium leading-[normal] not-italic text-[20px] text-white mt-[16px] group-hover:text-[#ffa62a] transition-colors duration-300">
            {post.title}
          </p>
        </TiltCard>
      ))}

      <p className="[word-break:break-word] absolute font-geist-mono leading-[normal] left-[40px] text-[#989898] text-[16px] top-[120px] uppercase w-[96px] tracking-widest">
        Blog
      </p>
      <p className="[word-break:break-word] absolute font-['Inter_Tight',sans-serif] leading-[normal] left-[40px] not-italic text-[48px] text-white top-[157px] w-[651px]">
        News & Insights
      </p>
      <p
        onClick={() => navigate("/blogs")}
        className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Inter_Tight',sans-serif] font-medium leading-[normal] left-[calc(83.33%+46px)] text-[16px] text-white top-[176px] underline uppercase whitespace-nowrap cursor-pointer hover:text-[#ffa62a] transition-all duration-300 group"
      >
        View all blogs{" "}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">
          →
        </span>
      </p>
    </div>
  );
}