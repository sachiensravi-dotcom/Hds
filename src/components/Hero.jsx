import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, ChevronRight, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function Hero({ setCurrentRoute }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for hero entrances
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.2 }
      });

      tl.fromTo('.hero-badge', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, delay: 0.2 }
      )
      .fromTo('.hero-sans', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0 }, 
        '-=0.9'
      )
      .fromTo('.hero-serif', 
        { opacity: 0, y: 45 }, 
        { opacity: 1, y: 0 }, 
        '-=0.9'
      )
      .fromTo('.hero-sub', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0 }, 
        '-=0.9'
      )
      .fromTo('.hero-ctas', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0 }, 
        '-=0.9'
      )
      .fromTo('.hero-mockup',
        { opacity: 0, scale: 0.95, y: 50 },
        { opacity: 1, scale: 1, y: 0, ease: 'back.out(1.2)', duration: 1.5 },
        '-=1.2'
      );

      // Drifting animation for floating stats
      gsap.to('.floating-card-1', {
        y: '-=15',
        x: '+=8',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
      gsap.to('.floating-card-2', {
        y: '+=18',
        x: '-=5',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-end justify-start overflow-hidden bg-obsidian-base px-6 py-20 md:p-20 border-b border-white/5"
    >
      {/* Background Image with heavy gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" 
          alt="Technical Network Grid" 
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-base via-obsidian-base/40 to-transparent"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-1"></div>

      {/* Floating Blobs */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-solar-orange/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-solar-yellow/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-24">
        
        {/* Left Content (Bottom-Left Third) */}
        <div className="lg:col-span-7 space-y-6 text-left max-w-2xl">
          <div className="hero-badge inline-flex items-center gap-2 bg-solar-orange/10 border border-solar-orange/30 px-4 py-1.5 rounded-full text-xs text-solar-orange font-semibold font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 animate-pulse" /> Local Growth Systems
          </div>

          <h1 className="flex flex-col space-y-2">
            <span className="hero-sans text-3xl md:text-5xl font-sans font-black tracking-tight text-white leading-[1.1] uppercase">
              Get More Appointments.<br />Close More Customers.
            </span>
            <span className="hero-serif text-5xl md:text-8xl font-serif italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow leading-tight pt-2">
              Grow Faster.
            </span>
          </h1>

          <p className="hero-sub text-slate-200 font-sans text-sm md:text-base max-w-lg leading-relaxed">
            We build high-converting custom websites and implement AI-powered local growth loops that automatically follow up with leads, generate calendars packed with bookings, and expand your service revenue.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => setCurrentRoute('book')}
              className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span className="slide-layer"></span>
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              Book a Strategy Call
            </button>
            
            <button
              onClick={() => setCurrentRoute('services')}
              className="link-lift flex items-center justify-center gap-1.5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:text-solar-orange border border-white/10 hover:border-solar-orange/50 rounded-full transition-all cursor-pointer bg-white/[0.02] backdrop-blur-sm"
            >
              View Services
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Dashboard Mockup (Floating Interactive Artifact) */}
        <div className="lg:col-span-5 w-full flex justify-end relative h-full min-h-[350px] lg:min-h-0">
          <div className="hero-mockup relative w-full max-w-[420px] bg-obsidian-card/40 backdrop-blur-md rounded-3xl border border-white/10 p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Top border light */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-orange to-transparent"></div>

            {/* Dashboard Mockup UI */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-light/40 font-semibold tracking-wider">HYPERION_TELEMETRY_v3</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-obsidian-base/60 rounded-xl p-3.5 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-light/40 uppercase tracking-widest block">Month Revenue</span>
                  <span className="text-xl font-sans font-bold text-white tracking-tight block mt-1">$42,850</span>
                  <span className="text-[9px] text-emerald-400 font-medium mt-1 inline-flex items-center gap-0.5">+24.5%</span>
                </div>
                <div className="bg-obsidian-base/60 rounded-xl p-3.5 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-light/40 uppercase tracking-widest block">Conversion Rate</span>
                  <span className="text-xl font-sans font-bold text-white tracking-tight block mt-1">11.82%</span>
                  <span className="text-[9px] text-solar-orange font-medium mt-1 inline-flex items-center gap-0.5">Level Premium</span>
                </div>
              </div>

              {/* Real-time booking items */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-solar-orange/80 uppercase tracking-wider block">Real-Time Bookings</span>
                <div className="bg-obsidian-base/30 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-solar-orange/10 border border-solar-orange/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-solar-orange" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans font-semibold text-white block">Dr. Robert Miller</span>
                      <span className="text-[9px] font-mono text-slate-light/40 block">Dental Clinic Strategy Call</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono bg-solar-orange/10 text-solar-orange px-2 py-0.5 rounded-full font-bold">1m ago</span>
                </div>
                <div className="bg-obsidian-base/30 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-solar-yellow/10 border border-solar-yellow/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-solar-yellow" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans font-semibold text-white block">Prime HVAC Services</span>
                      <span className="text-[9px] font-mono text-slate-light/40 block">Lead Dispatch Automation</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono bg-solar-yellow/10 text-solar-yellow px-2 py-0.5 rounded-full font-bold">5m ago</span>
                </div>
              </div>
            </div>

            {/* Bottom active tag */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold border-t border-white/5 pt-3 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Follow-Up Loop Operational
            </div>
          </div>

          {/* Floating Drift Cards */}
          <div className="floating-card-1 absolute top-4 -left-6 z-20 hidden sm:flex items-center gap-3 bg-obsidian-card border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-lg">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-slate-light/40 block uppercase">Lead Capture</span>
              <span className="text-xs font-sans font-black text-white">SMS Follow-up: 62s avg</span>
            </div>
          </div>

          <div className="floating-card-2 absolute bottom-6 -right-4 z-20 hidden sm:flex items-center gap-3 bg-obsidian-card border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-lg">
            <div className="w-8 h-8 rounded-full bg-solar-orange/10 border border-solar-orange/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-solar-orange" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-slate-light/40 block uppercase">Appointment Vol</span>
              <span className="text-xs font-sans font-black text-white">412 Booked / Mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
