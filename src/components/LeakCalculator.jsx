import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AlertCircle, TrendingUp, DollarSign, Calendar, RefreshCw } from 'lucide-react';

export default function LeakCalculator({ setCurrentRoute }) {
  const [ticketValue, setTicketValue] = useState(250); // $250 avg job value
  const [leadVolume, setLeadVolume] = useState(80); // 80 leads per month
  const [responseDelay, setResponseDelay] = useState("1-2 hours"); // 1-2 hours delay
  const [closeRate, setCloseRate] = useState(20); // 20% booking close rate

  const [leakedLeads, setLeakedLeads] = useState(0);
  const [lostMonthly, setLostMonthly] = useState(0);
  const [lostAnnual, setLostAnnual] = useState(0);
  const [potentialRecapture, setPotentialRecapture] = useState(0);

  const containerRef = useRef(null);

  // Response decay coefficients based on marketing data
  // (Instant = 0%, 5-15m = 30% decay, 1-2h = 60% decay, Next day = 85% decay)
  const getDecayFactor = (delay) => {
    switch (delay) {
      case "Instant (<60s)": return 0.0;
      case "5-15 mins": return 0.3;
      case "1-2 hours": return 0.6;
      case "Next day": return 0.85;
      default: return 0.6;
    }
  };

  useEffect(() => {
    const decay = getDecayFactor(responseDelay);
    const closeRateFraction = closeRate / 100;
    
    // Leaked Leads = Total Leads * Decay factor * Closing rate
    const calculatedLeakedLeads = Math.round(leadVolume * decay * closeRateFraction * 10) / 10;
    const calculatedLostMonthly = Math.round(calculatedLeakedLeads * ticketValue);
    const calculatedLostAnnual = calculatedLostMonthly * 12;
    // We recapture 90% of lost leads with our sub-60s AI and conversion templates
    const calculatedRecapture = Math.round(calculatedLostMonthly * 0.9);

    setLeakedLeads(calculatedLeakedLeads);
    setLostMonthly(calculatedLostMonthly);
    setLostAnnual(calculatedLostAnnual);
    setPotentialRecapture(calculatedRecapture);

    // Minor bounce on calculation text update
    gsap.fromTo('.leak-readout', 
      { scale: 0.98, opacity: 0.8 },
      { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
  }, [ticketValue, leadVolume, responseDelay, closeRate]);

  useEffect(() => {
    // Entrance animation when section scrolls in
    const ctx = gsap.context(() => {
      gsap.fromTo('.calculator-panel',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-obsidian-base py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden z-10"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solar-orange/8 rounded-full blur-[145px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold">REVENUE LEAKAGE AUDIT</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Diagnose Your Missed Opportunities
          </h2>
          <p className="text-slate-200 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Most local trade businesses lose 30% to 80% of their inbound digital leads due to slow response times and sub-optimal landing pages. Use our simulator to calculate your lost revenue.
          </p>
        </div>

        {/* Calculator Panel */}
        <div className="calculator-panel grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-obsidian-surface/90 border border-white/15 rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-black/50 relative overflow-hidden backdrop-blur-md">
          
          {/* Top border ambient indicator line */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-solar-orange to-transparent"></div>

          {/* Left Inputs (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="font-mono text-[9px] text-solar-orange tracking-widest font-bold uppercase block">DIAGNOSTIC CRITERIA</span>

            {/* Input 1: Avg Ticket Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans font-bold text-white uppercase">Average Ticket / Job Value</span>
                <span className="font-mono font-bold text-solar-orange text-sm">${ticketValue.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="50"
                value={ticketValue}
                onChange={(e) => setTicketValue(Number(e.target.value))}
                className="w-full h-1 bg-obsidian-card rounded-lg appearance-none cursor-pointer accent-solar-orange"
              />
              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                <span>$100 (Service Call)</span>
                <span>$5,000 (System Install)</span>
              </div>
            </div>

            {/* Input 2: Monthly Lead Volume */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans font-bold text-white uppercase">Monthly Leads Received</span>
                <span className="font-mono font-bold text-solar-orange text-sm">{leadVolume} Leads</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="400" 
                step="10"
                value={leadVolume}
                onChange={(e) => setLeadVolume(Number(e.target.value))}
                className="w-full h-1 bg-obsidian-card rounded-lg appearance-none cursor-pointer accent-solar-orange"
              />
              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                <span>10 Leads / Mo</span>
                <span>400 Leads / Mo</span>
              </div>
            </div>

            {/* Input 3: Response Delay (Select Dropdown) */}
            <div className="space-y-3">
              <label className="text-xs font-sans font-bold text-white uppercase block">Average Lead Response Delay</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Instant (<60s)", "5-15 mins", "1-2 hours", "Next day"].map((delay) => {
                  const isActive = responseDelay === delay;
                  return (
                    <button
                      key={delay}
                      type="button"
                      onClick={() => setResponseDelay(delay)}
                      className={`py-3 px-2 border rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer focus:outline-none text-center
                        ${isActive 
                          ? 'bg-solar-orange/10 border-solar-orange text-solar-orange scale-[1.02]' 
                          : 'bg-obsidian-card border-white/10 text-slate-200 hover:border-solar-orange/30 hover:text-white'
                        }`}
                    >
                      {delay}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 4: Closing / Booking rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans font-bold text-white uppercase">Current Booking Close Rate</span>
                <span className="font-mono font-bold text-solar-orange text-sm">{closeRate}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="60" 
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-1 bg-obsidian-card rounded-lg appearance-none cursor-pointer accent-solar-orange"
              />
              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                <span>5% Close Ratio</span>
                <span>60% Close Ratio</span>
              </div>
            </div>

          </div>

          {/* Right Readouts (5 Columns) */}
          <div className="lg:col-span-5 w-full bg-obsidian-card/90 border border-white/15 rounded-3xl p-6 shadow-2xl shadow-black/45 text-left flex flex-col justify-between space-y-6">
            
            {/* Real-time calculated telemetry */}
            <div className="space-y-6 flex-grow">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[9px] text-solar-yellow tracking-widest font-black uppercase">LOSS DIAGNOSTICS</span>
                <AlertCircle className="w-4 h-4 text-solar-orange animate-pulse" />
              </div>

              {/* Leaked Leads Count */}
              <div className="leak-readout space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Monthly Leaked Bookings</span>
                <span className="text-2xl font-sans font-black text-white">{leakedLeads} <span className="text-xs font-mono text-slate-400 font-semibold">Leads Lost</span></span>
              </div>

              {/* Monthly lost revenue */}
              <div className="leak-readout space-y-1">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">Estimated Monthly Lost Cashflow</span>
                <span className="text-2xl font-sans font-black text-white">${lostMonthly.toLocaleString()} <span className="text-xs font-mono text-slate-400 font-semibold">/ month</span></span>
              </div>

              {/* Flashing Annual Leaked revenue */}
              <div className="leak-readout bg-solar-orange/10 border border-solar-orange/20 rounded-2xl p-4 space-y-1 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-solar-orange"></div>
                <span className="text-[8px] font-mono text-solar-orange font-bold uppercase tracking-wider block">ANNUAL LEAKED REVENUE</span>
                <span className="text-3xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow tracking-tight block">
                  ${lostAnnual.toLocaleString()}
                </span>
                <span className="text-[9px] font-mono text-slate-200 block leading-normal">
                  Recyclable capital lost directly to response friction.
                </span>
              </div>
            </div>

            {/* Recapture banner & CTA */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-white block uppercase">Hyperion Protocol Gained</span>
                  <span className="text-[11px] font-sans text-emerald-400 font-extrabold block">
                    Recapture up to +${potentialRecapture.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              <button
                onClick={() => setCurrentRoute('book')}
                className="btn-magnetic btn-slide-bg group relative overflow-hidden w-full py-3.5 bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="slide-layer"></span>
                <RefreshCw className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
                Recapture Lost Revenue
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
