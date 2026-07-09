import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import HeroSection from "../imports/HeroSection-1/index";
import CTASection from "../imports/Section-13/index";
import FooterSection from "../imports/Section-17/index";
import TiltCard from "../imports/TiltCard";
import { blogsList } from "../data/blogsData";

const categories = ["All", "SEO", "Optimization", "Keywords", "Building a presence"];

export default function BlogsPage() {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = selectedCat === "All"
    ? blogsList
    : blogsList.filter(blog => blog.category === selectedCat);

  return (
    <div className="bg-[#141414] w-full min-w-[1440px] flex flex-col items-center overflow-x-hidden text-white">
      {/* Mini Hero Section */}
      <div className="relative w-[1440px] h-[300px] shrink-0 overflow-hidden">
        <HeroSection 
          subtitle="Our Insights"
          title="Latest in growth, automations, & custom web"
          isMini={true}
        />
      </div>

      {/* Blogs Main Section */}
      <div className="relative w-[1440px] py-[80px] px-[40px] flex flex-col items-start bg-[#141414] shrink-0">
        
        {/* Category Filters */}
        <div className="flex gap-[12px] mb-[48px] flex-wrap w-full justify-start items-center select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-[20px] py-[10px] rounded-[100px] font-['Inter_Tight',sans-serif] text-[15px] border transition-all duration-300 cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#ffa62a] border-[#ffa62a] text-[#141414] font-semibold"
                  : "bg-transparent border-[#3b3b3b] text-[#989898] hover:text-white hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-3 gap-[40px] w-full items-stretch">
          {filteredBlogs.map((blog, idx) => {
            // Extract the slug from the url e.g. "https://www.gohds.co/blog-posts/technical-seo" -> "technical-seo"
            const slug = blog.url.split("/").pop();
            return (
              <TiltCard
                key={blog.title + idx}
                onClick={() => navigate(`/blog-posts/${slug}`)}
                max={6}
                scale={1.02}
                className="flex flex-col group cursor-pointer w-full bg-[rgba(255,255,255,0.01)] border border-[#2d2d2d] rounded-[8px] p-[24px] hover:border-[#ffa62a] transition-all duration-300 glow-card-gold"
              >
                {/* Blog Card Thumbnail */}
                <div className="relative h-[220px] w-full overflow-hidden rounded-[4px] border border-transparent group-hover:border-[#ffa62a] transition-all duration-300 bg-black">
                  <img
                    alt={blog.title}
                    className="absolute inset-0 object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
                    src={blog.image}
                    loading="lazy"
                  />
                  <div className="absolute top-[12px] left-[12px] bg-[#141414] border border-[#3b3b3b] text-[#ffa62a] font-geist-mono text-[12px] px-[10px] py-[4px] rounded-[4px] uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                {/* Card Title & Navigation */}
                <div className="flex flex-col flex-grow mt-[20px] justify-between">
                  <div>
                    <h3 className="font-['Inter_Tight',sans-serif] text-[20px] leading-snug text-white font-semibold group-hover:text-[#ffa62a] transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[14px] mt-[12px] leading-relaxed line-clamp-3">
                      {blog.desc}
                    </p>
                  </div>
                  <div className="border-t border-[#2d2d2d] pt-[16px] mt-[24px] w-full flex items-center justify-between">
                    <span className="font-['Inter_Tight',sans-serif] text-[14px] text-white group-hover:text-[#ffa62a] transition-colors duration-300 font-medium">
                      Read article
                    </span>
                    <span className="text-[16px] text-[#989898] group-hover:text-[#ffa62a] group-hover:translate-x-[4px] transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="w-full py-[80px] flex flex-col items-center justify-center text-center border border-dashed border-[#3b3b3b] rounded-[8px]">
            <p className="font-['Inter_Tight',sans-serif] text-[#989898] text-[18px]">
              No articles found in this category.
            </p>
          </div>
        )}
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
