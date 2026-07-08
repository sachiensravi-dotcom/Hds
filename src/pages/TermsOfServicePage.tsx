import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#141414] min-w-[1440px] overflow-x-hidden font-['Inter_Tight',sans-serif] text-white">
      <div className="relative w-full h-[120px] overflow-hidden">
        <HeroSection />
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-neutral-300 to-[#FFA62A] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-neutral-400 text-sm mb-12 uppercase tracking-wider font-mono">
          Last Updated: June 30, 2026
        </p>

        <div className="space-y-8 text-neutral-300 leading-relaxed text-[16px]">
          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website and services offered by Hyperion Digital Solutions ("we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not access or use our services.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              2. SMS Program & Carrier Terms (A2P 10DLC Compliant)
            </h2>
            <p className="mb-3">
              Hyperion Digital Solutions offers automated and manual text messaging notifications for appointment reminders, project check-ins, and digital agency updates.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Opt-In:</strong> By entering your mobile number in our contact form or booking wizard and choosing to opt-in, you consent to receive SMS communications.</li>
              <li><strong>Message & Data Rates:</strong> Standard message and data rates may apply for any messages sent to you or from you.</li>
              <li><strong>Message Frequency:</strong> Message frequency varies depending on your interactions with our scheduling calendar and agency staff.</li>
              <li><strong>Carrier Liability Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p>
              To stop receiving messages, reply <strong>STOP</strong> at any time. For support, reply <strong>HELP</strong> or contact us directly at <strong>info@hyperiondigitalsolutions.com</strong>.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              3. Service Delivery
            </h2>
            <p>
              Our agency delivers digital custom design, development, web application engineering, and local search growth marketing campaigns. All services are governed by separate, signed master services agreements (MSAs) or statements of work (SOWs) executed directly between us and our clients.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              4. User Obligations
            </h2>
            <p>
              You represent and warrant that all information you submit through our forms is accurate and that you own or have permission to submit the mobile phone number or email address provided. You agree not to use our scheduling wizard or contact channels for any spam, harassment, or unauthorized activity.
            </p>
          </section>
        </div>
      </div>

      <div className="relative w-full h-[640px]">
        <FooterSection />
      </div>
    </div>
  );
}
