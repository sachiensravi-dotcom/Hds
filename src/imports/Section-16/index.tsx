import { Link } from "react-router";
import { useState } from "react";

export default function Section() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    details: "",
    smsConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, smsConsent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.smsConsent) {
      alert("Please agree to the SMS notifications terms to submit.");
      return;
    }
    console.log("Form submitted successfully:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-black relative size-full" data-name="Section">
      {/* Background blobs */}
      <div className="-translate-x-1/2 absolute h-[524.435px] left-[calc(50%+0.27px)] top-[650.97px] w-[1226.039px]">
        <div className="absolute inset-[-91.53%_-39.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2186.04 1484.44">
            <g filter="url(#filter0_f_5_3698)" id="Ellipse 5">
              <ellipse cx="1093.02" cy="742.218" fill="var(--fill-0, #FFA62A)" fillOpacity="0.2" rx="613.02" ry="262.218" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1484.44" id="filter0_f_5_3698" width="2186.04" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_5_3698" stdDeviation="240" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[48px] text-center text-white top-[100px] whitespace-nowrap">Thinking about your website?</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter_Tight:Regular',sans-serif] leading-[1.4] left-1/2 not-italic text-[#989898] text-[16px] text-center top-[182px] w-[640px]">We will help you to plan and execute your next move for long-term growth.</p>

      {submitted ? (
        <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(20,20,20,0.2)] border border-[rgba(255,255,255,0.1)] border-solid h-[546px] left-1/2 overflow-clip rounded-[6px] top-[252px] w-[720px] flex flex-col items-center justify-center p-8 text-center" data-name="form">
          <h3 className="text-[#ffa62a] text-3xl font-semibold mb-4 tracking-tight">Message Sent!</h3>
          <p className="text-neutral-300 max-w-md text-[16px] leading-[1.6]">
            Thank you for reaching out. A Hyperion team member will review your details and contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(20,20,20,0.2)] border border-[rgba(255,255,255,0.1)] border-solid h-[546px] left-1/2 overflow-clip rounded-[6px] top-[252px] w-[720px]" data-name="form">
          {/* Row 1: Email & Name */}
          <div className="absolute content-stretch flex gap-[16px] items-center left-[31px] top-[31px] w-[656px]" data-name="input row">
            {/* Email */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
              <label htmlFor="email" className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full text-left">Your email *</label>
              <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required 
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white text-[16px] px-4 size-full"
                />
              </div>
            </div>

            {/* Name */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
              <label htmlFor="name" className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full text-left">Your name *</label>
              <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required 
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white text-[16px] px-4 size-full"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Website Details Textarea */}
          <div className="absolute content-stretch flex items-center left-[31px] top-[129px] w-[656px]" data-name="input row">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
              <label htmlFor="details" className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full text-left">Tell us more about your website *</label>
              <div className="bg-[rgba(255,255,255,0.1)] h-[160px] relative rounded-[4px] shrink-0 w-full" data-name="input">
                <textarea 
                  id="details"
                  name="details"
                  required 
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.details}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white text-[16px] p-4 size-full resize-none"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Budget & Phone Number */}
          <div className="absolute content-stretch flex gap-[16px] items-center left-[31px] top-[341px] w-[656px]" data-name="input row">
            {/* Estimated Budget */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
              <label htmlFor="budget" className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full text-left">Your estimated budget *</label>
              <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
                <select 
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white text-[16px] px-4 size-full cursor-pointer appearance-none [&>option]:bg-[#141414] [&>option]:text-white"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="under-5k">Under $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="over-25k">$25k+</option>
                </select>
              </div>
            </div>

            {/* Phone Number */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="input">
              <label htmlFor="phone" className="[word-break:break-word] font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#989898] text-[16px] w-full text-left">Your phone number *</label>
              <div className="bg-[rgba(255,255,255,0.1)] h-[46px] relative rounded-[4px] shrink-0 w-full" data-name="input">
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  required 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-none outline-none text-white text-[16px] px-4 size-full"
                />
              </div>
            </div>
          </div>

          {/* SMS Consent Checkbox */}
          <div className="absolute left-[31px] top-[408px] w-[656px] flex items-start gap-2.5 text-neutral-400 font-['Inter_Tight:Regular',sans-serif] text-[12px] leading-[1.3] text-left">
            <input 
              type="checkbox" 
              id="sms-consent" 
              name="smsConsent"
              required 
              checked={formData.smsConsent}
              onChange={handleCheckboxChange}
              className="mt-0.5 accent-[#ffa62a] rounded cursor-pointer"
            />
            <label htmlFor="sms-consent" className="cursor-pointer select-none">
              I agree to receive SMS notifications and update messages from Hyperion. Msg & data rates may apply. Reply STOP to opt-out. See our <Link to="/privacy" className="text-[#ffa62a] underline hover:text-white">Privacy Policy</Link> and <Link to="/terms" className="text-[#ffa62a] underline hover:text-white">Terms of Service</Link>.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="-translate-x-1/2 absolute bg-[#ffa62a] content-stretch flex items-center justify-center left-1/2 px-[20px] py-[16px] rounded-[120px] top-[460px] w-[656px] hover:bg-[#ffb753] transition-colors duration-200 cursor-pointer" data-name="btn">
            <p className="[word-break:break-word] font-['Inter_Tight:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#462c07] text-[18px] text-right whitespace-nowrap">Send to the team</p>
          </button>
        </form>
      )}
    </div>
  );
}