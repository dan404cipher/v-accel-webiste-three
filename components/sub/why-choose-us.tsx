"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Experienced Team",
    description: "Our team has a proven track record of delivering successful software projects for clients across diverse industries."
  },
  {
    title: "Custom Solutions",
    description: "We don't offer one-size-fits-all solutions. We build software that is uniquely tailored to your specific requirements."
  },
  {
    title: "Data-Driven Approach",
    description: "We leverage data and analytics to optimize your software and measure its impact on your business."
  },
  {
    title: "Transparent Communication",
    description: "We keep you informed throughout the development process and value your feedback."
  },
  {
    title: "Agile Methodology",
    description: "We embrace agile development practices to ensure flexibility, quick iterations, and continuous improvement."
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

export const WhyChooseUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="relative w-full max-w-[1200px] h-[800px] flex items-center justify-center">
        {/* Central Image */}
        <motion.div
          variants={cardVariants}
          className="absolute z-10"
        >
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
            <Image
              src="/hero-bg.svg"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Surrounding Cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          {reasons.map((reason, i) => {
            const radius = 350;
            const angleStep = (2 * Math.PI) / reasons.length;
            const angle = i * angleStep - Math.PI / 2;
            
            const x = Math.round(radius * Math.cos(angle)) - 160;
            const y = Math.round(radius * Math.sin(angle));

            return (
              <motion.div
                key={reason.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="absolute w-[300px]"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}; 