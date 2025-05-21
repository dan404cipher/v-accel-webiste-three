"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const categoryEmojis: Record<string, string> = {
  cafe: "☕️",
  ecommerce: "🛒",
  education: "🎓",
  events: "🎉",
  hospital: "🏥",
  insurance: "🛡️",
  portfolio: "💼",
  realestate: "🏠",
  restaurant: "🍽️",
  school: "🏫",
  travels: "✈️",
  bakery: "🥐",
  carrental: "🚗",
  gaming: "🎮",
  gym: "🏋️‍♂️",
};

const categories = [
  {
    key: "cafe",
    label: "Cafe",
    title: "Cafe Digital Experience",
    subtitle: "Brewing connections, one click at a time.",
    image: "/work/cafe.png",
    desc: "We help cafes build a digital presence, from online menus to loyalty apps, making every customer feel at home. Our solutions enable seamless ordering, manage reservations, and keep your community engaged with personalized offers. Enhance your cafe's brand and customer loyalty with digital tools tailored for the hospitality industry.",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce Excellence",
    subtitle: "Turning clicks into customers.",
    image: "/work/ecommerce.png",
    desc: "We craft seamless online stores with robust features, helping you grow sales and delight shoppers worldwide. From inventory management to secure payments and analytics, our platforms are scalable, secure, and designed for growth. Reach new markets and provide a smooth shopping experience for your customers.",
  },
  {
    key: "education",
    label: "Education",
    title: "Education Innovation",
    subtitle: "Transforming learning for the digital age.",
    image: "/work/education.png",
    desc: "E-learning platforms, student management, and more for modern education. We create interactive classrooms, automate grading, and provide tools for teachers, students, and parents to connect and succeed. Our solutions foster engagement and make learning accessible for all, whether in-person or remote.",
  },
  {
    key: "events",
    label: "Events",
    title: "Event Management",
    subtitle: "Making every event unforgettable.",
    image: "/work/events.png",
    desc: "Ticketing, scheduling, and attendee engagement for events of all sizes. Our solutions help you manage registrations, send reminders, and create memorable experiences for your audience. From virtual to in-person, we make event management effortless and impactful.",
  },
  {
    key: "hospital",
    label: "Hospital",
    title: "Hospital Solutions",
    subtitle: "Empowering better health with technology.",
    image: "/work/Hospital (1).png",
    desc: "Digital solutions for hospitals, clinics, and health startups. We streamline patient management, appointment scheduling, and telemedicine, ensuring efficient and compassionate care. Our platforms are secure, scalable, and designed for modern healthcare needs, improving outcomes for both patients and providers.",
  },
  {
    key: "insurance",
    label: "Insurance",
    title: "Insurance Tech",
    subtitle: "Securing futures with smart systems.",
    image: "/work/insurance.png",
    desc: "Digital onboarding, claims, and engagement for insurance providers. Our platforms simplify policy management, automate claims, and enhance customer trust with transparent processes. Deliver a seamless experience for both agents and policyholders, and stay ahead in a competitive market.",
  },
  {
    key: "portfolio",
    label: "Portfolio",
    title: "Portfolio Websites",
    subtitle: "Showcase your work with style.",
    image: "/work/portfolio.png",
    desc: "Personal and business portfolios that make a lasting impression. We design visually stunning sites to highlight your achievements, skills, and projects, helping you stand out online. Our solutions are easy to update, optimized for every device, and tailored to your unique brand.",
  },
  {
    key: "realestate",
    label: "Real Estate",
    title: "Real Estate Tech",
    subtitle: "Modernizing property experiences.",
    image: "/work/realestate.png",
    desc: "Listings, virtual tours, and CRM for real estate businesses. Our solutions make it easy to manage properties, connect with buyers, and provide immersive viewing experiences. Streamline your workflow, close deals faster, and offer clients a modern, digital-first approach.",
  },
  {
    key: "restaurant",
    label: "Restaurant",
    title: "Restaurant Experience",
    subtitle: "Serving up seamless digital dining.",
    image: "/work/restaurant.png",
    desc: "Menus, reservations, and loyalty apps for restaurants and cafes. We help you streamline orders, manage tables, and engage diners with special offers and feedback tools. Delight your guests and optimize your operations with our restaurant tech, designed for efficiency and growth.",
  },
  {
    key: "school",
    label: "School",
    title: "School Management",
    subtitle: "Smart solutions for schools.",
    image: "/work/school.png",
    desc: "Attendance, grading, and communication tools for schools. Our platforms connect teachers, students, and parents, making administration and learning more efficient and collaborative. Empower your school community with our all-in-one solution for modern education.",
  },
  {
    key: "travels",
    label: "Travels",
    title: "Travel & Adventure",
    subtitle: "Journeys begin with a single tap.",
    image: "/work/travels.png",
    desc: "Our travel solutions simplify bookings, itineraries, and customer engagement, so your clients can focus on the adventure. We provide tools for agencies, tour operators, and travelers alike, making every journey smooth and memorable. Enhance your travel business with digital innovation.",
  },
  {
    key: "bakery",
    label: "Bakery",
    title: "Bakery Solutions",
    subtitle: "Fresh digital experiences for bakeries.",
    image: "/work/bakery.png",
    desc: "We help bakeries grow with online ordering, loyalty programs, and beautiful digital menus. Our solutions streamline daily operations, enhance customer engagement, and make it easy to showcase your latest treats online. From inventory tracking to customer feedback, we provide everything you need to rise above the competition.",
  },
  {
    key: "carrental",
    label: "Car Rental",
    title: "Car Rental Services",
    subtitle: "Drive your business forward.",
    image: "/work/carrental.png",
    desc: "Booking, fleet management, and customer engagement for modern car rental companies. Our platforms simplify reservations, automate billing, and provide real-time vehicle tracking for a smooth rental experience. Enhance customer satisfaction and streamline your operations with our tailored solutions.",
  },
  {
    key: "gaming",
    label: "Gaming",
    title: "Gaming Platforms",
    subtitle: "Level up your digital play.",
    image: "/work/gaming.jpg",
    desc: "Community, leaderboards, and engagement tools for gaming brands. We build immersive platforms that connect players, track achievements, and foster vibrant gaming communities. Our solutions support tournaments, live streams, and social features for maximum engagement.",
  },
  {
    key: "gym",
    label: "Gym",
    title: "Gym & Fitness",
    subtitle: "Empowering healthy lifestyles.",
    image: "/work/gym.png",
    desc: "Membership management, class bookings, and digital engagement for gyms and fitness centers. Our tools help you retain members, schedule sessions, and offer personalized fitness journeys. Motivate your community and streamline your operations with our fitness tech.",
  },
];

