import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Web from "./Web";
import App from "./App";
import { DarkModeContext } from "../../App";

const tabs = [
  {
    id: 1,
    text: "Web Applications",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    text: "Mobile Applications",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

interface DataItem {
  id: number;
  text: string;
  icon: React.ReactNode;
}

function Project() {
  const [active, setActive] = useState(1);
  const { isDarkMode } = useContext(DarkModeContext);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section
      className={`py-12 sm:py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12"
        >
          <div
            className={`flex rounded-2xl p-2 shadow-sm border ${
              isDarkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            {tabs.map((item: DataItem, index) => (
              <motion.button
                key={item.id}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(item.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                  item.id === active
                    ? isDarkMode
                      ? "bg-slate-700 text-white shadow-sm border border-primary-400"
                      : "bg-white text-slate-900 shadow-sm border border-primary-200"
                    : isDarkMode
                    ? "text-slate-300 hover:text-white hover:bg-primary-900/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-primary-50"
                }`}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">{item.icon}</div>
                <span>{item.text}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="transition-all duration-500 ease-in-out"
          >
            {active === 1 ? <Web /> : <App />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Project;
