import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";
import { BookOpen, Calendar, User } from "lucide-react";

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: "Why Webflow is our selected tech for websites",
      excerpt: "It's more important who the builder is. But Webflow definitely has its edges as we will explain in this article regarding design speed, clean builds, and hosting.",
      date: "June 28, 2026",
      author: "Sachien R."
    },
    {
      title: "Understanding A2P 10DLC for Local Services",
      excerpt: "Carrier regulations are tightening. Learn what registration steps and website disclaimers your local business needs to stay compliant and send SMS notifications.",
      date: "July 2, 2026",
      author: "Hyperion Team"
    },
    {
      title: "AEO vs SEO: Preparing for the Future of AI Answers",
      excerpt: "Search engines are shifting to generative answers. Discover how structuring clear metadata and semantic text can ensure your brand gets cited by LLMs.",
      date: "July 8, 2026",
      author: "Sachien R."
    }
  ];

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden font-['Inter_Tight',sans-serif] text-white">
      <div className="relative w-full h-[120px] overflow-hidden">
        <HeroSection />
      </div>

      {/* Hero Title */}
      <div className="max-w-[1360px] mx-auto px-[40px] pt-20 pb-12">
        <span className="font-['Geist_Mono'] text-[#ffa62a] text-[16px] uppercase tracking-widest block mb-4">
          Insights & Updates
        </span>
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 max-w-[700px] leading-tight">
          News & Insights
        </h1>
        <p className="text-neutral-400 text-lg max-w-[600px] leading-relaxed">
          Read our latest breakdowns of web development technology, search engine optimization (SEO/AEO), and digital marketing compliance.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-[1360px] mx-auto px-[40px] pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <div 
            key={idx}
            className="bg-[#1a1a1a]/40 border border-[#2b2b2b] p-8 rounded-xl flex flex-col justify-between h-[380px] hover:border-[#ffa62a] transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div>
              <div className="flex items-center gap-4 text-xs font-['Geist_Mono'] text-neutral-500 uppercase tracking-wider mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {post.date}
                </span>
                <span className="size-1 bg-[#2b2b2b] rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <User className="size-3.5" />
                  {post.author}
                </span>
              </div>
              <h3 className="text-[22px] font-semibold text-white mb-4 leading-snug group-hover:text-[#ffa62a] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed line-clamp-4">
                {post.excerpt}
              </p>
            </div>
            <span className="font-['Geist_Mono'] text-xs text-[#ffa62a] hover:underline cursor-pointer flex items-center gap-1.5 mt-6">
              <BookOpen className="size-3.5" /> Read Article →
            </span>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
