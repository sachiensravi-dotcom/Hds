import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const statement1 = "Most marketing agencies focus on: vanity metrics, impressions, and jargon-heavy reports that don't pay the rent.";
  const statement2 = "We focus on: booked appointments and closed revenue.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background texture image
      gsap.to(bgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Split text word-by-word reveal for statement 1
      gsap.fromTo('.philosophy-word-1', 
        { opacity: 0.15, y: 10 },
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.philosophy-container',
            start: 'top 75%',
            end: 'top 40%',
            scrub: true
          }
        }
      );

      // Split text word-by-word reveal for statement 2
      gsap.fromTo('.philosophy-word-2', 
        { opacity: 0.1, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.04,
          duration: 1,
          scrollTrigger: {
            trigger: '.philosophy-statement-2',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-obsidian-base py-36 px-6 md:px-12 overflow-hidden border-b border-white/5 z-10"
    >
      {/* Parallax Background Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80" 
          alt="Abstract texture" 
          className="w-full h-[140%] object-cover opacity-5 pointer-events-none -translate-y-12"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-base via-transparent to-obsidian-base"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto philosophy-container text-left space-y-12">
        <span className="font-mono text-xs text-solar-orange tracking-[0.2em] uppercase font-bold block">OUR PHILOSOPHY</span>
        
        {/* Contrast Statement 1 */}
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl font-sans font-medium text-slate-light/50 leading-relaxed">
            {statement1.split(' ').map((word, i) => (
              <span key={i} className="philosophy-word-1 inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Horizontal separator line */}
        <div className="w-16 h-[1px] bg-solar-orange/30"></div>

        {/* Contrast Statement 2 (Massive drama serif italic) */}
        <div className="philosophy-statement-2 pt-4">
          <h3 className="text-4xl md:text-7xl font-serif font-black tracking-tight leading-tight text-white">
            {statement2.split(' ').map((word, i) => {
              const isHighlight = word.toLowerCase() === 'booked' || word.toLowerCase() === 'appointments' || word.toLowerCase() === 'closed' || word.toLowerCase() === 'revenue.' || word.toLowerCase() === 'appointments' || word.toLowerCase() === 'revenue';
              return (
                <span 
                  key={i} 
                  className={`philosophy-word-2 inline-block mr-[0.3em] italic font-semibold
                    ${isHighlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow not-italic font-black' : ''}
                  `}
                >
                  {word}
                </span>
              );
            })}
          </h3>
        </div>

      </div>
    </section>
  );
}
