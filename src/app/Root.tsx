import { Outlet, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useMobileZoom } from "../hooks/useMobileZoom";

export default function Root() {
  const navigate = useNavigate();
  const zoom = useMobileZoom();
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we already loaded in this session to prevent annoying flashes on internal routing
    const hasLoaded = sessionStorage.getItem("hds_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    let start = 0;
    const end = 100;
    const duration = 1000; // 1 second loading count-up
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
        sessionStorage.setItem("hds_loaded", "true");
        setTimeout(() => {
          setLoading(false);
        }, 500); // 500ms delay for smooth slide-up
      } else {
        setPercent(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.textContent?.trim();

      if (!text) return;

      // Navigation links
      if (text === "Home" || text === "HYPERION") {
        e.preventDefault();
        navigate("/");
      } else if (text === "Works" || text === "Portfolio" || text === "View Our Work") {
        e.preventDefault();
        navigate("/works");
      } else if (text === "Services" || text === "Custom website" || text === "Webflow" || text === "Web application" || text === "SEO & AEO") {
        e.preventDefault();
        navigate("/services");
      } else if (text === "Industries" || text === "Solar businesses" || text === "Local businesses" || text === "Startups") {
        e.preventDefault();
        navigate("/services");
      } else if (text === "Case studies") {
        e.preventDefault();
        navigate("/case-studies");
      } else if (text === "Blogs" || text === "Blog") {
        e.preventDefault();
        navigate("/blogs");
      } else if (text === "Contact us" || text === "Talk with us" || text === "Chat with us" || text === "Send to the team") {
        // "Send to the team" is the form button, maybe we don't navigate there, but "Talk with us" should.
        if (text !== "Send to the team") {
          e.preventDefault();
          navigate("/contact");
        }
      }
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [navigate]);

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden min-h-screen bg-[#141414]">
      {/* Premium Preloader Loading Animation Overlay */}
      {loading && (
        <div 
          className="fixed inset-0 bg-[#141414] z-[9999] flex flex-col items-center justify-center transition-all duration-[600ms] cubic-bezier(0.85, 0, 0.15, 1) pointer-events-auto"
          style={{
            transform: percent === 100 ? "translateY(-100%)" : "translateY(0%)",
            opacity: percent === 100 ? 0.9 : 1,
          }}
        >
          {/* Logo container with backing glow */}
          <div className="relative mb-[24px]">
            <div className="absolute -inset-4 bg-[#ffa62a] rounded-full opacity-[0.08] blur-[24px] animate-pulse" style={{ animationDuration: "3s" }} />
            <h1 className="font-['Inter_Tight',sans-serif] font-bold text-[36px] tracking-[6px] text-white select-none">
              HYPERI<span className="text-[#ffa62a]">O</span>N
            </h1>
          </div>
          
          {/* Minimal gold progress track */}
          <div className="w-[180px] h-[2px] bg-white/[0.06] rounded-full overflow-hidden mb-[16px] relative">
            <div 
              className="h-full bg-gradient-to-r from-[#ffe62a] via-[#ffa62a] to-[#ff7c00] transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>
          
          {/* Countdown percentage indicator */}
          <span className="font-geist-mono text-[12px] text-[#8f8f8f] tracking-[0.2em] font-medium">
            {String(percent).padStart(3, "0")}
          </span>
        </div>
      )}

      <div 
        style={{
          width: "1440px",
          zoom: zoom,
          WebkitTextSizeAdjust: "100%",
        }}
        className="flex flex-col items-center origin-top shrink-0"
      >
        <Outlet />
      </div>
    </div>
  );
}
