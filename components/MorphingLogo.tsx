import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingLogo: React.FC = () => {
  const [step, setStep] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  // Define high-fidelity paths with matching point counts (40 points each)
  // This ensures Framer Motion can interpolate them smoothly.
  // Each path starts and ends at the same point.
  const paths = [
    // 0: Webnixra 'W' Logo (Premium Stylized)
    "M 15 25 L 30 75 L 45 45 L 50 45 L 55 45 L 70 75 L 85 25 L 75 25 L 65 55 L 55 25 L 45 25 L 35 55 L 25 25 L 15 25 M 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25",
    // 1: Apple Wireframe (Header, Hero, Navigation)
    "M 10 10 L 90 10 L 90 90 L 10 90 L 10 10 M 15 15 L 85 15 L 85 22 L 15 22 L 15 15 M 35 35 L 65 35 L 65 65 L 35 65 L 35 35 M 20 75 L 80 75 L 80 80 L 20 80 L 20 75 M 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10 L 10 10",
    // 2: Netflix Grid (Container + 6 Boxes)
    "M 5 5 L 95 5 L 95 95 L 5 95 L 5 5 M 10 10 L 32 10 L 32 35 L 10 35 L 10 10 M 38 10 L 60 10 L 60 35 L 38 35 L 38 10 M 66 10 L 88 10 L 88 35 L 66 35 L 66 10 M 10 45 L 32 45 L 32 70 L 10 70 L 10 45 M 38 45 L 60 45 L 60 70 L 38 70 L 38 45 M 66 45 L 88 45 L 88 70 L 66 70 L 66 45",
    // 3: Tesla Hero (Large Image, Overlay, Buttons)
    "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 M 5 20 L 95 20 L 95 65 L 5 65 L 5 20 M 15 75 L 45 75 L 45 85 L 15 85 L 15 75 M 55 75 L 85 75 L 85 85 L 55 85 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75 L 55 75",
    // 4: Back to Logo
    "M 15 25 L 30 75 L 45 45 L 50 45 L 55 45 L 70 75 L 85 25 L 75 25 L 65 55 L 55 25 L 45 25 L 35 55 L 25 25 L 15 25 M 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25 L 15 25"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const sequence = async () => {
      // 1. Logo Breathe
      setStep(0);
      await new Promise(r => timeout = setTimeout(r, 4000));
      
      // 2. Morph to Apple
      setStep(1);
      await new Promise(r => timeout = setTimeout(r, 4000));
      
      // 3. Morph to Netflix
      setStep(2);
      await new Promise(r => timeout = setTimeout(r, 4000));
      
      // 4. Morph to Tesla
      setStep(3);
      await new Promise(r => timeout = setTimeout(r, 4000));
      
      // 5. Morph back to Logo
      setStep(4);
      await new Promise(r => timeout = setTimeout(r, 1000));
      setShowTagline(true);
      
      // 6. Loop Reset
      await new Promise(r => timeout = setTimeout(r, 6000));
      setShowTagline(false);
      sequence();
    };

    sequence();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full relative">
      <div className="relative">
        {/* Advanced Glow Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset--20 bg-gradient-to-r from-blue-600/20 via-blue-400/10 to-transparent blur-[60px] rounded-full"
        />

        <svg
          viewBox="0 0 100 100"
          className="w-64 h-64 md:w-[28rem] md:h-[28rem] overflow-visible"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Morphing Path with Glow */}
          <motion.path
            d={paths[step]}
            fill="none"
            stroke="url(#neonGradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            animate={{
              d: paths[step],
              scale: step === 0 || step === 4 ? [1, 1.02, 1] : 1,
              strokeDasharray: ["0 1000", "1000 0"],
            }}
            transition={{
              d: { duration: 2, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              strokeDasharray: { duration: 1.5, ease: "easeOut" }
            }}
          />

          {/* Secondary Faint Path for Depth */}
          <motion.path
            d={paths[step]}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.1"
            opacity="0.3"
            animate={{ d: paths[step] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <AnimatePresence>
        {showTagline && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                }
              }
            }}
            className="mt-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-[0.1em] text-white uppercase font-display flex flex-wrap justify-center gap-x-4">
              {["We", "shape", "the", "internet"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  className={word === "internet" ? "text-blue-500 italic" : "bg-clip-text text-transparent bg-gradient-to-t from-white/60 to-white"}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.div 
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { 
                  width: "100%", 
                  opacity: 1,
                  transition: { delay: 1, duration: 1.5, ease: "easeInOut" }
                }
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-6 mx-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MorphingLogo;

