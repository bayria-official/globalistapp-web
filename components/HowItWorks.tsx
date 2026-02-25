"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Choose a Plan",
    desc: "Pick the country or region you're traveling to and select a data plan that fits.",
  },
  {
    step: "02",
    title: "Install Your eSIM",
    desc: "Scan the QR code or install directly from the app. Takes less than 2 minutes.",
  },
  {
    step: "03",
    title: "Connect & Go",
    desc: "Land at your destination and you're online instantly. No roaming fees, no hassle.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          How It{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Three simple steps to stay connected worldwide.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xl font-bold mb-6">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
