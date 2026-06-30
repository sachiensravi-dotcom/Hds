import React, { useEffect } from 'react';
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy({ setCurrentRoute }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-obsidian-base min-h-screen pt-32 pb-24 px-6 md:px-12 text-slate-200 relative overflow-hidden z-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-solar-yellow/5 rounded-full blur-[125px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <button
            onClick={() => setCurrentRoute('home')}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200/60 hover:text-solar-orange transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
          <span className="font-mono text-[9px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> A2P 10DLC COMPLIANT
          </span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-solar-orange tracking-[0.25em] uppercase font-bold block">LEGAL PROTOCOL</span>
          <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-200/50">Last Updated: June 2026 | Hyperion Digital Solutions LLC</p>
        </div>

        {/* Policy Content Body */}
        <div className="bg-obsidian-surface/90 border border-white/15 rounded-[2.5rem] p-8 md:p-12 space-y-8 backdrop-blur-md shadow-2xl leading-relaxed text-xs md:text-sm font-sans">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">01 //</span> Introduction & Overview
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              At Hyperion Digital Solutions ("Company", "we", "us", or "our"), we operate digital growth, website development, and automated communications platforms for local service businesses. We are committed to protecting customer privacy and ensuring transparency in how information is collected, stored, and utilized.
            </p>
          </section>

          {/* Section 2: MANDATORY A2P 10DLC COMPLIANCE DISCLAIMER */}
          <section className="bg-solar-orange/[0.06] border border-solar-orange/30 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-sans font-black text-solar-orange uppercase tracking-tight flex items-center gap-2">
              <Lock className="w-4 h-4" /> 02 // Mobile Information & SMS Privacy (A2P 10DLC Compliance)
            </h2>
            <p className="text-white font-medium leading-relaxed">
              We uphold strict carrier compliance standards regarding mobile messaging and Application-to-Person (A2P 10DLC) communications:
            </p>
            <div className="bg-obsidian-card p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-200 space-y-2">
              <p className="text-solar-yellow font-bold">MANDATORY NON-SHARING DISCLOSURE:</p>
              <p className="italic text-slate-200/90">
                "Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-200/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No Sale of Personal Data:</strong> We do not sell, rent, trade, or lease your phone number or mobile consent records to any external brokers or marketing entities.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Purpose of SMS Communications:</strong> Mobile numbers collected via our booking forms, contact forms, or growth calculators are used exclusively for scheduling confirmations, strategy appointment updates, account alerts, and customer support.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">03 //</span> Information Collection Methods
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              We collect information that you voluntarily provide when booking strategy sessions, requesting local business growth audits, or submitting inquiries. This information may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-200/80 font-mono text-xs">
              <li>Full Name and Professional Title</li>
              <li>Business Name and Website URL</li>
              <li>Work Email Address</li>
              <li>Mobile Telephone Number</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">04 //</span> Opt-Out & Unsubscribe Instructions
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              You maintain full control over your communication preferences. You can opt-out of SMS text messages at any time:
            </p>
            <div className="bg-obsidian-card p-4 rounded-xl border border-white/10 font-mono text-xs text-slate-200 space-y-1">
              <p><strong>SMS Opt-Out:</strong> Reply <span className="text-solar-orange font-bold">STOP</span> or <span className="text-solar-orange font-bold">CANCEL</span> to any text message received from Hyperion Digital Solutions to immediately unsubscribe.</p>
              <p><strong>SMS Assistance:</strong> Reply <span className="text-solar-yellow font-bold">HELP</span> for customer assistance or email support@hyperiondigitalsolutions.com.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-sans font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-solar-orange">05 //</span> Data Security & Contact Information
            </h2>
            <p className="text-slate-200/80 leading-relaxed">
              We deploy industrial SSL encryption, firewalls, and strict access controls to safeguard customer data against unauthorized access. If you have questions regarding this Privacy Policy, please contact us:
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 font-mono text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-obsidian-card p-3 rounded-xl border border-white/10">
                <Mail className="w-4 h-4 text-solar-orange" />
                <span>privacy@hyperiondigitalsolutions.com</span>
              </div>
              <div className="flex items-center gap-2 bg-obsidian-card p-3 rounded-xl border border-white/10">
                <Phone className="w-4 h-4 text-solar-yellow" />
                <span>Hyperion Legal Compliance Dept.</span>
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
