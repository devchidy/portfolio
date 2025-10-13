import React, { useState, useRef, useEffect, useContext } from "react";
import { IconButton } from "../common/IconButton";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { RiGithubFill } from "react-icons/ri";
import { DarkModeContext } from "../../App";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  const Item = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div
        className={`w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md flex flex-col items-center justify-between border transition-all duration-300 ${
          isDarkMode
            ? "bg-slate-800 border-slate-700 hover:border-primary-400"
            : "bg-white border-slate-200 hover:border-primary-200"
        }`}
      >
        <div className="flex items-center justify-between w-full pb-4 sm:pb-5">
          <div className="flex items-center">
            <div
              className={`rounded-full h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] shadow-sm ${
                isDarkMode ? "bg-slate-700" : "bg-slate-100"
              }`}
            ></div>
            <h3
              className={`font-extrabold text-lg sm:text-xl basis-1/2 leading-[40px] sm:leading-[48px] pl-3 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Lambatoken
            </h3>
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              <HiDotsVertical
                className={`text-xl ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              />
            </div>
            {isOpen && (
              <div
                className={`absolute -left-28 w-[137px] mt-1 origin-top-right border divide-y rounded-md shadow-lg z-50 ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700 divide-slate-700"
                    : "bg-white border-slate-200 divide-slate-200"
                } ${isOpen ? "block" : "hidden"}`}
              >
                <div
                  className={`w-full divide-y-2 cursor-pointer ${
                    isDarkMode ? "divide-slate-700" : "divide-slate-200"
                  }`}
                >
                  <div
                    className={`flex items-center px-5 py-1 text-base font-medium hover:bg-primary-50 transition-colors ${
                      isDarkMode
                        ? "text-slate-300 hover:text-white hover:bg-primary-900/20"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <RiGithubFill size={20} className="mr-4" />
                    Github
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <p
            className={`text-xs sm:text-sm font-normal leading-relaxed pt-2 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas on how it can be improved.
          </p>
          <div className="py-2 w-full grid grid-cols-3 gap-1.5 sm:gap-2">
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center justify-center font-medium ${
                isDarkMode
                  ? "bg-slate-700 text-slate-300"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              Tailwind CSS
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center justify-center font-medium ${
                isDarkMode
                  ? "bg-slate-700 text-slate-300"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              React
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center justify-center font-medium ${
                isDarkMode
                  ? "bg-slate-700 text-slate-300"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              Redux
            </div>
          </div>
          <div className="pt-2 flex items-center gap-3 sm:gap-4">
            <IconButton icon={FaGooglePlay} text="Playstore" />
            <IconButton icon={FaApple} text="AppStore" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 sm:py-10 w-full">
      <div className="flex flex-col items-center justify-center py-16 sm:py-20">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 ${
            isDarkMode ? "bg-slate-700" : "bg-slate-100"
          }`}
        >
          <svg
            className={`w-10 h-10 sm:w-12 sm:h-12 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
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
        </div>
        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          No Mobile Projects Yet
        </h3>
        <p
          className={`text-base sm:text-lg text-center max-w-md mb-6 sm:mb-8 px-4 sm:px-0 ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Projects will appear here once they're added. Check back soon for
          updates!
        </p>
        <div className="flex gap-3 sm:gap-4">
          <a
            href="mailto:o.davecodes@gmail.com"
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
              isDarkMode
                ? "bg-primary-400 text-slate-900 hover:bg-primary-300"
                : "bg-primary-300 text-slate-900 hover:bg-primary-400"
            }`}
          >
            Contact Me
          </a>
          {/* <button
            className={`px-6 py-3 border-2 rounded-md font-medium transition-all duration-300 ${
              isDarkMode
                ? "border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50"
                : "border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50"
            }`}
          >
            Contact Me
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
