import React, { useState } from 'react';
import { Mail, Phone as PhoneIcon, Clock, Send, Calendar, CheckCircle } from 'lucide-react';

export default function Contact({ setCurrentRoute }) {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden z-10">
      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">CONNECT WITH US</span>
          <h1 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">Initiate Growth Protocol</h1>
          <p className="text-slate-200 text-xs md:text-sm font-sans max-w-md mx-auto leading-relaxed">
            Have questions about automation or local SEO? Fill out our inquiry form or schedule a direct calendar call below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Side: Contact Form (7 Columns) */}
          <div className="lg:col-span-7 bg-obsidian-card border border-white/15 rounded-[2rem] p-8 md:p-10 shadow-2xl relative backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-orange to-transparent"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <span className="font-mono text-[9px] text-solar-orange tracking-widest font-bold block uppercase mb-2">GENERAL INQUIRY DISPATCH</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={inquiryData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-obsidian-surface border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Work Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={inquiryData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full bg-obsidian-surface border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={inquiryData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-obsidian-surface border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Target Service</label>
                    <select
                      name="service"
                      value={inquiryData.service}
                      onChange={handleInputChange}
                      className="w-full bg-obsidian-surface border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-solar-orange"
                    >
                      <option value="website">Custom Website Design</option>
                      <option value="seo">Local Search SEO</option>
                      <option value="automation">AI Automation flows</option>
                      <option value="pipeline">CRM Pipelines</option>
                      <option value="reviews">Reputation Management</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Inquiry Details *</label>
                  <textarea 
                    name="message" 
                    required
                    rows="4"
                    value={inquiryData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your service goals and territory..."
                    className="w-full bg-obsidian-surface border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 resize-none"
                  ></textarea>
                </div>

                {/* A2P 10DLC SMS Consent Disclosure */}
                <div className="pt-2 text-[9px] font-sans text-slate-200/70 leading-relaxed bg-obsidian-card/60 p-3 rounded-xl border border-white/10 space-y-1 text-left">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input type="checkbox" required defaultChecked className="mt-0.5 accent-solar-orange rounded cursor-pointer shrink-0" />
                    <span>
                      By submitting this inquiry, you agree to receive follow-up communication and SMS notifications from Hyperion Digital Solutions LLC. Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for assistance. View our <button type="button" onClick={() => setCurrentRoute('privacy')} className="text-solar-orange underline hover:text-white cursor-pointer">Privacy Policy</button> and <button type="button" onClick={() => setCurrentRoute('terms')} className="text-solar-yellow underline hover:text-white cursor-pointer">Terms of Service</button>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-magnetic btn-slide-bg group relative overflow-hidden w-full py-4 bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <span className="slide-layer"></span>
                  <Send className="w-4 h-4" /> Dispatch Inquiry
                </button>
              </form>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-sans font-bold text-white uppercase">Inquiry Dispatched</h3>
                <p className="text-xs text-slate-light/60 max-w-xs leading-relaxed">
                  Thank you, {inquiryData.name}. Your details have been logged in our queue. A Hyperion growth specialist will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-magnetic bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase transition-all"
                >
                  New Message
                </button>
              </div>
            )}
          </div>

          {/* Right Side: Coordinates & Booking Callout (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left w-full">
            
            {/* Quick Scheduler Callout */}
            <div className="bg-obsidian-card border border-white/10 rounded-[2rem] p-6 shadow-xl space-y-4 relative overflow-hidden flex flex-col items-start">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar-yellow to-transparent"></div>
              <Calendar className="w-8 h-8 text-solar-yellow animate-pulse" />
              <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-tight">Need Immediate Scheduling?</h3>
              <p className="text-[11px] text-slate-light/60 font-sans leading-relaxed">
                Skip the waiting queue. Connect directly to our active calendar database to lock in your strategy session instantly.
              </p>
              <button
                onClick={() => setCurrentRoute('book')}
                className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-yellow/50 hover:border-solar-yellow px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <span className="slide-layer" style={{ '--slide-bg': 'linear-gradient(135deg, #E05624 0%, #F59E0B 100%)' }}></span>
                Open Active Calendar
              </button>
            </div>

            {/* Business coordinates details */}
            <div className="bg-obsidian-surface border border-white/10 rounded-[2rem] p-8 shadow-xl space-y-6">
              <span className="font-mono text-[9px] text-solar-orange tracking-widest font-bold block uppercase border-b border-white/5 pb-2">COORDINATE LOGS</span>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-sans">
                  <div className="p-2.5 bg-obsidian-base rounded-xl border border-white/5">
                    <Mail className="w-4 h-4 text-solar-orange" />
                  </div>
                  <div>
                    <span className="text-slate-light/40 font-mono text-[9px] uppercase block">Operations Email</span>
                    <a href="mailto:growth@hyperiondigital.agency" className="text-white hover:text-solar-orange transition-colors">growth@hyperiondigital.agency</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans">
                  <div className="p-2.5 bg-obsidian-base rounded-xl border border-white/5">
                    <PhoneIcon className="w-4 h-4 text-solar-orange" />
                  </div>
                  <div>
                    <span className="text-slate-light/40 font-mono text-[9px] uppercase block">Inbound Dispatch</span>
                    <a href="tel:+18005557463" className="text-white hover:text-solar-orange transition-colors">+1 (800) 555-RING</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans">
                  <div className="p-2.5 bg-obsidian-base rounded-xl border border-white/5">
                    <Clock className="w-4 h-4 text-solar-orange" />
                  </div>
                  <div>
                    <span className="text-slate-light/40 font-mono text-[9px] uppercase block">Active Hours</span>
                    <span className="text-white block">Monday – Friday</span>
                    <span className="text-slate-light/60 block">8:00 AM – 6:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
