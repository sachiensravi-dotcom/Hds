import React, { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ currentRoute, setCurrentRoute, setSelectedServiceId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { id: 'website', label: 'Custom Web Design' },
    { id: 'seo', label: 'Local Search SEO' },
    { id: 'maps', label: 'Google Maps Rank' },
    { id: 'automation', label: 'AI Lead Automation' },
    { id: 'pipeline', label: 'CRM & Pipeline' },
    { id: 'reviews', label: 'Reputation Loop' }
  ];

  const mainLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full transition-all duration-500 ease-out border
        ${isScrolled 
          ? 'bg-obsidian-card/90 backdrop-blur-xl border-white/25 shadow-2xl shadow-black/50 py-3 px-6' 
          : 'bg-obsidian-base/20 backdrop-blur-md border-white/10 py-4 px-6'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo and Brand Name */}
        <button 
          onClick={() => { setCurrentRoute('home'); setIsMobileMenuOpen(false); }}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <img 
            src="/logo.png" 
            alt="Hyperion Logo" 
            className="h-6 md:h-7 object-contain transition-all duration-300 transform group-hover:scale-[1.03]"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <button
            onClick={() => setCurrentRoute('home')}
            className={`link-lift relative text-sm font-sans tracking-wide cursor-pointer focus:outline-none transition-colors duration-300
              ${currentRoute === 'home' 
                ? 'text-solar-orange font-bold' 
                : 'text-slate-200 hover:text-white font-semibold'
              }`}
          >
            Home
            {currentRoute === 'home' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-solar-orange rounded-full animate-pulse"></span>
            )}
          </button>

          {/* About */}
          <button
            onClick={() => setCurrentRoute('about')}
            className={`link-lift relative text-sm font-sans tracking-wide cursor-pointer focus:outline-none transition-colors duration-300
              ${currentRoute === 'about' 
                ? 'text-solar-orange font-bold' 
                : 'text-slate-200 hover:text-white font-semibold'
              }`}
          >
            About
            {currentRoute === 'about' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-solar-orange rounded-full animate-pulse"></span>
            )}
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setSelectedServiceId(null);
                setCurrentRoute('services');
              }}
              className={`link-lift relative text-sm font-sans tracking-wide cursor-pointer focus:outline-none transition-colors duration-300 pb-1
                ${currentRoute === 'services' 
                  ? 'text-solar-orange font-bold' 
                  : 'text-slate-200 hover:text-white font-semibold'
                }`}
            >
              Services
              {currentRoute === 'services' && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-solar-orange rounded-full animate-pulse"></span>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-obsidian-card/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-2 shadow-2xl space-y-0.5 z-50 animate-fade-in text-left">
                {servicesList.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setCurrentRoute('services');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/[0.04] hover:text-solar-orange transition-all duration-200 flex items-center justify-between"
                  >
                    <span>{service.label}</span>
                    <span className="text-[10px] font-mono text-solar-orange font-bold">➔</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <button
            onClick={() => setCurrentRoute('contact')}
            className={`link-lift relative text-sm font-sans tracking-wide cursor-pointer focus:outline-none transition-colors duration-300
              ${currentRoute === 'contact' 
                ? 'text-solar-orange font-bold' 
                : 'text-slate-200 hover:text-white font-semibold'
              }`}
          >
            Contact
            {currentRoute === 'contact' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-solar-orange rounded-full animate-pulse"></span>
            )}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setCurrentRoute('book')}
            className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span className="slide-layer"></span>
            <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            Book Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-slate-light hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full mt-4 bg-obsidian-card/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl transition-all duration-300 ease-in-out transform origin-top
          ${isMobileMenuOpen 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-4 text-center">
          {/* Home */}
          <button
            onClick={() => { setCurrentRoute('home'); setIsMobileMenuOpen(false); }}
            className={`text-base font-sans tracking-wide py-1.5 cursor-pointer
              ${currentRoute === 'home' ? 'text-solar-orange font-bold' : 'text-slate-light/70 hover:text-white'}`}
          >
            Home
          </button>

          {/* About */}
          <button
            onClick={() => { setCurrentRoute('about'); setIsMobileMenuOpen(false); }}
            className={`text-base font-sans tracking-wide py-1.5 cursor-pointer
              ${currentRoute === 'about' ? 'text-solar-orange font-bold' : 'text-slate-light/70 hover:text-white'}`}
          >
            About
          </button>

          {/* Services group with nested grid */}
          <div className="space-y-1.5 py-1">
            <button
              onClick={() => {
                setSelectedServiceId(null);
                setCurrentRoute('services');
                setIsMobileMenuOpen(false);
              }}
              className={`text-base font-sans tracking-wide py-1 cursor-pointer w-full text-center
                ${currentRoute === 'services' ? 'text-solar-orange font-bold' : 'text-slate-light/70 hover:text-white'}`}
            >
              Services
            </button>
            <div className="grid grid-cols-2 gap-2 p-2 bg-black/20 rounded-2xl border border-white/5">
              {servicesList.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    setCurrentRoute('services');
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-2 text-[10px] font-sans font-bold text-slate-200/75 hover:text-solar-orange text-center bg-obsidian-card/40 rounded-lg border border-white/5"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <button
            onClick={() => { setCurrentRoute('contact'); setIsMobileMenuOpen(false); }}
            className={`text-base font-sans tracking-wide py-1.5 cursor-pointer
              ${currentRoute === 'contact' ? 'text-solar-orange font-bold' : 'text-slate-light/70 hover:text-white'}`}
          >
            Contact
          </button>

          <button
            onClick={() => {
              setCurrentRoute('book');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-transparent border border-solar-orange/50 hover:border-solar-orange text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Call
          </button>
        </div>
      </div>
    </nav>
  );
}
