"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Traveler",
    price: "$4.99",
    period: "per plan",
    features: [
      "1 GB data",
      "7-day validity",
      "Single country",
      "Instant activation",
      "24/7 support",
    ],
    highlight: false,
  },
  {
    name: "Explorer",
    price: "$14.99",
    period: "per plan",
    features: [
      "5 GB data",
      "30-day validity",
      "Regional coverage",
      "Instant activation",
      "Data top-up available",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "$29.99",
    period: "per plan",
    features: [
      "20 GB data",
      "30-day validity",
      "Global coverage",
      "Instant activation",
      "Unlimited top-ups",
      "Dedicated support",
      "Team management",
    ],
    highlight: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
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
          Simple{" "}
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Pricing
          </span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
        >
          No contracts, no hidden fees. Pay only for what you need.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-accent-blue/20 to-accent-purple/20 border-2 border-accent-blue/50 scale-105"
                  : "glass"
              } flex flex-col`}
            >
              {plan.highlight && (
                <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <span className="text-accent-blue">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`block text-center py-3 rounded-xl font-semibold transition-transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
