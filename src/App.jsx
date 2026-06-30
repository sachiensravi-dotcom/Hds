import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LeakCalculator from './components/LeakCalculator';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import BookingSystem from './components/BookingSystem';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

import { AlertTriangle, Clock3, EyeOff, MessageSquareCode, ShieldAlert, Users, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom Count Up Counter Component
function ScrollCounter({ endValue, prefix = "", suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const endVal = parseInt(endValue.replace(/[^0-9]/g, ''));
    
    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(obj, {
          val: endVal,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          }
        });
      }
    });

    return () => trigger.kill();
  }, [endValue, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-mono font-black text-white tracking-tight">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // home, about, services, contact, book
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentRoute]);

  // Background Halo GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.halo-bg-1',
        { x: -30, y: -40, rotation: 0, scale: 0.95 },
        {
          x: 40,
          y: 40,
          rotation: 360,
          scale: 1.05,
          duration: 35,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      );
      gsap.fromTo('.halo-bg-2',
        { x: 30, y: 50, rotation: 0, scale: 1.05 },
        {
          x: -40,
          y: -50,
          rotation: -360,
          scale: 0.95,
          duration: 40,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      );
      gsap.fromTo('.halo-bg-3',
        { x: -20, y: 30, rotation: 0, scale: 0.98 },
        {
          x: 30,
          y: -30,
          rotation: 180,
          scale: 1.03,
          duration: 38,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Testimonials state
  const testimonials = [
    {
      quote: "The AI follow-up loop is pure magic. Within 90 seconds of a homeowner filling out our site form, they receive a qualified SMS text. We've booked 42 more high-ticket service calls this month alone.",
      author: "Mark Stevenson",
      title: "Founder, Apex Plumbing & Drain",
      avatarBg: "bg-solar-orange/10 text-solar-orange border-solar-orange/30"
    },
    {
      quote: "Hyperion rebuilt our entire patient portal. Our mobile page load speed went from 4 seconds to instantaneous. Our patient booking rate doubled within 30 days of deployment.",
      author: "Dr. Sarah Jenkins",
      title: "VP Operations, Elite Dental Practices",
      avatarBg: "bg-solar-yellow/10 text-solar-yellow border-solar-yellow/30"
    },
    {
      quote: "Their Google Business optimization actually works. We moved to the top of Google Maps in our city and direct inbound calls have increased by 140%. Excellent growth partners.",
      author: "Robert Miller",
      title: "Owner, Prime HVAC Services",
      avatarBg: "bg-solar-orange/10 text-solar-orange border-solar-orange/30"
    }
  ];
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-obsidian-base text-slate-light relative selection:bg-solar-orange/30 selection:text-white">
      
      {/* Animated Background Halos */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="halo-bg-1 absolute top-[5%] right-[-10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] opacity-[0.18] mix-blend-screen">
          <img src="/hero-asset.png" alt="Halo Glow" className="w-full h-full object-contain" />
        </div>
        <div className="halo-bg-2 absolute top-[35%] left-[-15%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-[0.14] mix-blend-screen">
          <img src="/hero-asset.png" alt="Halo Glow" className="w-full h-full object-contain" />
        </div>
        <div className="halo-bg-3 absolute bottom-[10%] right-[-12%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] opacity-[0.16] mix-blend-screen">
          <img src="/hero-asset.png" alt="Halo Glow" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Global Navbar */}
      <Navbar 
        currentRoute={currentRoute} 
        setCurrentRoute={setCurrentRoute} 
        setSelectedServiceId={setSelectedServiceId}
      />

      {/* Pages Container */}
      <main className="transition-opacity duration-300 relative z-10">
        
        {currentRoute === 'home' && (
          <div className="space-y-0">
            
            {/* 1. Cinematic Hero */}
            <Hero setCurrentRoute={setCurrentRoute} />

            {/* 2. Interactive Features (3 Micro UIs) */}
            <Features />

            {/* 2.5 Revenue Leakage Simulator (Highlighting Missed Opportunities) */}
            <LeakCalculator setCurrentRoute={setCurrentRoute} />

            {/* 3. Problem Section */}
            <section className="bg-obsidian-surface py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
              {/* Glowing Background Blobs */}
              <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-solar-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative z-10 max-w-7xl mx-auto space-y-20">
                
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold">THE LEAK INDEX</span>
                  <h2 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                    Where Local Services Lose Hard Cash
                  </h2>
                  <p className="text-slate-200 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
                    Most companies waste thousands on vanity clicks while ignoring severe leaks in their booking pipeline. Let's analyze where your capital is slipping away:
                  </p>
                </div>

                {/* Problem Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                  
                  {/* Problem 1 */}
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                        <span className="font-mono text-[9px] text-red-500 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">SEVERE</span>
                      </div>
                      <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight leading-snug">Website Friction</h3>
                      <p className="text-xs text-slate-200/70 font-sans leading-relaxed">
                        Slow page loads and static layouts cause 40% of mobile users to exit and call your competitors.
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-red-400 font-bold block mb-2">$2,400+ Lost / Mo</span>
                      <span className="font-mono text-[9px] text-red-500/80 font-bold bg-red-500/5 border border-red-500/10 py-1 px-3 rounded-full uppercase tracking-wider block text-center">Visitor Bounce: 42%</span>
                    </div>
                  </div>

                  {/* Problem 2 */}
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Clock3 className="w-8 h-8 text-red-500" />
                        <span className="font-mono text-[9px] text-red-500 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">CRITICAL</span>
                      </div>
                      <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight leading-snug">Response Decay</h3>
                      <p className="text-xs text-slate-200/70 font-sans leading-relaxed">
                        If you take more than 5 minutes to follow up, the lead goes cold. Homeowners want instant booking.
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-red-400 font-bold block mb-2">80% Conversion Loss</span>
                      <span className="font-mono text-[9px] text-red-500/80 font-bold bg-red-500/5 border border-red-500/10 py-1 px-3 rounded-full uppercase tracking-wider block text-center">Delay Decay: 8x</span>
                    </div>
                  </div>

                  {/* Problem 3 */}
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <EyeOff className="w-8 h-8 text-red-500" />
                        <span className="font-mono text-[9px] text-red-500 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">HIGH</span>
                      </div>
                      <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight leading-snug">SEO Map Isolation</h3>
                      <p className="text-xs text-slate-200/70 font-sans leading-relaxed">
                        If your business is outside Google Maps top 3, you lose over 60% of search phone calls.
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-red-400 font-bold block mb-2">62% Clicks Missed</span>
                      <span className="font-mono text-[9px] text-red-500/80 font-bold bg-red-500/5 border border-red-500/10 py-1 px-3 rounded-full uppercase tracking-wider block text-center">Map Leaks: Massive</span>
                    </div>
                  </div>

                  {/* Problem 4 */}
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <MessageSquareCode className="w-8 h-8 text-red-500" />
                        <span className="font-mono text-[9px] text-red-500 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">HIGH</span>
                      </div>
                      <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight leading-snug">Friction Scheduling</h3>
                      <p className="text-xs text-slate-200/70 font-sans leading-relaxed">
                        Forcing prospects to fill forms and wait hours for a callback, instead of booking slot instantly.
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-red-400 font-bold block mb-2">35% Abandonment</span>
                      <span className="font-mono text-[9px] text-red-500/80 font-bold bg-red-500/5 border border-red-500/10 py-1 px-3 rounded-full uppercase tracking-wider block text-center">Booking Lag: Hours</span>
                    </div>
                  </div>

                  {/* Problem 5 */}
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 space-y-4 flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 shadow-xl group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <ShieldAlert className="w-8 h-8 text-red-500" />
                        <span className="font-mono text-[9px] text-red-500 font-bold bg-red-500/10 px-2.5 py-0.5 rounded-full">CRITICAL</span>
                      </div>
                      <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight leading-snug">Pipeline Leaks</h3>
                      <p className="text-xs text-slate-200/70 font-sans leading-relaxed">
                        Leads are lost in manual texts, emails, and papers, with zero review generation loops.
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-red-400 font-bold block mb-2">$30,000+ Lost / Year</span>
                      <span className="font-mono text-[9px] text-red-500/80 font-bold bg-red-500/5 border border-red-500/10 py-1 px-3 rounded-full uppercase tracking-wider block text-center">Pipeline Error: 30%</span>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* 4. Philosophy (Manifesto Reveal) */}
            <Philosophy />

            {/* 5. Protocol (Sticky Stacking Cards) */}
            <Protocol />

            {/* 6. Results Section (Animated Counters) */}
            <section className="bg-obsidian-base py-32 px-6 md:px-12 border-t border-b border-white/10 relative overflow-hidden">
              {/* Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-solar-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

              <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold block">VERIFIED PERFORMANCE</span>
                  <h2 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">Growth Telemetry Metrics</h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 space-y-2 hover:border-solar-orange/30 shadow-lg transition-all duration-300">
                    <Users className="w-6 h-6 text-solar-orange mx-auto mb-2" />
                    <ScrollCounter endValue="14850" suffix="+" />
                    <span className="text-[10px] font-mono text-slate-200/50 uppercase tracking-wider block pt-2">Leads Generated</span>
                  </div>

                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 space-y-2 hover:border-solar-yellow/30 shadow-lg transition-all duration-300">
                    <CalendarCheck className="w-6 h-6 text-solar-yellow mx-auto mb-2" />
                    <ScrollCounter endValue="4120" suffix="+" />
                    <span className="text-[10px] font-mono text-slate-200/50 uppercase tracking-wider block pt-2">Appointments Booked</span>
                  </div>

                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 space-y-2 hover:border-solar-orange/30 shadow-lg transition-all duration-300">
                    <DollarSign className="w-6 h-6 text-solar-orange mx-auto mb-2" />
                    <ScrollCounter endValue="8400000" prefix="$" suffix="+" />
                    <span className="text-[10px] font-mono text-slate-200/50 uppercase tracking-wider block pt-2">Revenue Influenced</span>
                  </div>

                  <div className="bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 space-y-2 hover:border-solar-yellow/30 shadow-lg transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-solar-yellow mx-auto mb-2" />
                    <ScrollCounter endValue="180" suffix="+" />
                    <span className="text-[10px] font-mono text-slate-200/50 uppercase tracking-wider block pt-2">Businesses Helped</span>
                  </div>
                </div>

              </div>
            </section>

            {/* 7. How It Works Section */}
            <section className="bg-obsidian-surface py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden z-10">
              {/* Ambient Background Glows */}
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-solar-orange/8 rounded-full blur-[140px] pointer-events-none"></div>
              <div className="absolute bottom-1/3 right-10 w-[250px] h-[250px] bg-solar-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">OPERATIONAL BLUEPRINT</span>
                  <h2 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">How the growth system performs</h2>
                </div>

                {/* Timeline Grid */}
                <div className="max-w-4xl mx-auto relative pt-4 text-left">
                  {/* Glowing Vertical Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-solar-orange via-solar-yellow to-transparent"></div>

                  <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="relative pl-16 group">
                      <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-solar-orange border-4 border-obsidian-surface group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#E05624]"></div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] text-solar-orange font-bold uppercase tracking-widest block">STAGE 01 // ACQUISITION</span>
                        <h3 className="text-xl font-sans font-extrabold text-white uppercase tracking-tight">Attract Inbound Leads</h3>
                        <p className="text-xs text-slate-200/70 font-sans leading-relaxed max-w-xl">
                          We optimize your local search parameters and Google Business listings, establishing organic top-ranking visibility to pull in active prospects seeking emergency and scheduled trade services.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-16 group">
                      <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-solar-orange border-4 border-obsidian-surface group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#E05624]"></div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] text-solar-orange font-bold uppercase tracking-widest block">STAGE 02 // CAPTURE</span>
                        <h3 className="text-xl font-sans font-extrabold text-white uppercase tracking-tight">Capture High-Intent Traffic</h3>
                        <p className="text-xs text-slate-200/70 font-sans leading-relaxed max-w-xl">
                          Prospects land on custom-coded, sub-second loading React websites. Layout conversion blueprints capture user specifications and phone calls immediately, with zero code bloat.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-16 group">
                      <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-solar-yellow border-4 border-obsidian-surface group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#F59E0B]"></div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] text-solar-yellow font-bold uppercase tracking-widest block">STAGE 03 // DISPATCH</span>
                        <h3 className="text-xl font-sans font-extrabold text-white uppercase tracking-tight">Automate Instant Follow-Up</h3>
                        <p className="text-xs text-slate-200/70 font-sans leading-relaxed max-w-xl">
                          Our automated dispatch triggers immediate SMS messages and qualified email replies inside 60 seconds. Prospects are qualified and kept warm while they are highly motivated.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative pl-16 group">
                      <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-solar-yellow border-4 border-obsidian-surface group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#F59E0B]"></div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] text-solar-yellow font-bold uppercase tracking-widest block">STAGE 04 // RESOLUTION</span>
                        <h3 className="text-xl font-sans font-extrabold text-white uppercase tracking-tight">Book Strategy Appointments</h3>
                        <p className="text-xs text-slate-200/70 font-sans leading-relaxed max-w-xl">
                          Qualified leads book themselves directly into your calendar scheduler. Your team receives confirmed dates, times, and business details, completely hands-off.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 8. Testimonials Section (Modern Carousel) */}
            <section className="bg-obsidian-base py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
              {/* Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-solar-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

              <div className="relative z-10 max-w-5xl mx-auto space-y-16">
                
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold block">PARTNER REVIEWS</span>
                  <h2 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">Client Reviews</h2>
                </div>

                {/* Testimonial Active Display Card */}
                <div className="relative min-h-[260px] md:min-h-[220px] bg-obsidian-card/80 backdrop-blur-md border border-white/15 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between text-left max-w-4xl mx-auto overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-solar-orange to-transparent"></div>
                  
                  <p className="text-sm md:text-lg italic font-medium font-sans text-white/95 leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-black text-xs border ${testimonials[activeTestimonial].avatarBg}`}>
                        {testimonials[activeTestimonial].author.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div>
                        <span className="text-xs font-sans font-black text-white block">{testimonials[activeTestimonial].author}</span>
                        <span className="text-[10px] font-mono text-slate-200/40 block mt-0.5">{testimonials[activeTestimonial].title}</span>
                      </div>
                    </div>

                    {/* Carousel Nav indicator dots */}
                    <div className="flex gap-2.5">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTestimonial(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                          ${activeTestimonial === idx 
                            ? 'bg-solar-orange w-6' 
                            : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 9. Final CTA Section */}
            <section className="bg-obsidian-surface py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
              {/* Ambient Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
              <div className="absolute bottom-4 right-10 w-[200px] h-[200px] bg-solar-yellow/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <span className="font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">REVENUE PROTOCOL ACTIVATE</span>
                
                <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight text-white uppercase leading-none">
                  Ready to Grow Your Business?
                </h2>
                
                <p className="text-slate-200/80 font-sans text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                  Lock in your custom growth strategy call audit today. Discover leaks in your pipeline and optimize your client conversion model.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={() => setCurrentRoute('book')}
                    className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer shadow-lg"
                  >
                    <span className="slide-layer"></span>
                    Book a Strategy Call
                  </button>
                  <button 
                    onClick={() => setCurrentRoute('contact')}
                    className="link-lift flex items-center justify-center gap-1.5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:text-solar-orange border border-white/10 hover:border-solar-orange/50 rounded-full transition-all cursor-pointer bg-white/[0.02]"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {currentRoute === 'about' && (
          <About setCurrentRoute={setCurrentRoute} />
        )}

        {currentRoute === 'services' && (
          <Services 
            setCurrentRoute={setCurrentRoute} 
            selectedServiceId={selectedServiceId} 
            setSelectedServiceId={setSelectedServiceId}
          />
        )}

        {currentRoute === 'contact' && (
          <Contact setCurrentRoute={setCurrentRoute} />
        )}

        {currentRoute === 'book' && (
          <BookingSystem setCurrentRoute={setCurrentRoute} />
        )}

        {currentRoute === 'privacy' && (
          <PrivacyPolicy setCurrentRoute={setCurrentRoute} />
        )}

        {currentRoute === 'terms' && (
          <TermsOfService setCurrentRoute={setCurrentRoute} />
        )}

      </main>

      {/* Global Footer */}
      <Footer setCurrentRoute={setCurrentRoute} />

    </div>
  );
}

export default App;
