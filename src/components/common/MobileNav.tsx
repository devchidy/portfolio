import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../App";

interface MobileNavProps {
  onClose: () => void;
}

function MobileNav({ onClose }: MobileNavProps) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { isDarkMode } = useContext(DarkModeContext);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-me", label: "About" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-40">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Navigation Panel */}
      <div
        className={`absolute top-20 right-6 w-64 rounded-2xl shadow-2xl border overflow-hidden ${
          isDarkMode
            ? "bg-slate-800 border-slate-700/50"
            : "bg-white border-slate-200/50"
        }`}
      >
        <div className="p-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`block w-full px-4 py-3 rounded-md text-left transition-all duration-200 ${
                  splitLocation[1] === item.path.split("/")[1] ||
                  (item.path === "/" && splitLocation[1] === "")
                    ? isDarkMode
                      ? "bg-primary-900/20 text-white font-medium"
                      : "bg-primary-100 text-slate-900 font-medium"
                    : isDarkMode
                    ? "text-slate-300 hover:bg-primary-900/10 hover:text-white"
                    : "text-slate-600 hover:bg-primary-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div
            className={`mt-8 pt-6 border-t ${
              isDarkMode ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <p
              className={`text-xs font-medium mb-3 ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Get in touch
            </p>
            <div className="space-y-2">
              <a
                href="mailto:ndukaofoegbu9@gmail.com"
                className={`block text-sm transition-colors ${
                  isDarkMode
                    ? "text-slate-300 hover:text-primary-400"
                    : "text-slate-700 hover:text-primary-700"
                }`}
              >
                ndukaofoegbu9@gmail.com
              </a>
              <a
                href="https://github.com/daveblaq"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-sm transition-colors ${
                  isDarkMode
                    ? "text-slate-300 hover:text-primary-400"
                    : "text-slate-700 hover:text-primary-700"
                }`}
              >
                github.com/devchidy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
