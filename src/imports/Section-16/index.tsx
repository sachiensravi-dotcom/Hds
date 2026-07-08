import { useState } from "react";
import waveBg from "../../assets/contact_wave.png";
import { Mail, Phone, User, DollarSign, MessageSquare } from "lucide-react";

export default function Section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.budget) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@hyperiondigitalsolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Contact Form Submission - Hyperion Agency",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          budget: formData.budget,
          _cc: "sachiensravi@gmail.com",
          _captcha: "false"
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Failed to send your message. Please try again or email us directly at info@hyperiondigitalsolutions.com.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-[#141414] relative w-[1440px] min-h-[650px] py-[60px] px-[40px] flex items-center justify-center border-t border-b border-[#222222]" data-name="Section" data-no-global-click="true">
      {/* Background glow */}
      <div className="absolute left-[10%] top-[10%] w-[500px] h-[350px] bg-gradient-to-tr from-[rgba(255,166,42,0.1)] to-transparent pointer-events-none blur-[120px]" />

      <div className="relative z-10 w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-stretch">
        
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-[rgba(20,20,20,0.6)] border border-[#2b2b2b] rounded-[6px] p-[40px] flex flex-col justify-between backdrop-blur-md">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-[60px] flex-grow">
              <div className="size-[64px] bg-[rgba(255,166,42,0.1)] border border-[#ffa62a] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#ffa62a] text-[32px]">✓</span>
              </div>
              <h3 className="font-['Inter_Tight:Medium',sans-serif] text-[32px] font-semibold text-white mb-4">Message Sent!</h3>
              <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[16px] max-w-[420px] leading-relaxed">
                Thank you for reaching out, {formData.name}. Our team has received your inquiry and will contact you via {formData.email} within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "", budget: "" });
                }}
                className="mt-8 px-6 py-2.5 bg-[#ffa62a] text-[#462c07] rounded-[6px] font-['Inter_Tight:Medium',sans-serif] font-semibold hover:bg-[#ffe62a] transition-all duration-300 active:scale-[0.97]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h2 className="font-['Inter_Tight:Regular',sans-serif] text-[36px] font-normal leading-tight text-white mb-2">
                  Send us a message to get things started!
                </h2>
                <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[15px]">
                  Fill out the form below or pick a slot on our scheduling calendar below.
                </p>
              </div>

              {error && (
                <div className="bg-[rgba(239,68,68,0.1)] border border-red-500 text-red-400 p-4 rounded-[4px] text-[14px]">
                  {error}
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-['Inter_Tight:Regular',sans-serif] text-[15px] text-[#989898]">Your email *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-[#666666]" />
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white pl-11 pr-4 py-3 rounded-[4px] outline-none transition-all duration-300 font-['Inter_Tight:Regular',sans-serif] text-[15px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-['Inter_Tight:Regular',sans-serif] text-[15px] text-[#989898]">Your name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-[#666666]" />
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alex Mercer"
                      className="w-full bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white pl-11 pr-4 py-3 rounded-[4px] outline-none transition-all duration-300 font-['Inter_Tight:Regular',sans-serif] text-[15px]"
                    />
                  </div>
                </div>
              </div>

              {/* Tell us more description */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-['Inter_Tight:Regular',sans-serif] text-[15px] text-[#989898]">Tell us more about your project & goals *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 size-[18px] text-[#666666]" />
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what you're trying to achieve (Web, SEO, SMM, GHL integrations...)"
                    className="w-full bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white pl-11 pr-4 py-3 rounded-[4px] outline-none transition-all duration-300 font-['Inter_Tight:Regular',sans-serif] text-[15px] resize-none"
                  />
                </div>
              </div>

              {/* Estimated budget selection */}
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-['Inter_Tight:Regular',sans-serif] text-[15px] text-[#989898]">Your estimated budget *</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-[#666666]" />
                  <select 
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white pl-11 pr-4 py-3 rounded-[4px] outline-none transition-all duration-300 font-['Inter_Tight:Regular',sans-serif] text-[15px] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $20k">$10k - $20k</option>
                    <option value="$20k+">$20k+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#989898] text-[12px]">▼</div>
                </div>
              </div>

              {/* Submit button */}
              <button 
                type="submit"
                className="w-full bg-[#ffa62a] text-[#462c07] font-['Inter_Tight:Medium',sans-serif] font-semibold text-[17px] py-[14px] rounded-[6px] hover:bg-[#ffe62a] hover:shadow-[0_0_20px_rgba(255,166,42,0.15)] transition-all duration-300 active:scale-[0.98] mt-2"
              >
                Send to the team
              </button>
            </form>
          )}
        </div>

        {/* Right Info Column with wavy background */}
        <div className="lg:col-span-5 relative rounded-[6px] overflow-hidden border border-[#2b2b2b] flex flex-col justify-between p-[40px]">
          {/* Wave Background Underlay */}
          <img alt="Visual accent" className="absolute inset-0 size-full object-cover opacity-60 pointer-events-none" src={waveBg} />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,20,20,0.8)] via-[rgba(20,20,20,0.4)] to-[rgba(20,20,20,0.9)] pointer-events-none z-0" />
          
          <div className="relative z-10 flex flex-col gap-6 w-full my-auto">
            {/* Contact list cards */}
            <div className="flex flex-col gap-6">
              <a 
                href="tel:9724397854" 
                className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] hover:border-[#ffa62a] rounded-[6px] px-8 py-[20px] flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <Phone className="size-[20px] text-[#ffa62a]" />
                  <span className="font-['Inter_Tight:Medium',sans-serif] text-[17px] text-white">Sachien R (Phone)</span>
                </div>
                <span className="font-['Inter_Tight:Regular',sans-serif] text-[17px] text-[#c7c7c7] group-hover:text-white transition-colors duration-300">(972) 439-7854</span>
              </a>

              <a 
                href="mailto:info@gohds.co" 
                className="backdrop-blur-md bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] hover:border-[#ffa62a] rounded-[6px] px-8 py-[20px] flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <Mail className="size-[20px] text-[#ffa62a]" />
                  <span className="font-['Inter_Tight:Medium',sans-serif] text-[17px] text-white">Email</span>
                </div>
                <span className="font-['Inter_Tight:Regular',sans-serif] text-[17px] text-[#c7c7c7] group-hover:text-white transition-colors duration-300">info@gohds.co</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 pt-[40px] border-t border-[rgba(255,255,255,0.05)] mt-8">
            <span className="font-['Inter_Tight:Regular',sans-serif] text-[11px] text-[#989898] uppercase tracking-widest font-semibold block mb-1">HQ Location</span>
            <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[14px]">Dallas-Fort Worth Metroplex, Texas</p>
          </div>
        </div>

      </div>
    </div>
  );
}