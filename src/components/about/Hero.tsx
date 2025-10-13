import React, { useContext } from "react";
import { motion } from "framer-motion";
import { tech } from "../../data/tech";
import { tools } from "../../data/tools";
import { Link } from "react-router-dom";
import uniuyo from "../../assets/images/uniuyo.jpg";
import { DarkModeContext } from "../../App";

interface DataItem {
  id: number;
  icon: any;
  tech: string;
  text: string;
  color: string;
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      className={`py-20 sm:py-20 lg:py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            About Me
          </div>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Crafting Digital Experiences
          </h1>
          <p
            className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A passionate software engineer with a love for clean code, beautiful
            interfaces, and solving complex problems through elegant solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* Personal Story */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                My Story
              </h2>
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p
                  className={`text-base sm:text-lg leading-relaxed ${
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
                  , I love building clean, user-friendly interfaces that make
                  technology feel effortless. I enjoy turning ideas into
                  functional, polished products that not only work seamlessly
                  but also look great. From concept to deployment, I stay
                  focused on creating experiences that truly solve real user
                  problems and feel intuitive to use.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Education
              </h2>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${
                  isDarkMode
                    ? "bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600"
                    : "bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200"
                }`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border-2 shadow-sm flex items-center justify-center overflow-hidden ${
                        isDarkMode
                          ? "bg-slate-800 border-slate-600"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <img
                        src={uniuyo}
                        alt="University of Uyo"
                        className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg font-bold mb-1 ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      HND Computer Science
                    </h3>
                    <p
                      className={`mb-2 text-sm sm:text-base ${
                        isDarkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Federal Polytechnic, OKO
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      JANUARY 2016 - August 2023
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Core Skills
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {[
                  {
                    title: "Attention to Detail",
                    description:
                      "I am meticulous when it comes to deliverables, ensuring every pixel and line of code meets the highest standards.",
                  },
                  {
                    title: "Communication",
                    description:
                      "I facilitate regular team meetings, provide project updates to stakeholders, and serve as a central point of contact for project-related matters.",
                  },
                  {
                    title: "Problem Solving",
                    description:
                      "I approach complex challenges with analytical thinking and creative solutions, always focusing on the user experience.",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className={`rounded-md p-4 sm:p-6 border shadow-sm ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <h3
                      className={`font-semibold mb-2 text-sm sm:text-base ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {skill.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Technologies & Tools */}
          <div className="space-y-8 sm:space-y-12">
            {/* Technologies */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Technologies
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {tech.map((item: DataItem, index) => {
                  const Icon = item?.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className={`group rounded-md p-4 border hover:shadow-md transition-all duration-300 ${
                        isDarkMode
                          ? "bg-slate-800 border-slate-700 hover:border-slate-600"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Icon color={item?.color} className="w-8 h-8" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold transition-colors ${
                              isDarkMode
                                ? "text-white group-hover:text-slate-200"
                                : "text-slate-900 group-hover:text-slate-700"
                            }`}
                          >
                            {item?.tech}
                          </h3>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            {item?.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Tools & Platforms
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {tools.map((item: DataItem, index) => {
                  const Icon = item?.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className={`group rounded-md p-4 border hover:shadow-md transition-all duration-300 ${
                        isDarkMode
                          ? "bg-slate-800 border-slate-700 hover:border-slate-600"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Icon color={item?.color} className="w-8 h-8" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold transition-colors ${
                              isDarkMode
                                ? "text-white group-hover:text-slate-200"
                                : "text-slate-900 group-hover:text-slate-700"
                            }`}
                          >
                            {item?.tech}
                          </h3>
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                          >
                            {item?.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600"
                  : "bg-gradient-to-br from-slate-900 to-slate-800"
              } text-white`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                I'm always excited to work on new projects and collaborate with
                talented teams. Let's discuss how we can bring your ideas to
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:ndukaofoegbu9@gmail.com"
                  className="inline-flex items-center justify-center px-6 sm:px-4 py-3 bg-primary-400 text-slate-900 font-medium rounded-md hover:bg-primary-300 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get in Touch
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-6 sm:px-4 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://docs.google.com/document/d/1XWX47CVGRfzvwBI0PRL5QIVeXgakfwbxg1QhBlCkw98/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-4 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
