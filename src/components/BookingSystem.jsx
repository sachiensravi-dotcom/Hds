import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft, ChevronRight, User, Mail, Briefcase, Phone, Globe, ArrowLeft, ArrowRight } from 'lucide-react';

export default function BookingSystem({ setCurrentRoute }) {
  const [step, setStep] = useState(1); // 1 = Date & Time Selector, 2 = Form Details
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const panelRef = useRef(null);

  // Generate days in June 2026 (starting Monday June 1)
  const daysInJune = Array.from({ length: 30 }, (_, i) => ({
    dayNumber: i + 1,
    name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i % 7]
  }));

  const timeSlots = [
    "9:00 AM EST",
    "10:30 AM EST",
    "1:00 PM EST",
    "2:30 PM EST",
    "4:00 PM EST"
  ];

  const handleDaySelect = (day) => {
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const transitionToStep = (newStep) => {
    const direction = newStep > step ? 1 : -1;
    gsap.to('.booking-panel-content', {
      opacity: 0,
      x: -40 * direction,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setStep(newStep);
        gsap.fromTo('.booking-panel-content',
          { opacity: 0, x: 40 * direction },
          { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
        );
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.businessName) {
      alert("Please complete all required business details.");
      return;
    }
    
    // Animate confirmation screen transition
    gsap.to('.booking-panel-content', {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      onComplete: () => {
        setIsSubmitted(true);
        setTimeout(() => {
          gsap.fromTo('.booking-success-box',
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.2)' }
          );
        }, 50);
      }
    });
  };

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', phone: '', businessName: '', website: '' });
    setIsSubmitted(false);
    setStep(1);
  };

  return (
    <section className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 relative flex items-center justify-center overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Single-Panel Centered Container */}
      <div className="relative z-10 w-full max-w-xl bg-obsidian-surface/90 border border-white/15 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-black/55 overflow-hidden backdrop-blur-md">
        
        {/* Top Accent Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-solar-orange via-solar-yellow to-transparent"></div>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Step Wizard Progress Bar */}
            <div className="space-y-2 text-left">
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-200/50 uppercase tracking-widest font-black">
                <span>{step === 1 ? "STEP 1: CHOOSE DATE & TIME" : "STEP 2: BUSINESS PROFILING"}</span>
                <span>{step}/2</span>
              </div>
              <div className="h-[2px] bg-white/10 w-full rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-solar-orange to-solar-yellow transition-all duration-300 ease-out"
                  style={{ width: `${step * 50}%` }}
                ></div>
              </div>
            </div>

            {/* GSAP animated content wrapper */}
            <div className="booking-panel-content text-left space-y-6">
              
              {step === 1 ? (
                /* STEP 1 CONTENT: DATE & TIME SELECTOR */
                <div className="space-y-6">
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-solar-orange tracking-widest font-bold uppercase block">SCHEDULING PROTOCOL</span>
                    <h1 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">Book Your Growth Audit</h1>
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      Select an available date in June and choose an open strategy slot. We will map out your custom growth blueprint.
                    </p>
                  </div>

                  {/* Calendar Month Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">June 2026</span>
                    <div className="flex gap-2">
                      <button className="p-1 border border-white/10 rounded-lg bg-obsidian-card text-slate-200/20 cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
                      <button className="p-1 border border-white/10 rounded-lg bg-obsidian-card text-slate-200/20 cursor-not-allowed"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>

                  {/* Day Slots List */}
                  <div className="grid grid-cols-7 gap-2 max-h-[190px] overflow-y-auto pr-1 no-scrollbar border-b border-white/5 pb-4">
                    {daysInJune.map((day) => {
                      const isSelected = selectedDate?.dayNumber === day.dayNumber;
                      const isWeekend = day.name === 'Sat' || day.name === 'Sun';

                      return (
                        <button
                          key={day.dayNumber}
                          onClick={() => handleDaySelect(day)}
                          disabled={isWeekend}
                          className={`h-11 border rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer focus:outline-none
                            ${isWeekend 
                              ? 'bg-obsidian-base/20 border-transparent text-slate-200/20 cursor-not-allowed' 
                              : isSelected
                                ? 'bg-solar-orange border-solar-orange text-white scale-[1.03] shadow-[0_0_12px_rgba(224,86,36,0.3)]'
                                : 'bg-obsidian-card border-white/15 text-slate-200 hover:border-solar-orange/50 hover:text-white'
                            }`}
                        >
                          <span className="text-[7px] font-mono uppercase tracking-wider block opacity-40">{day.name}</span>
                          <span className="text-xs font-mono font-bold block mt-0.5">{day.dayNumber}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Time Picker */}
                  {selectedDate && (
                    <div className="space-y-3 animate-fade-in text-left">
                      <h3 className="font-sans text-xs text-white uppercase font-black tracking-wider flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-solar-yellow animate-pulse" /> Choose A Time Slot
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {timeSlots.map((time) => {
                          const isTimeSelected = selectedTime === time;

                          return (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`py-2.5 px-3 border rounded-xl text-[10px] font-mono font-bold transition-all cursor-pointer focus:outline-none
                                ${isTimeSelected 
                                  ? 'bg-solar-yellow border-solar-yellow text-slate-dark scale-[1.03] shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                                  : 'bg-obsidian-card border-white/15 text-slate-200 hover:border-solar-yellow/50 hover:text-white'
                                }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Continue Button */}
                  {selectedDate && selectedTime ? (
                    <button
                      onClick={() => transitionToStep(2)}
                      className="w-full btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-6"
                    >
                      <span className="slide-layer"></span>
                      Continue to Business Details <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                      <p className="text-[10px] font-mono text-slate-200/40 uppercase">Select Date & Time to Continue</p>
                    </div>
                  )}

                  {/* Cancel Call */}
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setCurrentRoute('home')}
                      className="text-[10px] font-mono text-slate-200/40 hover:text-red-400 font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Cancel Strategy Call
                    </button>
                  </div>

                </div>
              ) : (
                /* STEP 2 CONTENT: BUSINESS DETAILS FORM */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Slot lock summary */}
                  <div className="text-xs text-slate-200/80 bg-obsidian-card p-4 rounded-xl border border-white/10 font-mono flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-200/40 uppercase block">Locking Strategy Session:</span>
                      <span className="block text-solar-orange font-bold mt-0.5">June {selectedDate.dayNumber}, 2026 @ {selectedTime}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => transitionToStep(1)}
                      className="text-[10px] font-bold text-solar-yellow hover:underline cursor-pointer"
                    >
                      Change
                    </button>
                  </div>

                  {/* Form Inputs */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Contact Name *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-200/40" />
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-obsidian-card border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Work Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-200/40" />
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full bg-obsidian-card border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Business Name *</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-200/40" />
                      <input 
                        type="text" 
                        name="businessName" 
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Apex Plumbing & HVAC"
                        className="w-full bg-obsidian-card border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-200/40" />
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          className="w-full bg-obsidian-card border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-200/80 uppercase block">Website Link</label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-200/40" />
                        <input 
                          type="url" 
                          name="website" 
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://apexplumbing.com"
                          className="w-full bg-obsidian-card border border-white/15 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-solar-orange placeholder-white/20 shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* A2P 10DLC SMS Consent Disclosure */}
                  <div className="pt-2 text-[9px] font-sans text-slate-200/70 leading-relaxed bg-obsidian-surface/60 p-3 rounded-xl border border-white/10 space-y-1 text-left">
                    <label className="flex items-start gap-2 cursor-pointer select-none">
                      <input type="checkbox" required defaultChecked className="mt-0.5 accent-solar-orange rounded cursor-pointer shrink-0" />
                      <span>
                        By providing your mobile phone number, you consent to receive appointment notifications and strategy updates via SMS from Hyperion Digital Solutions LLC. Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for assistance. View our <button type="button" onClick={() => setCurrentRoute('privacy')} className="text-solar-orange underline hover:text-white cursor-pointer">Privacy Policy</button> and <button type="button" onClick={() => setCurrentRoute('terms')} className="text-solar-yellow underline hover:text-white cursor-pointer">Terms of Service</button>.
                      </span>
                    </label>
                  </div>

                  {/* Primary Confirm Button */}
                  <button
                    type="submit"
                    className="w-full btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-4 shadow-lg shadow-solar-orange/10"
                  >
                    <span className="slide-layer"></span>
                    Confirm Strategy Call
                  </button>

                  {/* Secondary buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => transitionToStep(1)}
                      className="flex-1 py-3 px-4 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft className="w-3 h-3" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentRoute('home')}
                      className="flex-1 py-3 px-4 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200/40 hover:text-red-400 bg-transparent border border-transparent rounded-xl transition-all cursor-pointer text-center"
                    >
                      Cancel Call
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>
        ) : (
          /* CONFIRMED SUCCESS VIEW */
          <div className="booking-success-box max-w-md mx-auto text-center space-y-6 py-4">
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-emerald-400 tracking-widest font-black uppercase">DISPATCH CONFIRMED</span>
              <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">Strategy Call Booked!</h2>
              <p className="text-xs text-slate-200/60 leading-relaxed font-sans max-w-sm mx-auto">
                Your business profiling audit has been logged. We've dispatched meeting invitation calendar details to your email.
              </p>
            </div>

            {/* Selected Booking Log */}
            <div className="bg-obsidian-card border border-white/10 rounded-2xl p-5 text-left space-y-4 max-w-sm mx-auto">
              <h3 className="font-mono text-[9px] text-solar-orange uppercase tracking-wider font-bold border-b border-white/5 pb-2">APPOINTMENT PROTOCOL LOG</h3>
              <div className="grid grid-cols-1 gap-y-3 font-mono text-[10px] leading-relaxed">
                <div>
                  <span className="text-slate-200/40 block">MEETING TIME</span>
                  <span className="text-white font-bold block mt-0.5">June {selectedDate?.dayNumber}, 2026</span>
                  <span className="text-solar-orange block">{selectedTime}</span>
                </div>
                <div>
                  <span className="text-slate-200/40 block">CLIENT CONTACT</span>
                  <span className="text-white font-bold block mt-0.5">{formData.name}</span>
                  <span className="text-slate-200/60 block">{formData.email}</span>
                </div>
                <div>
                  <span className="text-slate-200/40 block">BUSINESS PROFILE</span>
                  <span className="text-white font-bold block mt-0.5">{formData.businessName}</span>
                  {formData.website && <span className="text-slate-200/40 block break-all">{formData.website}</span>}
                </div>
                <div>
                  <span className="text-slate-200/40 block">STATUS STATE</span>
                  <span className="text-emerald-400 font-bold block mt-0.5">QUALIFIED // SYNCD</span>
                </div>
              </div>
            </div>

            {/* Return / Reset Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setCurrentRoute('home')}
                className="flex-1 btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer text-center"
              >
                <span className="slide-layer"></span>
                Return Home
              </button>
              <button
                onClick={resetBooking}
                className="flex-1 py-3.5 px-4 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer text-center"
              >
                Book Another Session
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
