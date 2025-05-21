'use client'

import { motion, useInView } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/lib/motion'
import Image from 'next/image'
import { useRef } from 'react'

const formElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const subheadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const floatingTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export const ContactForm = () => {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col items-center justify-start gap-20 px-20 ml-20 pb-40 relative z-10 pt-40">
      {/* Heading */}
      <div ref={headingRef} className="flex flex-col items-center gap-4">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          className="text-5xl font-bold text-center"
        >
          <motion.span 
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="text-white"
          >
            Request for{" "}
          </motion.span>
          <motion.span 
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Quote
          </motion.span>
        </motion.h1>
        <motion.p
          variants={subheadingVariants}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          className="text-xl text-white/70 text-center max-w-2xl"
        >
          Get in touch with us to discuss your project requirements and receive a detailed quote
        </motion.p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-start justify-start gap-20">
          {/* Form Section */}
          <motion.div
            variants={slideInFromRight(1)}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl w-[600px]"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  custom={0}
                  variants={formElementVariants}
                  initial="hidden"
                  animate={isHeadingInView ? "visible" : "hidden"}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="name" className="text-white/80 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  custom={1}
                  variants={formElementVariants}
                  initial="hidden"
                  animate={isHeadingInView ? "visible" : "hidden"}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="email" className="text-white/80 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              <motion.div
                custom={2}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                className="flex flex-col gap-2"
              >
                <label htmlFor="subject" className="text-white/80 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="What&apos;s this about?"
                />
              </motion.div>
              <motion.div
                custom={3}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                className="flex flex-col gap-2"
              >
                <label htmlFor="message" className="text-white/80 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>
              <motion.button
                custom={4}
                variants={formElementVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-500/90 to-cyan-500/90 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Animated Text Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="w-[700px] h-full flex flex-col justify-start items-start gap-8 mt-12"
          >
            <motion.div
              custom={0}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              whileInView={floatingAnimation}
            >
              Let&apos;s Build Something Amazing
            </motion.div>
            <motion.div
              custom={1}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-2xl text-white/80"
              whileInView={floatingAnimation}
            >
              Your Vision, Our Expertise
            </motion.div>
            <motion.div
              custom={2}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-xl text-white/60"
              whileInView={floatingAnimation}
            >
              Transform Your Ideas Into Reality
            </motion.div>
            <motion.div
              custom={3}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-lg text-white/50 italic"
              whileInView={floatingAnimation}
            >
              Innovation Meets Excellence
            </motion.div>
            <motion.div
              custom={4}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"
              whileInView={floatingAnimation}
            >
              Crafting Digital Experiences
            </motion.div>
            <motion.div
              custom={5}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-lg text-white/40"
              whileInView={floatingAnimation}
            >
              Where Technology Meets Creativity
            </motion.div>
            <motion.div
              custom={6}
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-2xl font-semibold text-white/70"
              whileInView={floatingAnimation}
            >
              Turning Dreams Into Code
            </motion.div>
          </motion.div>
        </div>

        {/* Urgent Queries Section */}
        <motion.div
          variants={slideInFromRight(1.2)}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl w-full flex flex-col items-center"
        >
          <motion.h3
            custom={0}
            variants={formElementVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            For Urgent Queries
          </motion.h3>
          <div className="flex flex-row gap-4 mb-8 justify-center">
            <motion.button
              custom={1}
              variants={formElementVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[200px] px-6 py-3 bg-gradient-to-r from-purple-500/90 to-cyan-500/90 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us
            </motion.button>
            <motion.button
              custom={2}
              variants={formElementVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[200px] px-6 py-3 bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              WhatsApp Us
            </motion.button>
          </div>
          <div className="flex flex-col items-center">
            <motion.p
              custom={3}
              variants={formElementVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              className="text-white/60 text-sm text-center"
            >
              Available 24/7 for your urgent needs
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}