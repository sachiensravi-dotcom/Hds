import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Stacking Scroll Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      // Card 2 slides in, while Card 1 scales, blurs, and fades
      tl.fromTo(card2Ref.current, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: 'none' }
      )
      .to(card1Ref.current, {
        scale: 0.9,
        filter: 'blur(20px)',
        opacity: 0.5,
        ease: 'none'
      }, 0); // Overlay at the same time

      // Card 3 slides in, while Card 2 scales, blurs, and fades
      tl.fromTo(card3Ref.current, 
        { yPercent: 100 }, 
        { yPercent: 0, ease: 'none' }
      )
      .to(card2Ref.current, {
        scale: 0.9,
        filter: 'blur(20px)',
        opacity: 0.5,
        ease: 'none'
      }, 1); // Overlay at the same time

      // 2. SVG Motif Rotations
      gsap.to('.motif-rotate', {
        rotation: 360,
        repeat: -1,
        ease: 'none',
        duration: 25
      });

      // 3. Laser Grid Sweeps
      gsap.fromTo('.laser-line', 
        { y: 0 },
        {
          y: 180,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 3
        }
      );

      // 4. EKG Waveform Offset
      gsap.fromTo('.ekg-path',
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          repeat: -1,
          ease: 'none',
          duration: 4
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-obsidian-surface w-full overflow-hidden"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-solar-orange/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Cards Wrapper */}
      <div className="relative w-full h-screen flex items-center justify-center relative z-10">
        
        {/* CARD 1: THE CAPTURE PROTOCOL */}
        <div 
          ref={card1Ref}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0D1321] to-[#05060A] flex items-center justify-center p-6 md:p-20 border-b border-white/10"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-6 text-left">
              <span className="font-mono text-sm text-solar-orange font-bold">STEP 01 // DISCOVERY</span>
              <h3 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
                The Capture Protocol
              </h3>
              <p className="text-slate-200/90 font-sans text-sm md:text-base leading-relaxed max-w-lg">
                We combine search-engine optimized, clean-code web design with local SEO maps and Google Business profile sweeps. High-intent local leads searching for your services are funneled straight to your landing page.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-200/50">
                <span>[INPUT] Local Traffic</span>
                <span>➔</span>
                <span className="text-solar-orange font-bold">[OUTPUT] High-Intent Leads</span>
              </div>
            </div>
            
            {/* Visual Right (Rotating Motif) */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/15 rounded-full flex items-center justify-center bg-obsidian-card/70 backdrop-blur-sm shadow-2xl">
                <svg className="motif-rotate w-48 h-48 md:w-64 md:h-64 text-solar-orange/25" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Gear Ring */}
                  <circle cx="100" cy="100" r="80" stroke="currentColor" stroke-width="2" stroke-dasharray="8 8" />
                  <circle cx="100" cy="100" r="65" stroke="currentColor" stroke-width="1" />
                  {/* Concentric Circles */}
                  <circle cx="100" cy="100" r="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 12" />
                  <circle cx="100" cy="100" r="25" stroke="currentColor" stroke-width="1" />
                  {/* Rotating Spokes */}
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" stroke-width="1" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1" />
                  <line x1="43.4" y1="43.4" x2="156.6" y2="156.6" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" />
                  <line x1="43.4" y1="156.6" x2="156.6" y2="43.4" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" />
                </svg>
                {/* Center Core dot */}
                <div className="absolute w-4 h-4 rounded-full bg-solar-orange animate-pulse shadow-[0_0_12px_#E05624]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: TELEMETRY AUTOMATION */}
        <div 
          ref={card2Ref}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#161F36] to-[#0A0D14] flex items-center justify-center p-6 md:p-20 border-b border-white/10"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-6 text-left">
              <span className="font-mono text-sm text-solar-yellow font-bold">STEP 02 // ENGAGEMENT</span>
              <h3 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
                Telemetry Automation
              </h3>
              <p className="text-slate-200/90 font-sans text-sm md:text-base leading-relaxed max-w-lg">
                Leads go cold in minutes. Our AI dispatch systems trigger immediate SMS and email follow-up replies in under 60 seconds of initial contact. Warm prospects are qualified and booked into your calendar while motivation is peak.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-200/50">
                <span>[INPUT] Hot Lead Received</span>
                <span>➔</span>
                <span className="text-solar-yellow font-bold">[OUTPUT] SMS Reply &lt; 60s</span>
              </div>
            </div>
            
            {/* Visual Right (Laser sweep dot grid) */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/15 rounded-2xl flex flex-col justify-between p-6 bg-obsidian-card/70 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* Dot Grid Matrix */}
                <div className="grid grid-cols-8 gap-4 w-full h-[180px] opacity-45 relative">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  ))}
                  {/* Scanning Laser Line */}
                  <div className="laser-line absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-solar-yellow to-transparent shadow-lg shadow-solar-yellow/50"></div>
                </div>
                <div className="font-mono text-[9px] text-solar-yellow flex items-center justify-between border-t border-white/10 pt-3">
                  <span>SWEEPING_NODE_MATRIX...</span>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: THE REVENUE LOOP */}
        <div 
          ref={card3Ref}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0B101C] to-[#050608] flex items-center justify-center p-6 md:p-20"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-6 text-left">
              <span className="font-mono text-sm text-solar-orange font-bold">STEP 03 // RESOLUTION</span>
              <h3 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
                The Revenue Loop
              </h3>
              <p className="text-slate-200/90 font-sans text-sm md:text-base leading-relaxed max-w-lg">
                Appointments are automatically tracked inside your CRM pipeline dashboard. Upon successful job completion, the system prompts the client for review generation via SMS, feeding 5-star authority back into Google Maps.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-200/50">
                <span>[INPUT] Job Completed</span>
                <span>➔</span>
                <span className="text-solar-orange font-bold">[OUTPUT] Google Review Loop</span>
              </div>
            </div>
            
            {/* Visual Right (EKG Pulsing waveform path) */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/15 rounded-2xl flex items-center justify-center bg-obsidian-card/70 backdrop-blur-sm p-4 shadow-2xl">
                <svg className="w-full h-40 text-solar-orange" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                  <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                  <line x1="150" y1="0" x2="150" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                  
                  {/* Waveform Path */}
                  <path 
                    className="ekg-path" 
                    d="M 0,50 L 40,50 L 50,20 L 58,85 L 66,40 L 72,60 L 80,50 L 120,50 L 130,20 L 138,85 L 146,40 L 152,60 L 160,50 L 200,50" 
                    stroke="url(#ekgGradient)" 
                    stroke-width="3" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    stroke-dasharray="600"
                    stroke-dashoffset="600"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="ekgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#E05624" />
                      <stop offset="100%" stop-color="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
