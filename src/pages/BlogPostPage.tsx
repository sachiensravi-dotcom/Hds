import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import HeroSection from "../imports/HeroSection-1/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";
import { blogsDetails, blogsList } from "../data/blogsData";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? blogsDetails[slug] : null;
  const summary = blogsList.find((b) => b.url.includes(slug || ""));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="bg-[#141414] w-full min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center py-[100px]">
          <h1 className="text-[36px] font-semibold mb-4">Blog Post Not Found</h1>
          <button 
            onClick={() => navigate("/blogs")}
            className="px-[24px] py-[12px] bg-[#ffa62a] text-[#141414] font-semibold rounded-[4px] cursor-pointer hover:bg-[#ffe62a] transition-all"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Intercept links clicked inside dangerouslySetInnerHTML to run SPA routing instead of hard refresh
  const handleBodyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (target) {
      const href = target.getAttribute("href");
      if (href) {
        if (href.startsWith("/")) {
          e.preventDefault();
          navigate(href);
        } else if (href.startsWith("https://www.gohds.co/")) {
          e.preventDefault();
          const route = href.replace("https://www.gohds.co", "");
          navigate(route);
        }
      }
    }
  };

  const decodeHtml = (str: string) => {
    return str
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  };

  return (
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Mini Hero Header */}
      <div className="relative w-[1440px] h-[300px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Our Insights"
          title="Latest in growth, automations, & custom web"
          isMini={true}
        />
      </div>

      {/* Blog Article Post Container */}
      <div className="relative w-[1440px] py-[80px] px-[40px] flex flex-col items-center bg-[#141414] shrink-0">
        <div className="w-full max-w-[850px] flex flex-col items-center text-center mb-[48px]">
          {summary && (
            <span className="font-geist-mono text-[#ffa62a] text-[14px] uppercase tracking-widest mb-[16px] border border-[#ffa62a]/30 px-[12px] py-[4px] rounded-[4px]">
              {summary.category}
            </span>
          )}
          <h1 className="font-['Inter_Tight',sans-serif] text-[48px] leading-tight font-normal text-white mb-[24px]">
            {decodeHtml(post.title)}
          </h1>
          <div className="flex items-center gap-[12px] text-[#989898] font-['Inter_Tight',sans-serif] text-[16px]">
            <span>{post.date}</span>
            <span className="text-[#3b3b3b]">•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        {summary && (
          <div className="w-full max-w-[950px] h-[500px] border border-[#2d2d2d] rounded-[8px] overflow-hidden mb-[64px] bg-black">
            <img 
              src={summary.image} 
              alt={decodeHtml(post.title)} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        {/* HTML Content Body */}
        <div 
          onClick={handleBodyClick}
          className="w-full max-w-[800px] blog-content-rich-text prose prose-invert font-['Inter_Tight',sans-serif]"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />
      </div>

      {/* CTA section */}
      <div className="relative w-[1440px] h-auto shrink-0">
        <CTASection title="Ready to build your growth engine?" ctaText="Talk with us" />
      </div>

      {/* Footer section */}
      <div className="relative w-[1440px] h-[640px] shrink-0">
        <FooterSection />
      </div>
    </div>
  );
}
