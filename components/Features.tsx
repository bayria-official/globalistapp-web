"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🌐",
    title: "Global Coverage",
    desc: "Data plans available in 150+ countries. One app, the whole world.",
  },
  {
    icon: "⚡",
    title: "Instant Activation",
    desc: "Buy a plan and get connected in minutes. No waiting for shipping.",
  },
  {
    icon: "📱",
    title: "No Physical SIM",
    desc: "100% digital. Install your eSIM directly on your phone — no swapping cards.",
  },
  {
    icon: "🔄",
    title: "Easy Top-Up",
    desc: "Running low? Top up your data instantly from the app, anytime.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
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
          Why{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Globalist
          </span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          Everything you need for seamless connectivity abroad.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-accent-blue/40 transition-colors"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
