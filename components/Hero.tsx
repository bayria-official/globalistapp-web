"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-purple/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-accent-blue font-semibold tracking-widest uppercase text-sm mb-6"
        >
          Global eSIM for Travelers
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Your World.{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Your eSIM.
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Instant data plans in 150+ countries. No physical SIM needed. Buy,
          install, and connect in minutes — wherever you travel.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.67c-.37-.2-.58-.57-.58-1V1.33c0-.43.21-.8.58-1L14.46 12 3.18 23.67zm1.64.38L16.19 13.4l2.97 2.97-14.34 7.68zM19.82 11.12l-3.5-1.88L5 .95l14.82 7.93 3.56 1.9c.64.34.64 1.1 0 1.44l-3.56 1.9zM16.19 10.6L4.82.05l14.34 7.68-2.97 2.87z" />
            </svg>
            Google Play
          </a>
        </motion.div>

        {/* Phone mockup placeholder */}
        <motion.div
          custom={4}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 mx-auto w-64 h-[500px] rounded-[3rem] bg-gradient-to-b from-accent-blue/30 to-accent-purple/30 border border-white/10 flex items-center justify-center"
        >
          <div className="text-center text-gray-500">
            <div className="text-5xl mb-3">🌍</div>
            <p className="text-sm">Globalist App</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
