import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Terminal, CalendarRange, MousePointer, Check } from 'lucide-react';

export default function Features() {
  // ----------------------------------------------------
  // CARD 1: DIAGNOSTIC SHUFFLER
  // ----------------------------------------------------
  const [shuffleCards, setShuffleCards] = useState([
    { id: 0, badge: 'CONVERSION', title: 'Behavior Blueprint', desc: 'Visual heatmaps and friction-free user flows designed to direct visitor focus to booking calls.', metric: '+38% Booking Rate' },
    { id: 1, badge: 'PERFORMANCE', title: 'Vanilla Speed', desc: 'Bespoke React engineering achieving 100/100 Lighthouse performance scores without bulky plugins.', metric: '0.4s Avg FCP' },
    { id: 2, badge: 'ADAPTIVE', title: 'Fluid Viewports', desc: 'Liquid responsive grid systems that look stunning on iPhones, tablets, and ultra-wide desktop monitors.', metric: '100% Mobile Score' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShuffleCards(prev => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ----------------------------------------------------
  // CARD 2: TELEMETRY TYPEWRITER
  // ----------------------------------------------------
  const logsPreset = [
    "[16:42:01] INCOMING LEAD: Jane Doe (Roofing)",
    "[16:42:02] AI DISPATCHER: Analyzing intent...",
    "[16:42:03] SMS SENT: 'Hi Jane, scheduling link ready!'",
    "[16:42:05] LEAD REPLY: 'Thanks! Just booked Mon 10 AM'",
    "[16:42:06] SYSTEM: Synced to CRM [Booking Confirmed]",
    "[16:42:07] METRIC: Lead-to-booking loop took 66 seconds"
  ];
  
  const [typedLogs, setTypedLogs] = useState([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLogIndex >= logsPreset.length) {
      const resetTimeout = setTimeout(() => {
        setTypedLogs([]);
        setCurrentLogIndex(0);
        setCurrentCharIndex(0);
      }, 4000);
      return () => clearTimeout(resetTimeout);
    }

    const currentText = logsPreset[currentLogIndex];
    if (currentCharIndex < currentText.length) {
      const typeTimeout = setTimeout(() => {
        setTypedLogs(prev => {
          const updated = [...prev];
          if (updated[currentLogIndex] !== undefined) {
            updated[currentLogIndex] += currentText[currentCharIndex];
          } else {
            updated.push(currentText[currentCharIndex]);
          }
          return updated;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(typeTimeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setCurrentLogIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 800);
      return () => clearTimeout(lineTimeout);
    }
  }, [currentLogIndex, currentCharIndex]);

  // ----------------------------------------------------
  // CARD 3: CURSOR PROTOCOL SCHEDULER (WITH REF ALIGNMENT)
  // ----------------------------------------------------
  const [activeDay, setActiveDay] = useState(null); // 'T' for Tuesday
  const [isSaved, setIsSaved] = useState(false);
  
  const calendarWrapperRef = useRef(null);
  const tuesdayRef = useRef(null);
  const saveBtnRef = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate coordinates dynamically relative to the calendarWrapperRef container
      const getRelativeCoords = (element) => {
        if (!element || !calendarWrapperRef.current) return { x: 100, y: 100 };
        const elementRect = element.getBoundingClientRect();
        const wrapperRect = calendarWrapperRef.current.getBoundingClientRect();
        
        return {
          x: elementRect.left - wrapperRect.left + elementRect.width / 2,
          y: elementRect.top - wrapperRect.top + elementRect.height / 2
        };
      };

      const startCursorTimeline = () => {
        const tuesdayCoords = getRelativeCoords(tuesdayRef.current);
        const saveCoords = getRelativeCoords(saveBtnRef.current);

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 2.0,
          onStart: () => {
            setActiveDay(null);
            setIsSaved(false);
          },
          onRepeat: () => {
            setActiveDay(null);
            setIsSaved(false);
          }
        });

        // Set initial cursor state offscreen bottom-right
        tl.set(cursorRef.current, { x: 260, y: 190, opacity: 0 });

        // Hover Tuesday
        tl.to(cursorRef.current, {
          opacity: 1,
          x: tuesdayCoords.x,
          y: tuesdayCoords.y,
          duration: 1.5,
          ease: 'power3.out'
        });

        // Click Tuesday
        tl.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          onComplete: () => setActiveDay('T')
        });

        // Hover Save
        tl.to(cursorRef.current, {
          x: saveCoords.x,
          y: saveCoords.y,
          duration: 1.2,
          ease: 'power2.inOut',
          delay: 0.5
        });

        // Click Save
        tl.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          onComplete: () => setIsSaved(true)
        });

        // Exit offscreen
        tl.to(cursorRef.current, {
          x: saveCoords.x + 80,
          y: saveCoords.y + 45,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.in'
        });
      };

      // Add delay to ensure DOM has computed layout positions
      const startTimeout = setTimeout(startCursorTimeline, 600);
      return () => clearTimeout(startTimeout);
    }, calendarWrapperRef);

    return () => ctx.revert();
  }, []);

  // ----------------------------------------------------
  // 3D CARD TILT ON MOUSEMOVE
  // ----------------------------------------------------
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Relative midpoint coordinates
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    // Maximum tilt angles (degrees)
    const tiltX = (midY - y) / 12;
    const tiltY = (x - midX) / 12;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 700,
      ease: 'power1.out',
      duration: 0.3
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.out',
      duration: 0.5
    });
  };

  return (
    <section id="services" className="bg-obsidian-surface py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden z-10">
      {/* Background glow matrix */}
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-solar-orange/5 rounded-full blur-[145px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-solar-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold">CORE CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Interactive Functional Artifacts
          </h2>
          <p className="text-slate-200 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            We do not build static marketing layouts. We engineer performant software components configured to elevate your brand value and drive lead conversion.
          </p>
        </div>

        {/* 3 Grid Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* CARD 1: DIAGNOSTIC SHUFFLER */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-obsidian-card/85 border border-white/15 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[460px] transition-all duration-300 hover:border-solar-orange/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
          >
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-orange/30 to-transparent group-hover:via-solar-orange transition-all duration-500"></div>

            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-solar-orange">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Conversion Engine</span>
              </div>
              <h3 className="text-2xl font-sans font-extrabold text-white">Custom Web Design</h3>
              <p className="text-xs text-slate-200/80 leading-relaxed font-sans">
                Lightning-fast, highly optimized web layouts designed exclusively for service businesses to turn visitors into phone calls and scheduled service calls.
              </p>
            </div>

            {/* Shuffler UI Element */}
            <div className="relative h-44 w-full mt-8 flex items-center justify-center">
              {shuffleCards.map((card, idx) => {
                let zIndex = 30 - idx * 10;
                let scale = 1 - idx * 0.05;
                let translateY = idx * 16;
                let opacity = 1 - idx * 0.25;

                return (
                  <div
                    key={card.id}
                    style={{
                      zIndex: zIndex,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity: opacity
                    }}
                    className="absolute w-full max-w-[280px] bg-obsidian-surface border border-white/15 rounded-2xl p-4 shadow-xl transition-all duration-500 ease-bounce-spring"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="font-mono text-[8px] font-bold text-solar-orange border border-solar-orange/30 px-2 py-0.5 rounded-full">{card.badge}</span>
                      <span className="font-mono text-[9px] text-emerald-400 font-bold">{card.metric}</span>
                    </div>
                    <span className="text-[11px] font-sans font-bold text-white block">{card.title}</span>
                    <span className="text-[9px] font-sans text-slate-200 block mt-1 leading-normal">{card.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CARD 2: TELEMETRY TYPEWRITER */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-obsidian-card/85 border border-white/15 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[460px] transition-all duration-300 hover:border-solar-yellow/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
          >
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-yellow/30 to-transparent group-hover:via-solar-yellow transition-all duration-500"></div>

            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-solar-yellow">
                <Terminal className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Telemetry Logs</span>
              </div>
              <h3 className="text-2xl font-sans font-extrabold text-white">AI Automation Flows</h3>
              <p className="text-xs text-slate-200/80 leading-relaxed font-sans">
                Never lose a lead to delay. Our system dispatch triggers automated SMS and emails in under 90 seconds to secure bookings.
              </p>
            </div>

            {/* Typewriter Terminal UI */}
            <div className="mt-8 bg-black/60 border border-white/10 rounded-2xl p-4 flex flex-col justify-between flex-grow font-mono text-[10px] text-solar-yellow overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">LIVE FEED</span>
                </div>
                <span className="text-[8px] text-slate-light/35">DISPATCH_OPERATIONAL</span>
              </div>

              {/* Typed Lines list */}
              <div className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar font-semibold">
                {typedLogs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed border-l border-white/5 pl-2">
                    {log}
                    {idx === typedLogs.length - 1 && currentLogIndex < logsPreset.length && (
                      <span className="typing-cursor"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: CURSOR PROTOCOL SCHEDULER */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-obsidian-card/85 border border-white/15 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[460px] transition-all duration-300 hover:border-solar-orange/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
          >
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-orange/30 to-transparent group-hover:via-solar-orange transition-all duration-500"></div>

            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-solar-orange">
                <CalendarRange className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Auto CRM System</span>
              </div>
              <h3 className="text-2xl font-sans font-extrabold text-white">Cursor Scheduler</h3>
              <p className="text-xs text-slate-200/80 leading-relaxed font-sans">
                A seamless pipeline dashboard that schedules bookings and tracks job states from initial click to closed invoice.
              </p>
            </div>

            {/* Calendar Grid UI (gsap animations will target cursorRef) */}
            <div 
              ref={calendarWrapperRef}
              className="mt-8 bg-obsidian-surface border border-white/15 rounded-2xl p-4 relative min-h-[200px] flex flex-col justify-between overflow-hidden select-none shadow-inner"
            >
              {/* Calendar Grid Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <span className="text-[9px] font-sans font-bold text-white uppercase tracking-wider">Weekly Schedule</span>
                <span className="text-[8px] font-mono text-slate-light/40 uppercase">June 2026</span>
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, idx) => {
                  const isTuesday = day === 'T' && idx === 2;
                  const isDayActive = isTuesday && activeDay === 'T';
                  return (
                    <div 
                      key={idx} 
                      ref={isTuesday ? tuesdayRef : null}
                      className={`h-9 border rounded-lg flex flex-col items-center justify-center transition-all duration-300
                        ${isDayActive 
                          ? 'bg-solar-orange border-solar-orange text-white scale-[1.05]' 
                          : 'bg-obsidian-card border-white/10 text-slate-200 hover:text-white hover:border-white/30'
                        }`}
                    >
                      <span className="text-[9px] font-mono font-bold block">{day}</span>
                      <span className="text-[8px] opacity-40 font-mono block">{14 + idx}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Save Button */}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-light/40">Select booking slot</span>
                <button
                  ref={saveBtnRef}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5
                    ${isSaved 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-solar-orange text-white'
                    }`}
                >
                  {isSaved ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Booked
                    </>
                  ) : (
                    'Save Appointment'
                  )}
                </button>
              </div>

              {/* Animated SVG Cursor */}
              <div 
                ref={cursorRef} 
                className="absolute pointer-events-none z-40 transform scale-100 origin-top-left"
                style={{ opacity: 0 }}
              >
                <MousePointer className="w-5 h-5 text-solar-orange fill-solar-orange drop-shadow-md" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
