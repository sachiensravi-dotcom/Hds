import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { 
  Smartphone, BarChart4, MapPin, Bot, ClipboardList, Star, 
  X, AlertTriangle, CheckCircle2, TrendingUp, Coins, Calendar
} from 'lucide-react';

export default function Services({ setCurrentRoute, selectedServiceId, setSelectedServiceId }) {
  const [activeDetailId, setActiveDetailId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedServiceId) {
      setActiveDetailId(selectedServiceId);
    }
  }, [selectedServiceId]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-title-fade', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.08, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // GSAP animation for Modal entrance when activeDetailId changes
  useEffect(() => {
    if (activeDetailId) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.modal-backdrop',
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo('.modal-content-box',
          { opacity: 0, scale: 0.92, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.05 }
        );
      });
      return () => ctx.revert();
    }
  }, [activeDetailId]);

  const serviceItems = [
    {
      id: "website",
      icon: <Smartphone className="w-8 h-8 text-solar-orange" />,
      name: "Custom Website Design",
      tag: "CONVERSION BLUEPRINT",
      desc: "Modern responsive websites custom-engineered specifically to convert visitors into phone calls and scheduled service calls.",
      benefits: ["Optimized lead capture forms", "Sub-second mobile loading speeds", "Fully responsive design elements"],
      process: "Bespoke wireframing ➔ Lightweight frontend coding ➔ Conversion hook integration",
      outcome: "2.5x increase in visitor-to-booking conversion rate.",
      accent: "orange",
      detailedExplanation: {
        problem: "Most local business websites are built on bloated, slow templates (WordPress/Wix). They take 4-6 seconds to load on mobile. For every second of delay, 10% of users bounce. You are wasting active search visitors and valuable ad spend directly to competitors.",
        methodology: [
          "Complete asset audit & speed bottlenecks identification.",
          "Mobile-first, conversion-engineered UX blueprint mapping.",
          "Ultra-lightweight React/Vite layout styling & optimization.",
          "High-performance deployment on global CDN edge networks."
        ],
        telemetry: "Mobile Speed: 100/100, Bounce Rate: <15%, Time-to-Interactive: <0.4s",
        roi: "$3,200+/month in recaptured customer bookings"
      }
    },
    {
      id: "seo",
      icon: <BarChart4 className="w-8 h-8 text-solar-yellow" />,
      name: "Local Search Optimization (SEO)",
      tag: "ORGANIC TELEMETRY",
      desc: "Increase search visibility and ranking authority in your local trade radius to pull in homeowners needing immediate repairs.",
      benefits: ["High-intent search keyword rankings", "Optimized content hubs", "Backlink authority architecture"],
      process: "Local competitor auditing ➔ Keyword mapping ➔ Content construction",
      outcome: "Page-1 organic ranking for core trade keywords in 90 days.",
      accent: "yellow",
      detailedExplanation: {
        problem: "Competitors steal over 80% of local search volume because your website doesn't appear on Google's page 1. You are forced to pay $50-$150+ per lead to third-party aggregators while competitors generate calls for free.",
        methodology: [
          "Competitor keyword gap analysis & search volume auditing.",
          "Structuring local landing pages for all primary service towns.",
          "Semantic structural schema writing & programmatic styling.",
          "High-authority local citation building & domain authority growth."
        ],
        telemetry: "Top 3 positions for 15+ high-intent local trade keywords",
        roi: "6.5x increase in monthly organic click-to-lead volume"
      }
    },
    {
      id: "maps",
      icon: <MapPin className="w-8 h-8 text-solar-orange" />,
      name: "Google Business Optimization",
      tag: "LOCAL SWEEP PROTOCOL",
      desc: "Configure, rank, and dominate the local Google 3-Map pack where over 60% of regional clicks happen.",
      benefits: ["Correct categories and schema metadata", "Local geofenced business citation sync", "Visual review response templates"],
      process: "GBP listing audit ➔ Citation cleanups ➔ Photo metadata tagging",
      outcome: "120% increase in direct calls and direction clicks from Google Maps.",
      accent: "orange",
      detailedExplanation: {
        problem: "Over 60% of mobile local services search clicks happen inside Google Maps. If your listing sits in 4th place or lower, your business is virtually invisible to homeowners facing immediate service emergencies.",
        methodology: [
          "Audit listing configuration, categories, and business parameters.",
          "Verify and sync NAP database parameters across directories.",
          "Optimize listing photos with local geotags and metadata.",
          "Implement automated response templates to signal active listing status."
        ],
        telemetry: "Map Pack top 3 ranking in 85% of target radius grids",
        roi: "120% increase in direct inbound click-to-call conversions"
      }
    },
    {
      id: "automation",
      icon: <Bot className="w-8 h-8 text-solar-yellow" />,
      name: "AI Lead Automation",
      tag: "TELEMETRY DISPATCH",
      desc: "Automated instant follow-up sequences via SMS and email that respond to leads within 60 seconds, day or night.",
      benefits: ["Instant text reply dispatch", "Smart qualification chatbot assistants", "Automated booking sequences"],
      process: "API channel setup ➔ Dispatch workflow build ➔ Test qualification logs",
      outcome: "Zero missed leads. Warm follow-ups triggered in under 95 seconds.",
      accent: "yellow",
      detailedExplanation: {
        problem: "Taking over 5 minutes to follow up with a lead decreases conversion odds by 80%. When a homeowner fills out your website form and gets no answer, they immediately click the next competitor listing.",
        methodology: [
          "Connect web forms, GBP chat, and Facebook page to central API.",
          "Set up instant SMS dispatch triggers responding in 45 seconds.",
          "Build AI conversational scripts for appointment pre-qualification.",
          "Implement calendar auto-sync for qualified booked calls."
        ],
        telemetry: "Lead response latency: <60s, Response rate: 100%",
        roi: "$4,500+/month recaptured from hot leads going cold"
      }
    },
    {
      id: "pipeline",
      icon: <ClipboardList className="w-8 h-8 text-solar-orange" />,
      name: "CRM & Pipeline Management",
      tag: "REVENUE PROTOCOL",
      desc: "Visual dashboard setups showing lead values, appointment pipelines, and conversion percentages.",
      benefits: ["Clear visual sales dashboard", "Automatic client notifications", "Staff assignment scheduling integrations"],
      process: "Sales pipeline setup ➔ Notification writing ➔ Staff scheduling sync",
      outcome: "Complete visibility into closing ratios and revenue forecasting.",
      accent: "orange",
      detailedExplanation: {
        problem: "Without a unified customer tracker, customer details are scattered across emails, text threads, and papers. Leads fall through the cracks, and sales staff fail to follow up on outstanding quotes.",
        methodology: [
          "Deploy custom visual CRM board tracking leads from source to sale.",
          "Integrate automated quote follow-up sequences via SMS/Email.",
          "Configure internal notification triggers for dispatchers & technicians.",
          "Build performance reporting dashboards tracking crew closing rates."
        ],
        telemetry: "Zero lost sales records, +25% conversion on pending quotes",
        roi: "Save 15+ administrative hours/week, 30% closing rate boost"
      }
    },
    {
      id: "reviews",
      icon: <Star className="w-8 h-8 text-solar-yellow" />,
      name: "Review & Reputation Management",
      tag: "FEEDBACK LOOP",
      desc: "Automated SMS/email request campaigns sent immediately upon job completion to secure 5-star Google reviews.",
      benefits: ["Automated requests after completed tickets", "Smart dashboard tracking reviews", "Review widget embed on site"],
      process: "CRM trigger connection ➔ Review template design ➔ Feedback widget install",
      outcome: "30+ new five-star reviews within the first 60 days.",
      accent: "yellow",
      detailedExplanation: {
        problem: "In local services, reviews dictate buyer trust. A 4.2-star rating converts half the customers of a 4.8-star competitor. Requesting reviews manually is forgotten 90% of the time.",
        methodology: [
          "Link field service platform (Jobber/ServiceTitan) completion hook.",
          "Configure instant SMS review request templates upon job close.",
          "Build feedback filtering logic to flag poor reviews internally first.",
          "Install automated review-streaming widget on the website home page."
        ],
        telemetry: "Review response rates: +450%, Social proof score: 4.8+",
        roi: "35% conversion lift across all traffic channels via trust proof"
      }
    }
  ];

  const activeService = serviceItems.find(item => item.id === activeDetailId);

  const handleClose = () => {
    // GSAP exit animation
    gsap.to('.modal-content-box', {
      opacity: 0,
      scale: 0.92,
      y: 30,
      duration: 0.3,
      ease: 'power3.in'
    });
    gsap.to('.modal-backdrop', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setActiveDetailId(null);
        setSelectedServiceId(null);
      }
    });
  };

  return (
    <div ref={containerRef} className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden z-10">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[125px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Services Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="services-title-fade font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">OUR PROTOCOLS</span>
          <h1 className="services-title-fade text-4xl md:text-6xl font-sans font-black tracking-tight text-white uppercase leading-none">
            Growth Systems Built To Scale.
          </h1>
          <p className="services-title-fade text-slate-200 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            We deploy complete local growth systems. Every feature is coded for sub-second speeds, high conversion, and automated lead handling.
          </p>
        </div>

        {/* Services Grid (6 services) */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {serviceItems.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card bg-obsidian-card/90 border border-white/15 rounded-[2.5rem] p-8 md:p-10 space-y-6 flex flex-col justify-between hover:border-solar-orange/40 transition-all duration-300 shadow-2xl shadow-black/40 relative group backdrop-blur-md hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] cursor-pointer"
              onClick={() => setActiveDetailId(service.id)}
            >
              {/* Gradient edge */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-solar-orange/50 transition-all duration-500"></div>

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-solar-orange tracking-widest uppercase font-bold block">{service.tag}</span>
                    <h2 className="text-xl md:text-2xl font-sans font-extrabold text-white uppercase tracking-tight">{service.name}</h2>
                  </div>
                  <div className="p-3 bg-obsidian-surface rounded-2xl border border-white/10 shadow-inner">
                    {service.icon}
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed font-sans">{service.desc}</p>

                {/* Benefits */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-solar-yellow uppercase font-bold tracking-wider block">System Benefits:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    {service.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[10px] text-slate-200/80 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar-orange mt-1.5 shrink-0"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Process */}
                <div className="bg-obsidian-surface/90 rounded-2xl p-4 border border-white/10 font-mono text-[9px] text-slate-200 space-y-1 shadow-inner">
                  <span className="text-solar-orange/80 font-bold uppercase block">Methodology:</span>
                  <p>{service.process}</p>
                </div>
              </div>

              {/* Expected Outcome & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[8px] font-mono text-slate-200/50 uppercase block">Expected Metric Outcome</span>
                  <span className="text-xs font-sans font-black text-emerald-400 mt-0.5 block">{service.outcome}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid opening card details
                    setActiveDetailId(service.id);
                  }}
                  className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span className="slide-layer"></span>
                  Inspect Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL EXPLANATION OVERLAY */}
      {activeService && (
        <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="modal-content-box bg-obsidian-card border border-white/15 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl relative">
            {/* Top gradient highlights */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-solar-orange to-solar-yellow"></div>
            
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-obsidian-surface hover:border-white/30 text-slate-200 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="p-8 md:p-10 space-y-6 text-left max-h-[85vh] overflow-y-auto no-scrollbar">
              
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-obsidian-surface rounded-2xl border border-white/10">
                  {activeService.icon}
                </div>
                <div>
                  <span className="font-mono text-[9px] text-solar-orange tracking-widest uppercase font-bold block">{activeService.tag}</span>
                  <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight">{activeService.name}</h3>
                </div>
              </div>

              {/* The Problem (Missed Opportunity) */}
              <div className="bg-red-500/[0.04] border border-red-500/25 rounded-2xl p-5 space-y-2">
                <span className="font-mono text-[9px] text-red-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> THE REVENUE LEAK (Opportunity Cost)
                </span>
                <p className="text-xs text-slate-200/95 leading-relaxed font-sans font-medium">
                  {activeService.detailedExplanation.problem}
                </p>
              </div>

              {/* Hyperion Protocol (Methodology) */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-solar-yellow font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> DEPLOYMENT METHODOLOGY
                </span>
                <ol className="space-y-2.5">
                  {activeService.detailedExplanation.methodology.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-slate-200 leading-relaxed font-sans">
                      <span className="font-mono text-[10px] text-solar-orange font-black bg-solar-orange/10 border border-solar-orange/20 rounded-lg w-5 h-5 flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Telemetry Metric & Estimated ROI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="bg-obsidian-surface rounded-2xl p-4 border border-white/5 space-y-1">
                  <span className="font-mono text-[9px] text-slate-200/40 uppercase block">TELEMETRY KPI INDEX</span>
                  <span className="text-xs font-sans font-bold text-emerald-400 block leading-tight">
                    {activeService.detailedExplanation.telemetry}
                  </span>
                </div>
                <div className="bg-obsidian-surface rounded-2xl p-4 border border-white/5 space-y-1">
                  <span className="font-mono text-[9px] text-slate-200/40 uppercase block">ESTIMATED GROWTH ROI</span>
                  <span className="text-xs font-sans font-bold text-solar-yellow block leading-tight flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5" /> {activeService.detailedExplanation.roi}
                  </span>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    handleClose();
                    setCurrentRoute('book');
                  }}
                  className="btn-magnetic btn-slide-bg flex-1 group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider cursor-pointer text-center"
                >
                  <span className="slide-layer"></span>
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Book Strategy Deployment
                  </span>
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] rounded-2xl transition-all cursor-pointer text-center"
                >
                  Close Blueprint
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
