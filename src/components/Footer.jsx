import React from 'react';
import { Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer({ setCurrentRoute }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-surface text-slate-200/90 pt-20 pb-12 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/15 relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Tagline Column (5 Columns) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <button 
              onClick={() => setCurrentRoute('home')}
              className="flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Hyperion Logo" 
                className="h-6 object-contain transition-all duration-300 transform hover:scale-[1.03]" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </button>
            <p className="text-xs text-slate-200/80 font-sans leading-relaxed max-w-sm">
              We help local service businesses increase leads, automate follow-up, and turn more prospects into paying customers through custom websites, SEO, and local growth systems.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/[0.02] border border-white/5 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/[0.02] border border-white/5 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/[0.02] border border-white/5 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors" aria-label="Github">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: Services (3 Columns) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <span className="font-mono text-[9px] text-solar-orange font-bold uppercase tracking-widest block">SERVICES</span>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <button onClick={() => setCurrentRoute('services')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  Custom Websites <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('services')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  Search Engine SEO <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('services')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  Google Map pack <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('services')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  AI Lead Automation <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Agency (2 Columns) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <span className="font-mono text-[9px] text-solar-yellow font-bold uppercase tracking-widest block">AGENCY</span>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <button onClick={() => setCurrentRoute('about')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('contact')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  Get in Touch
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('book')} className="link-lift flex items-center gap-1 hover:text-white text-slate-light/60 cursor-pointer">
                  Schedule Call
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('privacy')} className="link-lift flex items-center gap-1 text-solar-orange hover:text-white cursor-pointer font-semibold">
                  Privacy Policy (A2P)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('terms')} className="link-lift flex items-center gap-1 text-solar-yellow hover:text-white cursor-pointer font-semibold">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* System Telemetry (3 Columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <span className="font-mono text-[9px] text-solar-orange font-bold uppercase tracking-widest block">TELEMETRY</span>
            <div className="bg-obsidian-card border border-white/15 rounded-2xl p-4 space-y-3 font-mono text-[9px] text-slate-200">
              <div className="flex items-center justify-between">
                <span>API Latency</span>
                <span className="text-emerald-400 font-bold">14ms (Optimal)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Webhook Delivery</span>
                <span className="text-emerald-400 font-bold">100.0%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Database Sync</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-white/5"></div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-8 text-xs font-sans">
            <p className="text-slate-light/40">&copy; 2026 Hyperion Digital Solutions. All rights reserved.</p>
            <button onClick={() => setCurrentRoute('privacy')} className="hover:text-white text-slate-light/40 transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setCurrentRoute('terms')} className="hover:text-white text-slate-light/40 transition-colors cursor-pointer">Terms of Service</button>
          </div>

          {/* Operational Status (pulsing green dot) */}
          <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 px-4 py-1.5 rounded-full font-mono text-[10px] text-emerald-400 font-bold shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM OPERATIONAL
          </div>
        </div>

      </div>
    </footer>
  );
}
