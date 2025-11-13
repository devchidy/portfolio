import React, { useContext } from "react";
import { motion } from "framer-motion";
import { work } from "../../data/work";
import { DarkModeContext } from "../../App";

interface DataItem {
  id: number;
  company: string;
  role: string;
  image: string;
  start: string;
  end: string;
  description: string;
  status: number;
  growth: string;
}

interface ItemProps {
  item: DataItem;
  index: number;
}

function Experience() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Item: React.FC<ItemProps> = ({ item, index }) => {
    return (
      <motion.div variants={itemVariants} className="relative group">
        {/* Timeline Line */}
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-700"></div>

        <div className="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Company Logo */}
          <div className="relative flex-shrink-0 flex justify-center sm:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`w-16 h-16 sm:w-12 sm:h-12 rounded-2xl border-2 shadow-lg flex items-center justify-center overflow-hidden group-hover:border-primary-200 transition-all duration-300 ${
                isDarkMode
                  ? "bg-slate-800 border-slate-600"
                  : "bg-white border-slate-200"
              }`}
            >
              <img
                src={item?.image}
                alt={item?.company}
                className="w-10 h-10 sm:w-8 sm:h-8 object-cover rounded-lg"
              />
            </motion.div>
            {item?.status === 1 && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-5 h-5 sm:w-4 sm:h-4 bg-primary-300 rounded-full border-2 border-white"
              ></motion.div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`rounded-2xl p-4 sm:p-6 shadow-sm border hover:shadow-md transition-all duration-300 group-hover:border-primary-200 ${
                isDarkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item?.company}
                  </h3>
                  <p
                    className={`text-base sm:text-lg font-medium mb-2 ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {item?.role}
                  </p>
                </div>
                <div className="text-center sm:text-right">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-slate-700 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item?.start} - {item?.end}
                  </div>
                </div>
              </div>

              {/* Growth Percentage */}
              <div className="mb-4 flex justify-center sm:justify-start">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    isDarkMode
                      ? "bg-primary-900/20 text-primary-300 border border-primary-400"
                      : "bg-primary-50 text-primary-700 border border-primary-400"
                  }`}
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  {item?.growth} Growth Impact
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                {item?.description.split(". ").map(
                  (achievement, index) =>
                    achievement.trim() && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 mt-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              isDarkMode ? "bg-primary-400" : "bg-primary-600"
                            }`}
                          ></div>
                        </div>
                        <p
                          className={`text-sm sm:text-sm leading-relaxed ${
                            isDarkMode ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {achievement.trim()}
                        </p>
                      </motion.div>
                    )
                )}
              </div>

              {/* Status Badge */}
              {item?.status === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                    isDarkMode
                      ? "bg-primary-900/20 text-primary-300 border-primary-400"
                      : "bg-primary-50 text-primary-700 border-primary-400"
                  }`}
                >
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2 animate-pulse"></div>
                  Current Position
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
            Professional Journey
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Work Experience
          </h2>
          <p
            className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A journey through my professional growth, from internships to
            leadership roles, each experience shaping my expertise in software
            development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            {work.map((item: DataItem, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div
            className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-primary-900/20 to-primary-800/20"
                : "bg-gradient-to-r from-primary-50 to-primary-100"
            }`}
          >
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Ready to work together?
            </h3>
            <p
              className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ndukaofoegbu9@gmail.com"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-300 border-2 border-black text-slate-900 font-medium rounded-md hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:border-primary-400"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about-me"
                className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 font-medium rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "border-primary-400 text-slate-300 hover:border-primary-300 hover:bg-primary-900/20"
                    : "border-primary-700 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                Learn More About Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
