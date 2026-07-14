import { useState } from "react";
import waveBg from "./contact_wave.png";
import { Mail, Phone, User, DollarSign, MessageSquare } from "lucide-react";

export default function Section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
    smsConsent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.budget) {
      setError("Please fill out all required fields.");
      return;
    }
    if (!formData.smsConsent) {
      setError("You must agree to the SMS Terms of Service and Privacy Policy to submit.");
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
          phone: formData.phone,
          message: formData.message,
          budget: formData.budget,
          smsConsent: formData.smsConsent ? "Agreed" : "Not Agreed",
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
        
        {/* Left Chat Instruction Column */}
        <div className="lg:col-span-7 bg-[rgba(20,20,20,0.6)] border border-[#2b2b2b] rounded-[6px] p-[50px] flex flex-col justify-center items-center text-center backdrop-blur-md min-h-[500px]">
          <div className="relative group shrink-0 mb-[30px]">
            <div className="absolute -inset-4 bg-[#ffa62a] rounded-full opacity-20 blur-[20px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="relative size-[80px] bg-[rgba(255,166,42,0.1)] border border-[#ffa62a]/40 rounded-full flex items-center justify-center">
              <MessageSquare className="size-[36px] text-[#ffa62a]" />
            </div>
          </div>
          
          <h2 className="font-['Inter_Tight',sans-serif] text-[36px] font-normal leading-tight text-white mb-4">
            Chat with our team
          </h2>
          <p className="font-['Inter_Tight',sans-serif] text-[#b3b3b3] text-[17px] max-w-[480px] leading-[1.6] mb-8">
            We've simplified how we connect. Click the chat bubble in the bottom right corner of the screen to start a conversation with our team instantly.
          </p>
          
          <div className="flex flex-col gap-2 items-center text-[14px] text-[#989898] font-geist-mono">
            <span>AVAILABLE MON-FRI</span>
            <span className="text-[#ffa62a]">9:00 AM - 6:00 PM CST</span>
          </div>
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
                  <span className="font-['Inter_Tight',sans-serif] font-medium text-[17px] text-white">Email</span>
                </div>
                <span className="font-['Inter_Tight',sans-serif] text-[17px] text-[#c7c7c7] group-hover:text-white transition-colors duration-300">info@gohds.co</span>
              </a>
            </div>
          </div>
 
          <div className="relative z-10 pt-[40px] border-t border-[rgba(255,255,255,0.05)] mt-8">
            <span className="font-geist-mono text-[12px] text-[#989898] uppercase tracking-widest block mb-2">HQ LOCATION</span>
            <p className="font-['Inter_Tight',sans-serif] text-white text-[16px]">Dallas-Fort Worth Metroplex, Texas</p>
          </div>
        </div>

      </div>
    </div>
  );
}