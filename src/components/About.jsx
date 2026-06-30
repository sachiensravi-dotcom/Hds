import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Eye, Shield, Target, Award, Compass, HeartHandshake } from 'lucide-react';

export default function About({ setCurrentRoute }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-fade', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.card-scale',
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1, 
          stagger: 0.12, 
          duration: 1, 
          ease: 'back.out(1.1)',
          scrollTrigger: {
            trigger: '.cards-grid',
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const advantages = [
    { icon: <HeartHandshake className="w-6 h-6 text-solar-orange" />, title: "Transparent Communication", desc: "No complex jargon or hidden reports. We present clear conversion metrics, lead pipelines, and monthly revenue summaries directly." },
    { icon: <Target className="w-6 h-6 text-solar-yellow" />, title: "Results-Focused Approach", desc: "We align our incentives with your cash flow. We do not count clicks or impressions; we optimize for booked and completed appointments." },
    { icon: <Shield className="w-6 h-6 text-solar-orange" />, title: "Customized Growth Systems", desc: "No cookie-cutter templates. We analyze your local trade territory, average job ticket values, and operational goals to configure your setup." },
    { icon: <Award className="w-6 h-6 text-solar-yellow" />, title: "Modern AI Automation", desc: "We equip local services with the same advanced automation tooling used by high-end tech firms to follow up and schedule sales." }
  ];

  return (
    <div ref={containerRef} className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* About Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="about-fade font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">OUR POSITIONING</span>
            <h1 className="about-fade text-4xl md:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
              Your Digital Growth Partner. <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">Not Just An Agency.</span>
            </h1>
            <p className="about-fade text-slate-200 font-sans text-sm md:text-base leading-relaxed max-w-xl">
              Hyperion Digital Solutions was founded to bridge the technology gap for local trade and service companies. Most marketing groups charge monthly retainers for impressions and generic posts. We construct high-converting digital assets and automated CRM funnels that secure direct service sales.
            </p>
          </div>
          <div className="about-fade lg:col-span-5 relative w-full h-[320px] rounded-3xl overflow-hidden border border-white/15 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Hyperion Team Collaborative Session" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/20 to-transparent"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-obsidian-card border border-white/15 rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl shadow-black/55 backdrop-blur-md">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-orange to-transparent"></div>
          <Compass className="w-10 h-10 text-solar-orange mx-auto animate-pulse shadow-md" />
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white uppercase tracking-tight">Our Mission</h2>
          <p className="text-slate-200 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            "To empower local plumbing, HVAC, electrical, and medical practices to compete and win against massive national franchises by deploying modern custom websites, intelligent local SEO, and automated lead handling dispatch systems."
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-solar-yellow tracking-widest uppercase font-bold">COMPETITIVE DISTINCTION</span>
            <h2 className="text-3xl md:text-4xl font-sans font-black text-white uppercase">Why Local Businesses Choose Hyperion</h2>
          </div>

          <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, idx) => (
              <div 
                key={idx} 
                className="card-scale bg-obsidian-card/90 border border-white/15 rounded-[2rem] p-8 space-y-4 shadow-2xl shadow-black/40 flex flex-col items-start text-left hover:border-solar-orange/50 transition-all duration-300 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
              >
                <div className="p-3 bg-obsidian-surface rounded-2xl border border-white/10 shadow-inner">
                  {adv.icon}
                </div>
                <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-wide">{adv.title}</h3>
                <p className="text-xs text-slate-200/80 font-sans leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA link */}
        <div className="text-center pt-8">
          <button 
            onClick={() => setCurrentRoute('book')}
            className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer shadow-lg"
          >
            <span className="slide-layer"></span>
            Establish Your Local Growth Protocol
          </button>
        </div>

      </div>
    </div>
  );
}
