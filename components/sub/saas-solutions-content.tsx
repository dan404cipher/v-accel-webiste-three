"use client";

import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/lib/motion";

const solutions = [
  {
    title: 'Subscription Management',
    description: 'Handle recurring billing and subscriptions'
  },
  {
    title: 'User Management',
    description: 'Manage users, roles, and permissions'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track key metrics and performance'
  },
  {
    title: 'API Integration',
    description: 'Connect with other services seamlessly'
  },
  {
    title: 'Payment Processing',
    description: 'Secure payment handling and processing'
  },
  {
    title: 'Multi-tenancy',
    description: 'Support multiple customers efficiently'
  },
  {
    title: 'Automated Workflows',
    description: 'Streamline business processes'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and reliable hosting'
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security features'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const SaasSolutionsContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col items-center gap-7 max-w-[800px] text-center"
      >
        <motion.h2
          variants={slideInFromTop}
          className="text-4xl font-extrabold text-white"
        >
          Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">SaaS Solutions</span>. We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Scalable</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Secure</span> Cloud Applications.
        </motion.h2>

        <motion.p
          variants={slideInFromTop}
          className="text-lg text-gray-400 font-semibold"
        >
          From MVP to enterprise-grade SaaS platforms, we help you build, scale, and grow your software business.
        </motion.p>

        <div className="grid grid-cols-3 gap-3 w-full max-w-[900px] mt-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-5 flex flex-col items-center justify-center min-h-[150px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <span className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                {solution.title}
              </span>
              <span className="text-sm text-gray-400 text-center">
                {solution.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}; 