import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpg";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { BsSun, BsMoon } from "react-icons/bs";
import MobileNav from "./MobileNav";
import { DarkModeContext } from "../../App";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? isDarkMode
              ? "bg-slate-800/95 backdrop-blur-md shadow-lg border-b border-slate-700/50"
              : "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-2xl overflow-hidden ring-2 transition-all duration-300 ${
                      isDarkMode
                        ? "ring-slate-600 group-hover:ring-primary-400"
                        : "ring-slate-200 group-hover:ring-primary-200"
                    }`}
                  >
                    <img
                      src={profile}
                      alt="David Oladele"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-300 rounded-full border-2 border-white"
                  ></motion.div>
                </div>
                <div className="hidden sm:block">
                  <h3
                    className={`font-semibold text-lg leading-tight ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Nduka Ofoegbu
                  </h3>
                  <p
                    className={`text-xs font-medium ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Software Engineer
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              variants={itemVariants}
              className="hidden lg:flex items-center space-x-1"
            >
              {[
                { path: "/", label: "Home" },
                { path: "/about-me", label: "About" },
                { path: "/projects", label: "Projects" },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      splitLocation[1] === item.path.split("/")[1] ||
                      (item.path === "/" && splitLocation[1] === "")
                        ? isDarkMode
                          ? "text-white bg-primary-900/20"
                          : "text-slate-900 bg-primary-100"
                        : isDarkMode
                        ? "text-slate-300 hover:text-white hover:bg-primary-900/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-primary-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Dark Mode Toggle & Mobile Menu */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-700 text-yellow-400 hover:bg-slate-600"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <BsSun className="w-5 h-5" />
                ) : (
                  <BsMoon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className={`lg:hidden relative w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-primary-300 text-slate-900 hover:bg-primary-400"
                    : "bg-primary-300 text-slate-900 hover:bg-primary-400"
                }`}
              >
                {open ? (
                  <RiCloseFill className="w-5 h-5" />
                ) : (
                  <HiMenuAlt4 className="w-5 h-5" />
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;
