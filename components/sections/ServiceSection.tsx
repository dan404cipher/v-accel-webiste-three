"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

interface ServiceSectionProps {
  title: string;
  subheading?: string;
  description: string;
  image?: string;
  link?: string;
  points?: readonly string[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subheading,
  description,
  image,
  link,
  points,
}) => (
  <section className="relative min-h-auto flex items-center justify-center w-full px-4 py-4">
    <div className="relative w-full max-w-7xl h-[80vh] rounded-2xl overflow-hidden group shadow-2xl flex items-center">
      {/* Show image and overlays only on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full group-hover:block hidden">
          {image && (
            <motion.img
              src={image}
              alt={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover blur-md group-hover:blur-0"
            />
          )}
          {/* Outer overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/10"
          />
          {/* Inner overlay - darker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-14 bg-gray-900/90 rounded-2xl"
          />
        </div>
      </div>
      {/* Content + Side Image */}
      <motion.div
        className="relative z-10 flex flex-row items-center justify-between h-full w-full p-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <motion.h2
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block mb-10"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          {subheading && (
            <motion.h3
              className="text-3xl font-bold text-white mb-10"
              variants={itemVariants}
            >
              {subheading}
            </motion.h3>
          )}
          <motion.p
            className="text-gray-300 mb-10 text-lg"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          {points && (
            <motion.ul
              className="list-none mb-10 space-y-2"
              variants={containerVariants}
            >
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="text-lg text-white"
                  variants={itemVariants}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          )}
          {link && (
            <motion.a
              href={link}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              Learn more
            </motion.a>
          )}
        </div>
        {/* Right: Image (always visible, not just on hover) */}
        {image && (
          <motion.img
            src={image}
            alt={title}
            className="flex-1 max-w-xs h-full rounded-2xl object-cover ml-10 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </div>
  </section>
);