import { useState } from "react";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

export default function Section() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(5); // June (0-indexed: 5)
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = useState({ name: "", email: "", phone: "", notes: "", smsConsent: false });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select Date/Time, 2: Enter Details

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Helper to get number of days in a month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper to get the day of the week the month starts on
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM"
  ];

  const handleDaySelect = (day: number) => {
    // Basic block for weekends (0 = Sunday, 6 = Saturday)
    const dateObj = new Date(selectedYear, selectedMonth, day);
    const dayOfWeek = dateObj.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return; // Block weekends

    setSelectedDate(day);
    setSelectedTime(null);
    setBookingStep(1);
  };

  const generateGoogleCalendarUrl = () => {
    if (selectedDate === null || selectedTime === null) return "";

    // Parse selectedTime (e.g., "10:30 AM") into hours and minutes
    const [timeStr, modifier] = selectedTime.split(" ");
    let [hoursStr, minutesStr] = timeStr.split(":");
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    if (modifier === "PM" && hours < 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    // Event is 45 minutes long. Compute end hours/minutes (no day-rollover since latest slot is 4:00 PM)
    let endHours = hours;
    let endMinutes = minutes + 45;
    if (endMinutes >= 60) {
      endHours += Math.floor(endMinutes / 60);
      endMinutes = endMinutes % 60;
    }

    const pad = (num: number) => num.toString().padStart(2, '0');
    
    // Date string formatted as YYYYMMDD
    const dateStr = `${selectedYear}${pad(selectedMonth + 1)}${pad(selectedDate)}`;
    
    // Format start and end times in Central Time zone (not UTC, hence no 'Z' suffix)
    const startTimeFormatted = `${dateStr}T${pad(hours)}${pad(minutes)}00`;
    const endTimeFormatted = `${dateStr}T${pad(endHours)}${pad(endMinutes)}00`;

    const title = encodeURIComponent("1-on-1 CRM & Growth Audit - Hyperion Digital Solutions");
    const details = encodeURIComponent(
      `Hi ${bookingDetails.name},\n\nThank you for booking your 1-on-1 CRM & growth audit with Hyperion Digital Solutions.\n\nWe will discuss GHL integrations, review automation, or custom design strategy.\n\nMeeting link: https://meet.google.com/xyz-pdq-abc\n\nNotes: ${bookingDetails.notes || "None"}`
    );
    const locationStr = encodeURIComponent("Google Meet (Online)");
    
    // Guest invites: info@hyperiondigitalsolutions.com, sachiensravi@gmail.com, and user email
    const guests = encodeURIComponent("info@hyperiondigitalsolutions.com,sachiensravi@gmail.com," + bookingDetails.email);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTimeFormatted}/${endTimeFormatted}&ctz=America/Chicago&details=${details}&location=${locationStr}&add=${guests}`;
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone) return;
    if (!bookingDetails.smsConsent) {
      alert("You must agree to the SMS Terms of Service and Privacy Policy to submit.");
      return;
    }
 
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@hyperiondigitalsolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Calendar Booking - Hyperion Agency",
          name: bookingDetails.name,
          email: bookingDetails.email,
          phone: bookingDetails.phone,
          time: `${months[selectedMonth]} ${selectedDate}, ${selectedYear} at ${selectedTime} (Central Time)`,
          notes: bookingDetails.notes || "None",
          smsConsent: bookingDetails.smsConsent ? "Agreed" : "Not Agreed",
          _cc: "sachiensravi@gmail.com",
          _captcha: "false"
        })
      });
      if (!response.ok) {
        console.error("Booking submission failed");
      }
    } catch (err) {
      console.error("Error submitting booking details:", err);
    }
 
    setBookingConfirmed(true);
  };

  // Generate calendar cells (including padding)
  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  return (
    <div className="bg-[#141414] relative w-[1440px] py-[80px] px-[40px] flex flex-col items-center border-b border-[#222222]" data-name="Section" data-no-global-click="true">
      {/* Title */}
      <div className="mb-[48px] text-center">
        <p className="font-['Geist_Mono:Regular',sans-serif] text-[16px] text-[#ffa62a] uppercase tracking-widest mb-[12px] font-semibold">
          Schedule a Strategy Call
        </p>
        <h2 className="font-['Inter_Tight:Regular',sans-serif] text-[40px] leading-tight font-normal text-white max-w-[700px]">
          Book a 1-on-1 CRM & growth audit
        </h2>
        <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[15px] max-w-[550px] leading-relaxed mt-3">
          Select a time on our calendar to explore GHL integrations, automated review generation, or custom web design options for your agency strategy.
        </p>
      </div>

      <div className="w-full max-w-[900px] border border-[#2b2b2b] rounded-[6px] bg-[rgba(20,20,20,0.6)] backdrop-blur-md overflow-hidden min-h-[500px]">
        {bookingConfirmed ? (
          <div className="flex flex-col items-center justify-center text-center p-[60px] min-h-[500px]">
            <CheckCircle className="size-[64px] text-[#ffa62a] mb-6 animate-pulse" />
            <h3 className="font-['Inter_Tight:Medium',sans-serif] text-[32px] font-semibold text-white mb-4">Meeting Confirmed!</h3>
            <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[16px] max-w-[500px] leading-relaxed">
              Your growth audit has been scheduled for <strong className="text-white">{months[selectedMonth]} {selectedDate}, {selectedYear} at {selectedTime} (Central Time)</strong>.
            </p>
            <p className="font-['Inter_Tight:Regular',sans-serif] text-[#989898] text-[15px] mt-2">
              An invitation request has been queued to send to <span className="text-[#ffa62a]">{bookingDetails.email}</span>. Click the button below to add this event directly to your Google Calendar and send guest invites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#ffa62a] text-[#462c07] rounded-[6px] font-['Inter_Tight:Medium',sans-serif] font-semibold hover:bg-[#ffe62a] transition-all duration-300 text-center flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,166,42,0.15)]"
              >
                Add to Google Calendar
              </a>
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setBookingStep(1);
                  setBookingDetails({ name: "", email: "", phone: "", notes: "", smsConsent: false });
                }}
                className="px-6 py-2.5 border border-[#3b3b3b] text-white rounded-[6px] font-['Inter_Tight:Medium',sans-serif] font-semibold hover:border-white transition-all duration-300"
              >
                Book Another Meeting
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[500px]">
            
            {/* Left side: Calendar Selection */}
            <div className="md:col-span-7 p-6 border-r border-[#2b2b2b] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-['Inter_Tight:Medium',sans-serif] text-[18px] text-white font-semibold flex items-center gap-2">
                    <CalendarIcon className="size-[18px] text-[#ffa62a]" />
                    {months[selectedMonth]} {selectedYear}
                  </h4>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={prevMonth}
                      className="p-2 border border-[#3b3b3b] rounded-[6px] hover:border-[#ffa62a] text-[#989898] hover:text-white transition-all duration-200"
                    >
                      <ChevronLeft className="size-[16px]" />
                    </button>
                    <button 
                      onClick={nextMonth}
                      className="p-2 border border-[#3b3b3b] rounded-[6px] hover:border-[#ffa62a] text-[#989898] hover:text-white transition-all duration-200"
                    >
                      <ChevronRight className="size-[16px]" />
                    </button>
                  </div>
                </div>

                {/* Days of Week headers */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, idx) => (
                    <span key={day} className={`font-['Geist_Mono:Regular',sans-serif] text-[12px] uppercase ${idx === 0 || idx === 6 ? "text-[#555555]" : "text-[#989898] font-medium"}`}>
                      {day}
                    </span>
                  ))}
                </div>

                {/* Calendar Days grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((cell, idx) => {
                    if (cell === null) return <div key={`empty-${idx}`} />;
                    
                    const cellDate = new Date(selectedYear, selectedMonth, cell);
                    const dayOfWeek = cellDate.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                    const isSelected = selectedDate === cell;
                    
                    return (
                      <button
                        key={`day-${cell}`}
                        onClick={() => handleDaySelect(cell)}
                        disabled={isWeekend}
                        className={`py-3 rounded-[4px] font-['Geist_Mono:Regular',sans-serif] text-[14px] transition-all duration-200 ${
                          isSelected
                            ? "bg-[#ffa62a] text-[#462c07] font-semibold"
                            : isWeekend
                              ? "text-[#444444] cursor-not-allowed"
                              : "text-white hover:bg-[rgba(255,166,42,0.1)] hover:text-[#ffa62a]"
                        }`}
                      >
                        {cell}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2b2b2b] text-[12px] text-[#666666] font-['Geist_Mono:Regular',sans-serif] uppercase tracking-wider">
                Note: Weekend slots are currently unavailable.
              </div>
            </div>

            {/* Right side: Slot Selection or details input */}
            <div className="md:col-span-5 p-6 bg-[rgba(255,255,255,0.005)] flex flex-col justify-between">
              {selectedDate === null ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-[#666666] py-12">
                  <Clock className="size-[36px] mb-3 opacity-50" />
                  <p className="font-['Inter_Tight:Regular',sans-serif] text-[15px]">Select an available day on the left to see time slots.</p>
                </div>
              ) : bookingStep === 1 ? (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h4 className="font-['Inter_Tight:Medium',sans-serif] text-[16px] text-white font-semibold mb-4 flex items-center gap-2">
                      <Clock className="size-[16px] text-[#ffa62a]" />
                      Available Slots: {months[selectedMonth]} {selectedDate}
                    </h4>

                    <div className="flex flex-col gap-2.5">
                      {timeSlots.map((slot) => {
                        const isTimeSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`w-full py-3 rounded-[6px] border text-[15px] font-['Inter_Tight:Medium',sans-serif] transition-all duration-300 ${
                              isTimeSelected
                                ? "bg-[rgba(255,166,42,0.1)] border-[#ffa62a] text-[#ffa62a] font-semibold"
                                : "border-[#3b3b3b] text-white hover:border-[#ffa62a] hover:bg-[rgba(255,255,255,0.01)]"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    disabled={!selectedTime}
                    onClick={() => setBookingStep(2)}
                    className="w-full mt-6 bg-[#ffa62a] disabled:bg-[#333333] disabled:text-[#666666] text-[#462c07] font-['Inter_Tight:Medium',sans-serif] font-semibold text-[15px] py-3 rounded-[6px] hover:bg-[#ffe62a] transition-all duration-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <button 
                        type="button" 
                        onClick={() => setBookingStep(1)} 
                        className="text-[13px] text-[#ffa62a] hover:underline font-['Inter_Tight:Regular',sans-serif]"
                      >
                        ← Back
                      </button>
                      <span className="text-[13px] text-[#666666]">|</span>
                      <span className="text-[13px] text-[#989898] font-['Geist_Mono:Regular',sans-serif]">
                        {months[selectedMonth]} {selectedDate} @ {selectedTime}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="booking-name" className="text-[13px] text-[#989898] font-['Inter_Tight:Regular',sans-serif]">Name *</label>
                      <input 
                        type="text" 
                        id="booking-name" 
                        required
                        value={bookingDetails.name}
                        onChange={(e) => setBookingDetails(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Alex Mercer"
                        className="bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white px-3.5 py-2.5 rounded-[4px] outline-none text-[14px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="booking-email" className="text-[13px] text-[#989898] font-['Inter_Tight:Regular',sans-serif]">Email *</label>
                      <input 
                        type="email" 
                        id="booking-email" 
                        required
                        value={bookingDetails.email}
                        onChange={(e) => setBookingDetails(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="name@company.com"
                        className="bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white px-3.5 py-2.5 rounded-[4px] outline-none text-[14px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="booking-phone" className="text-[13px] text-[#989898] font-['Inter_Tight:Regular',sans-serif]">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="booking-phone" 
                        required
                        value={bookingDetails.phone}
                        onChange={(e) => setBookingDetails(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(123) 456-7890"
                        className="bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white px-3.5 py-2.5 rounded-[4px] outline-none text-[14px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="booking-notes" className="text-[13px] text-[#989898] font-['Inter_Tight:Regular',sans-serif]">Special Notes (Optional)</label>
                      <textarea 
                        id="booking-notes" 
                        rows={3}
                        value={bookingDetails.notes}
                        onChange={(e) => setBookingDetails(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Any details on your growth requirements..."
                        className="bg-[#202020] border border-[#3b3b3b] focus:border-[#ffa62a] text-white px-3.5 py-2.5 rounded-[4px] outline-none text-[14px] resize-none"
                      />
                    <div className="flex items-start gap-2.5 mt-2 text-[#989898] font-['Inter_Tight:Regular',sans-serif] text-[12px] leading-relaxed text-left">
                      <input 
                        type="checkbox" 
                        id="booking-sms-consent" 
                        required 
                        checked={bookingDetails.smsConsent}
                        onChange={(e) => setBookingDetails(prev => ({ ...prev, smsConsent: e.target.checked }))}
                        className="mt-0.5 accent-[#ffa62a] rounded cursor-pointer size-[14px]"
                      />
                      <label htmlFor="booking-sms-consent" className="cursor-pointer select-none">
                        By checking this box, I agree to receive automated or manual SMS notifications, reminders, and updates from Hyperion Digital Solutions at the phone number provided. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply STOP to unsubscribe or HELP for assistance. View our <a href="/privacy" className="text-[#ffa62a] underline hover:text-white transition-colors">Privacy Policy</a> and <a href="/terms" className="text-[#ffa62a] underline hover:text-white transition-colors">Terms of Service</a>.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-[#ffa62a] text-[#462c07] font-['Inter_Tight:Medium',sans-serif] font-semibold text-[15px] py-3 rounded-[6px] hover:bg-[#ffe62a] transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
