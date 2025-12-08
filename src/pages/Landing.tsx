import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  const navigate = useNavigate();
  const [shouldShowAnimation, setShouldShowAnimation] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if animation has been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenLogoAnimation');
    if (hasSeenAnimation) {
      // Skip animation and go directly to home
      navigate('/home', { replace: true });
    } else {
      // Show animation
      setShouldShowAnimation(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (shouldShowAnimation) {
      // Text animation: 0.3s delay + 1s duration = 1.3s
      // Text fill: 0.5s delay + 6s duration = 6.5s
      // Shimmer: starts at 4s, duration 2s, finishes at 6s
      // Navigate immediately after shimmer completes (at 6s)
      const timer = setTimeout(() => {
        sessionStorage.setItem('hasSeenLogoAnimation', 'true');
        navigate('/home', { replace: true });
      }, 6000); // Navigate right after shimmer completes (4s delay + 2s duration = 6s)
      return () => clearTimeout(timer);
    }
  }, [shouldShowAnimation, navigate]);

  // Don't render until we know whether to show animation
  if (shouldShowAnimation === null) {
    return (
      <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center">
        {/* Empty black screen while checking sessionStorage */}
      </div>
    );
  }

  if (!shouldShowAnimation) {
    return null; // Will redirect immediately
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.3,
          ease: 'easeOut'
        }
      }}
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Shimmer effect - full screen height, appears after text fill animation */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2,
          delay: 4, // Starts after text fill animation completes (0.5s delay + 6s duration = 6.5s)
          repeat: 1, // Run once
          ease: 'easeInOut',
        }}
        className="fixed inset-0 z-20 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent skew-x-12 pointer-events-none"
        style={{ height: '100vh', width: '100vw' }}
      />
      
      <div className="relative w-full max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative z-10"
        >
          {/* Glow effect behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1.2 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="absolute inset-0 blur-3xl -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(244, 196, 48, 0.3), rgba(244, 196, 48, 0.1), transparent)',
            }}
          />

          {/* Logo Text */}
          <motion.div
            className="relative z-40 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight relative inline-block"
              style={{ 
                color: '#333',
              }}
            >
              <span className="relative z-10">SAAR</span>
              <motion.span
                className="absolute inset-0 z-20 overflow-hidden"
                style={{ 
                  color: '#f4c430',
                }}
              >
                <motion.span
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                  }}
                  animate={{
                    clipPath: [
                      'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                      'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                      'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                      'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                      'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                      'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                      'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                      'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                      'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                      'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                      'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                      'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                      'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                      'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                    ],
                  }}
                  transition={{ 
                    duration: 6, 
                    delay: 0.5, 
                    ease: [0.25, 0.1, 0.25, 1],
                    times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                  }}
                >
                  SAAR
                </motion.span>
              </motion.span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3">
              <motion.span 
                className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-wide relative inline-block whitespace-nowrap"
                style={{ color: '#333' }}
              >
                <span className="relative z-10">GROUP OF</span>
                <motion.span
                  className="absolute inset-0 z-20 overflow-hidden"
                  style={{ color: '#ffd966' }}
                >
                  <motion.span
                    className="absolute inset-0"
                    style={{
                      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                    }}
                    animate={{
                      clipPath: [
                        'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                        'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                        'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                        'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                        'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                        'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                        'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                        'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                        'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                        'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                        'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                        'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                        'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                        'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                      ],
                    }}
                    transition={{ 
                      duration: 6, 
                      delay: 0.5, 
                      ease: [0.25, 0.1, 0.25, 1],
                      times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                    }}
                  >
                    GROUP OF
                  </motion.span>
                </motion.span>
              </motion.span>
              <motion.span 
                className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-wide relative inline-block whitespace-nowrap"
                style={{ color: '#333' }}
              >
                <span className="relative z-10">COMPANIES</span>
                <motion.span
                  className="absolute inset-0 z-20 overflow-hidden"
                  style={{ color: '#ffd966' }}
                >
                  <motion.span
                    className="absolute inset-0"
                    style={{
                      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                    }}
                    animate={{
                      clipPath: [
                        'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                        'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                        'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                        'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                        'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                        'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                        'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                        'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                        'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                        'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                        'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                        'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                        'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                        'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                      ],
                    }}
                    transition={{ 
                      duration: 6, 
                      delay: 0.5, 
                      ease: [0.25, 0.1, 0.25, 1],
                      times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                    }}
                  >
                    COMPANIES
                  </motion.span>
                </motion.span>
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-500/40 rounded-full"
            initial={{
              x: `${20 + i * 15}%`,
              y: `${30 + i * 10}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${30 + i * 10}%`, `${20 + i * 10}%`, `${30 + i * 10}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

