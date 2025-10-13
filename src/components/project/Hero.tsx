import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../App";

function Hero() {
  const { isDarkMode } = useContext(DarkModeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      className={`pt-24 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-medium mb-4 sm:mb-6 ${
              isDarkMode
                ? "bg-primary-900/20 border-primary-400 text-primary-300"
                : "bg-primary-50 border-primary-700 text-primary-700"
            }`}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Portfolio Showcase
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Projects
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A collection of projects that showcase my expertise in modern web
            development, mobile applications, and user experience design. Each
            project represents a unique challenge and solution.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              { number: "25+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "8+", label: "Technologies Used" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-2 ${
                    isDarkMode ? "text-primary-500" : "text-slate-900"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-xs sm:text-sm font-medium ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
