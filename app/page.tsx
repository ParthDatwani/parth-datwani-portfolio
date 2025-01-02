"use client";

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function HomePage() {
  // Typewriter effect text
  const [text] = useTypewriter({
    words: ["I am a Business Analyst", "I transform data into insights", "I help drive informed decisions"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden"
      style={{ background: "var(--background)", color: "var(--text-color)" }}
    >
      {/* Background Image */}

      {/* Dark overlay to ensure text visibility */}
      <div className="absolute inset-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
        {/* Name */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Parth Datwani
        </motion.h1>

        {/* Tagline/Value Proposition */}
        <motion.p
          className="mt-2 text-xl text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Turning Data into Actionable Insights
        </motion.p>

        {/* Typewriter Effect */}
        <motion.div
          className="mt-4 text-lg font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>{text}</span>
          <span className="blinking-cursor">|</span>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/projects"
            className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
          >
            View My Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
}