const MAIN_CATEGORIES = categories.slice(0, 5);
const MORE_CATEGORIES = categories.slice(5);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "tween",
      ease: "easeIn",
      duration: 0.7,
    },
  }),
};

export const WorkSection = () => {
  const [active, setActive] = useState(categories[0].key);
  const [showMore, setShowMore] = useState(false);
  const current = categories.find((cat) => cat.key === active)!;

  return (
    <>
      <motion.section
        className="w-full flex flex-col items-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Navbar */}
        <motion.nav
          className="flex gap-4 mb-10 flex-wrap"
          variants={fadeUp}
          custom={0}
        >
          {MAIN_CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.key}
              onClick={() => { setActive(cat.key); setShowMore(false); }}
              className={clsx(
                "px-6 py-2 rounded-full font-semibold transition",
                active === cat.key
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
          {/* More Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setShowMore((v) => !v)}
              className={clsx(
                "px-6 py-2 rounded-full font-semibold transition bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              variants={fadeUp}
              custom={MAIN_CATEGORIES.length}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              More ▾
            </motion.button>
            {showMore && (
              <motion.div
                className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-50 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", ease: "easeIn", duration: 0.5 }}
              >
                {MORE_CATEGORIES.map((cat, i) => (
                  <motion.button
                    key={cat.key}
                    onClick={() => { setActive(cat.key); setShowMore(false); }}
                    className={clsx(
                      "block w-full text-left px-4 py-2 hover:bg-gray-100",
                      active === cat.key
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                        : ""
                    )}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Title & Subtitle */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          custom={0.5}
        >
          <motion.h2
            className="text-4xl text-white font-bold mb-2"
            variants={fadeUp}
            custom={0.6}
          >
            {current.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500"
            variants={fadeUp}
            custom={0.7}
          >
            {current.subtitle}
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl"
          variants={fadeUp}
          custom={1}
        >
          {/* Left: Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={fadeUp}
            custom={1.2}
          >
            <motion.div
              variants={fadeUp}
              custom={1.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={current.image}
                alt={current.title}
                width={700}
                height={500}
                className="rounded-2xl shadow-lg object-cover"
                priority={active === categories[0].key}
              />
            </motion.div>
          </motion.div>
          {/* Right: Description */}
          <motion.div
            className="flex-1 text-lg text-gray-300 max-w-xl"
            variants={fadeUp}
            custom={1.4}
          >
            {current.desc}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Next Section: Overview & Category Cards */}
      <motion.section
        className="w-full flex flex-col md:flex-row items-center justify-center py-20 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left: Title, Subtitle, Description */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center px-4"
          variants={fadeUp}
          custom={0}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeUp}
            custom={0.1}
          >
            Explore Our Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-3"
            variants={fadeUp}
            custom={0.2}
          >
            A digital edge for every industry
          </motion.p>
          <motion.p
            className="text-gray-300 text-lg"
            variants={fadeUp}
            custom={0.3}
          >
            We deliver tailored digital solutions for a wide range of industries. Whether you run a cafe, manage a hospital, or lead an e-commerce brand, our expertise helps you innovate, streamline, and grow. Discover how we can empower your business with technology.
          </motion.p>
        </motion.div>
        {/* Right: Category Cards */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className="bg-gradient-to-br from-[#2d2a4a] to-[#1a1833] rounded-xl shadow-lg p-5 flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer"
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.97, rotate: 2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              custom={idx}
            >
              <motion.div
                className="mb-3 text-4xl"
                whileHover={{ rotate: 12, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span role="img" aria-label={cat.label}>
                  {categoryEmojis[cat.key] || "🌟"}
                </span>
              </motion.div>
              <motion.div
                className="text-lg font-semibold text-white text-center"
                variants={fadeUp}
                custom={idx + 0.1}
              >
                {cat.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};