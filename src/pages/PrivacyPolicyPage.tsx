import { useEffect } from "react";
import HeroSection from "../imports/HeroSection-1/index";
import FooterSection from "../imports/Section-17/index";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-neutral-400 text-sm mb-12 uppercase tracking-wider font-mono">
          Last Updated: June 30, 2026
        </p>

        <div className="space-y-8 text-neutral-300 leading-relaxed text-[16px]">
          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              1. Overview & Scope
            </h2>
            <p>
              At Hyperion Digital Solutions ("we," "us," or "our"), your privacy is paramount. This Privacy Policy details how we collect, use, and safe-keep client and visitor data, particularly ensuring full compliance with A2P 10DLC messaging standards.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              2. Mobile & SMS Privacy Disclosure (A2P 10DLC Compliant)
            </h2>
            <p className="mb-4">
              We strictly adhere to carrier guidelines regarding text messaging originator opt-in data and consent.
            </p>
            <div className="bg-[#242424] border-l-4 border-[#FFA62A] p-4 rounded-r-xl text-white font-medium my-4">
              <strong>Important Carrier Disclosure:</strong> Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties or affiliates.
            </div>
            <p>
              No mobile phone numbers, opt-in details, or consent records collected through our contact or scheduling forms will be sold, traded, or shared with third parties under any circumstances.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              3. Information We Collect
            </h2>
            <p className="mb-2">We collect information that you choose to provide directly to us through our web platform:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Details:</strong> Full name, company name, and job title.</li>
              <li><strong>Contact Coordinates:</strong> Email addresses and phone numbers.</li>
              <li><strong>Form Submissions:</strong> Revenue data, growth targets, and custom project summaries inputted into our booking wizard or contact forms.</li>
            </ul>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              4. SMS Consent & Opt-In
            </h2>
            <p className="mb-3">
              By checking the SMS consent box on our booking wizard or contact form and providing your phone number, you authorize us to send text notifications, reminders, and updates regarding your agency booking.
            </p>
            <p>
              Opt-in consent is limited strictly to direct business communications between Hyperion Digital Solutions and you.
            </p>
          </section>

          <section className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#3B3B3B] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FFA62A] rounded-full inline-block"></span>
              5. Opt-Out & Support
            </h2>
            <p>
              You can cancel the SMS service at any time. Simply reply <strong>STOP</strong> to any message we send to immediately opt-out and terminate all text updates. For help or programmatic details, reply <strong>HELP</strong> or email us at <strong>info@gohds.co</strong>.
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
