"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const stacks = [
  {
    title: 'API Gateway',
    items: ['Kong', 'Ambassador', 'Tyk'],
  },
  {
    title: 'Service Mesh',
    items: ['Istio', 'Linkerd', 'Consul'],
  },
  {
    title: 'Message Queue',
    items: ['Kafka', 'RabbitMQ', 'NATS'],
  },
  {
    title: 'Service Discovery',
    items: ['Eureka', 'Consul', 'ZooKeeper'],
  },
  {
    title: 'Load Balancing',
    items: ['HAProxy', 'Nginx', 'Envoy'],
  },
  {
    title: 'Monitoring',
    items: ['Prometheus', 'Grafana', 'Jaeger'],
  },
  {
    title: 'Container Runtime',
    items: ['Docker', 'containerd', 'CRI-O'],
  },
  {
    title: 'Orchestration',
    items: ['Kubernetes', 'Docker Swarm', 'Nomad'],
  },
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

export const MicroservicesContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-60 w-full z-[20]"
    >
      {/* Cards Grid */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="grid grid-cols-2 gap-3 w-full max-w-[500px]">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-3 flex flex-col items-center justify-center min-h-[130px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <div className="text-base font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {stack.title}
              </div>
              <ul className="flex flex-col gap-1 items-center justify-center">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-white/90 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content second */}
      <div className="h-full w-full flex flex-col gap-7 justify-center m-auto text-start ml-15">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-7 text-6xl font-extrabold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Microservices{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[220px] font-extrabold">
              Architecture
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            V-Accel AI Dynamics
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-0 max-w-[600px] font-semibold"
        >
          Transform Your Architecture: Build Scalable and Resilient Systems.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-0 max-w-[600px]"
        >
          Design with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Agility
          </span>
          .
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-0 max-w-[600px]"
        >
          Scale with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Resilience
          </span>
          .
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-0 max-w-[600px]"
        >
          Deploy with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Confidence
          </span>
          .
        </motion.p>
      </div>
    </motion.div>
  );
}; 