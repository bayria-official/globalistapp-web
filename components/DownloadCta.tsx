"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DownloadCta() {
  return (
    <section id="download" className="py-24 px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Go Global?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Join 10,000+ travelers who stay connected with Globalist.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Available on iOS and Android. Free to download.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
