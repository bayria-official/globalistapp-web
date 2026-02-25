"use client";

import { motion } from "framer-motion";

const regions = [
  { name: "Europe", countries: "45+ countries", flag: "🇪🇺" },
  { name: "Asia Pacific", countries: "35+ countries", flag: "🌏" },
  { name: "Americas", countries: "30+ countries", flag: "🌎" },
  { name: "Middle East", countries: "15+ countries", flag: "🌍" },
  { name: "Africa", countries: "20+ countries", flag: "🌍" },
  { name: "Caribbean", countries: "10+ countries", flag: "🏝️" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Coverage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            150+ Countries
          </span>{" "}
          Covered
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          From Tokyo to Toronto, we&apos;ve got you covered.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:border-accent-purple/40 transition-colors"
            >
              <div className="text-3xl mb-2">{r.flag}</div>
              <h3 className="font-semibold mb-1">{r.name}</h3>
              <p className="text-gray-400 text-sm">{r.countries}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
