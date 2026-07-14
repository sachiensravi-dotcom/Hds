import { useState, useEffect } from "react";

export function useMobileZoom() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1440) {
        setZoom(width / 1440);
      } else {
        setZoom(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return zoom;
}
