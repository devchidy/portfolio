import React, { useContext } from "react";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";
import { DarkModeContext } from "../../App";

interface DataItem {
  id: number;
  icon: any;
  text: string;
  url: string;
}

function Footer() {
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

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-2xl backdrop-blur-sm flex items-center justify-center ${
                  isDarkMode ? "bg-white/10" : "bg-white/10"
                }`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl text-primary-400 font-bold">
                  Nduka Ofoegbu
                </h3>
                <p className="text-slate-400 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Crafting exceptional digital experiences with modern technologies.
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about-me", label: "About" },
                { href: "/projects", label: "Projects" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ x: 5 }}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:o.davecodes@gmail.com"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
              >
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>ndukaofoegbu9@gmail.com</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/devchidy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>github.com/devchdiy</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-slate-400 mb-3">
                Follow me
              </h5>
              <div className="flex space-x-3">
                {socials.map((item: DataItem, index) => {
                  const Icon = item?.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={item?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDarkMode
                          ? "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`border-t mt-12 pt-8 ${
            isDarkMode ? "border-slate-800" : "border-slate-800"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2025 NDUKA OFOEGBU. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <span className="text-slate-400 text-sm">Built with</span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-slate-400 text-sm">
                  React & TypeScript
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
