import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { useMobileZoom } from "../hooks/useMobileZoom";

export default function Root() {
  const navigate = useNavigate();
  const zoom = useMobileZoom();

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
    <div className="w-full flex flex-col items-center overflow-x-hidden min-h-screen">
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
