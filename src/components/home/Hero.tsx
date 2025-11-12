import React, { useContext } from "react";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../App";

interface DataItem {
  id: number;
  icon: any;
  text: string;
  url: string;
}

function Hero() {
  const { isDarkMode } = useContext(DarkModeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: { opacity: 1, scale: 1, rotate: 3 },
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
        }`}
      >
        <div
          className={`absolute inset-0 opacity-40 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)]"
              : "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)]"
          } bg-[length:20px_20px]`}
        ></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-28 lg:py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary-50 border border-primary-700 text-primary-700 text-xs sm:text-sm font-medium dark:bg-primary-900/20 dark:border-primary-400 dark:text-primary-300"
            >
              <div className="w-2 h-2 bg-primary-300 rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 sm:space-y-4"
            >
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Software Engineer
              </h1>
              <p
                className={`text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Crafting exceptional digital experiences with modern
                technologies
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="prose prose-slate max-w-none dark:prose-invert"
            >
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I'm{" "}
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                Nduka Ofoegbu
                </span>
                , I build simple, user-focused products that just work. Over the
                past 5+ years, I've helped brands in fintech, entertainment,
                edtech, and Web3 turn complex concepts into clean, functional,
                and engaging digital experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 sm:px-4 py-3 sm:py-4 bg-primary-300 border-2 border-gray-800 text-slate-900 font-medium rounded-md hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:border-primary-400 dark:text-slate-900"
              >
                View My Work
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="https://docs.google.com/document/d/1iCeOM19P2QmTJO7e3eaSvnkQyBG6TN4FxIrw3_BYpJA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 sm:px-4 py-3 sm:py-4 border-2 font-medium rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50"
                    : "border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <svg
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6 sm:pt-8">
              <p
                className={`text-sm font-medium mb-4 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {socials.map((item: DataItem, index) => {
                  const Icon = item?.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center px-3 sm:px-4 py-2 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-slate-800 border-slate-700 hover:border-primary-400 hover:shadow-md"
                          : "bg-white border-slate-200 hover:border-primary-200 hover:shadow-md"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                          isDarkMode
                            ? "text-slate-400 group-hover:text-primary-400"
                            : "text-slate-600 group-hover:text-primary-600"
                        }`}
                      />
                      <span
                        className={`ml-2 text-xs sm:text-sm font-medium transition-colors ${
                          isDarkMode
                            ? "text-slate-300 group-hover:text-primary-300"
                            : "text-slate-700 group-hover:text-primary-700"
                        }`}
                      >
                        {item?.text}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={cardVariants}
            className="relative lg:block hidden"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl shadow-2xl border p-4 transform rotate-3 transition-transform duration-500 ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="space-y-6">
                  {/* Code Preview */}
                  <div className="bg-slate-900 rounded-md p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-slate-300">
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-yellow-400">developer</span> ={" "}
                        {"{"}
                      </div>
                      <div className="text-slate-300 ml-4">
                        <span className="text-green-400">name</span>:
                        <span className="text-orange-400">"Nduka Ofoegbu"</span>
                        ,
                      </div>
                      <div className="text-slate-300 ml-4">
                        <span className="text-green-400">role</span>:
                        <span className="text-orange-400">
                          "Software Engineer"
                        </span>
                        ,
                      </div>
                      <div className="text-slate-300 ml-4">
                        <span className="text-green-400">passion</span>:
                        <span className="text-orange-400">
                          "Building amazing things"
                        </span>
                      </div>
                      <div className="text-slate-300">{"}"};</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`text-center p-4 rounded-md ${
                        isDarkMode ? "bg-slate-700" : "bg-slate-50"
                      }`}
                    >
                      <div
                        className={`text-2xl font-bold ${
                          isDarkMode ? "text-primary-500" : "text-slate-900"
                        }`}
                      >
                        5+
                      </div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Years Experience
                      </div>
                    </div>
                    <div
                      className={`text-center p-4 rounded-md ${
                        isDarkMode ? "bg-slate-700" : "bg-slate-50"
                      }`}
                    >
                      <div
                        className={`text-2xl font-bold ${
                          isDarkMode ? "text-primary-500" : "text-slate-900"
                        }`}
                      >
                        25+
                      </div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-300 rounded-2xl shadow-lg transform -rotate-12"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-md shadow-lg transform rotate-12"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div
            className={`w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center ${
              isDarkMode ? "border-slate-600" : "border-slate-300"
            }`}
          >
            <div
              className={`w-1 h-2 sm:h-3 rounded-full mt-1 sm:mt-2 animate-bounce ${
                isDarkMode ? "bg-slate-500" : "bg-slate-400"
              }`}
            ></div>
          </div>
          <span
            className={`text-xs font-medium ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
