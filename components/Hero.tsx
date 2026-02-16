
import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import MorphingLogo from './MorphingLogo';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });

      gsap.from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="hero-badge inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          <Sparkles size={14} className="animate-pulse" />
          <span>Accepting Q3-Q4 Commissions</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-bold font-display leading-[0.85] tracking-tight mb-10">
              WE BUILD <br />
              <span className="text-gradient italic">THE FUTURE</span>
            </h1>

            <div ref={subtitleRef} className="max-w-xl">
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                Webnixra is a multidisciplinary studio engineering high-performance 3D experiences, 
                artificial intelligence, and scalable global architectures.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <a href="#projects" className="group flex items-center space-x-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500">
                    <span>View Productions</span>
                    <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#contact" className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                    Initiate Project
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <MorphingLogo />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
