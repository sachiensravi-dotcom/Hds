export default function Section() {
  return (
    <div 
      className="bg-[#141414] relative size-full flex flex-col items-center justify-center py-[40px] px-[40px] border-t border-b border-[#222222]" 
      data-name="Section"
    >
      <div className="absolute left-[calc(50%-250px)] top-[20px] w-[500px] h-[200px] bg-halo-gold pointer-events-none opacity-[0.15] mix-blend-screen" />
      <h2 className="font-['Inter_Tight',sans-serif] text-[16px] text-[#989898] uppercase tracking-widest mb-[16px] font-semibold">
        We are trusted by
      </h2>
      <div className="w-[320px] h-[1px] bg-[rgba(255,255,255,0.1)] mb-[24px]" />
      <div className="flex items-center w-full justify-between px-[40px] relative z-10 max-w-[1360px]">
        <div className="flex-1 flex items-center justify-end gap-[60px] md:gap-[80px] pr-[40px] md:pr-[60px]">
          <a href="https://www.whitewright.org/" target="_blank" rel="noreferrer">
            <img 
              src="/logo_whitewright.png" 
              alt="Whitewright Chamber of Commerce" 
              className="h-[120px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
            />
          </a>
          <a href="https://www.texas-sun.com/" target="_blank" rel="noreferrer">
            <img 
              src="/logo_texas_sun.png" 
              alt="Texas Sun Roofing & Solar" 
              className="h-[105px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
              style={{ filter: "brightness(0) invert(1)" }} 
            />
          </a>
        </div>
        <div className="flex-none flex items-center justify-center px-[20px]">
          <a href="https://www.countrycharmcoffee.com/" target="_blank" rel="noreferrer">
            <img 
              src="/logo_coffee.png" 
              alt="Country Charm Coffee" 
              className="h-[105px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
            />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-start gap-[60px] md:gap-[80px] pl-[40px] md:pl-[60px]">
          <a href="https://bruce-norwoods-website.webflow.io/" target="_blank" rel="noreferrer">
            <img 
              src="/logo_remax.png" 
              alt="RE/MAX" 
              className="h-[110px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
            />
          </a>
          <a href="https://4thandmainbarber.com/" target="_blank" rel="noreferrer">
            <img 
              src="/logo_barber.png" 
              alt="4th & Main Barber" 
              className="h-[65px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
              style={{ filter: "invert(1) brightness(1.8) grayscale(1) contrast(1.8)", mixBlendMode: "screen" }} 
            />
          </a>
        </div>
      </div>
    </div>
  );
}