import React, { useEffect } from 'react';
import { ShieldAlert, FileText, ArrowLeft, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TermsOfService({ setCurrentRoute }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 text-slate-200 relative overflow-hidden z-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[125px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <button
            onClick={() => setCurrentRoute('home')}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200/60 hover:text-solar-orange transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
          <span className="font-mono text-[9px] text-solar-yellow font-bold bg-solar-yellow/10 border border-solar-yellow/20 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" /> TERMS PROTOCOL
          </span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">SERVICE AGREEMENT</span>
          <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">Terms of Service</h1>
          <p className="text-xs font-mono text-slate-200/50">Last Updated: June 2026 | Hyperion Digital Solutions LLC</p>
        </div>

        {/* Terms Content Body */}
        <div className="bg-obsidian-surface/90 border border-white/15 rounded-[2.5rem] p-8 md:p-12 space-y-8 backdrop-blur-md shadow-2xl leading-relaxed text-xs md:text-sm font-sans">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">01 //</span> Acceptance of Terms
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              By accessing, browsing, or utilizing the services provided by Hyperion Digital Solutions LLC ("Company", "we", "us", or "our"), including scheduling strategy calls or filling out inquiry forms, you agree to be legally bound by these Terms of Service. If you do not agree, please discontinue use of our platforms.
            </p>
          </section>

          {/* Section 2: MANDATORY A2P 10DLC SMS TERMS */}
          <section className="bg-obsidian-card border border-solar-yellow/30 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-sans font-black text-solar-yellow uppercase tracking-tight flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> 02 // Application-to-Person (A2P) Messaging Terms
            </h2>
            <p className="text-white font-medium leading-relaxed">
              When you opt in to receive text notifications from Hyperion Digital Solutions via form submissions or scheduling calendars, the following terms govern our SMS messaging program:
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-200">
              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-solar-orange font-bold uppercase block">Program Description & Scope</span>
                <p className="text-slate-200/80">Messages include appointment scheduling reminders, strategy call confirmations, lead growth telemetry reports, and direct customer support responses.</p>
              </div>

              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-solar-yellow font-bold uppercase block">Message & Data Rates</span>
                <p className="text-slate-200/80"><strong className="text-white">Message and data rates may apply</strong> for any messages sent to you from us and to us from you. Check with your wireless carrier for details regarding your text and data plan.</p>
              </div>

              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-solar-orange font-bold uppercase block">Message Frequency</span>
                <p className="text-slate-200/80">Message frequency varies based on your active interactions, appointment scheduling, and request frequency.</p>
              </div>

              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-solar-yellow font-bold uppercase block">Opt-Out & Cancellation Protocol</span>
                <p className="text-slate-200/80">You can cancel the SMS service at any time. Just text <strong className="text-white">STOP</strong> or <strong className="text-white">CANCEL</strong> to our number. After sending "STOP", we will dispatch a single confirmation SMS verifying you have been unsubscribed. No further messages will be dispatched unless you re-subscribe.</p>
              </div>

              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-solar-orange font-bold uppercase block">Support & Help Keyword</span>
                <p className="text-slate-200/80">If you experience issues with the messaging program, reply with the keyword <strong className="text-white">HELP</strong> for assistance, or contact support at <strong className="text-white">support@hyperiondigitalsolutions.com</strong>.</p>
              </div>

              <div className="p-3.5 bg-obsidian-surface rounded-xl border border-white/10 space-y-1">
                <span className="text-slate-200/50 font-bold uppercase block">Wireless Carrier Disclaimer</span>
                <p className="text-slate-200/60 italic">T-Mobile, AT&T, Verizon, and all wireless carriers are not liable for delayed or undelivered messages.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">03 //</span> Intellectual Property & Services
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              All code blueprints, software architectures, custom layouts, logos, brand assets, and content published on this portal are the proprietary intellectual property of Hyperion Digital Solutions LLC. Unauthorized duplication or redistribution without explicit written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">04 //</span> Limitation of Liability
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              Hyperion Digital Solutions LLC provides strategy audits and development systems on an "as-is" basis. Under no circumstances shall Company be liable for indirect, incidental, consequential, or punitive damages resulting from your usage of our growth tools or third-party platform integrations.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">05 //</span> Contact & Regulatory Inquiries
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              For regulatory or legal inquiries regarding these Terms of Service, please contact our legal support dispatch:
            </p>
            <div className="pt-2 font-mono text-xs text-slate-200">
              <div className="inline-flex items-center gap-2 bg-obsidian-card p-3 rounded-xl border border-white/10">
                <Mail className="w-4 h-4 text-solar-yellow" />
                <span>support@hyperiondigitalsolutions.com</span>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Return Action */}
        <div className="text-center pt-4">
          <button
            onClick={() => setCurrentRoute('home')}
            className="btn-magnetic btn-slide-bg group relative overflow-hidden bg-transparent hover:bg-transparent text-white border border-solar-orange/50 hover:border-solar-orange px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span className="slide-layer"></span>
            Return to Home Page
          </button>
        </div>

      </div>
    </div>
  );
}
