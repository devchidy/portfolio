import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../../App";

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ onComplete, duration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Main container with orange background - full screen */}
      <div
        className={`w-full h-screen relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
        }`}
      >
        {/* Black header that loads from left to right */}
        <div className="relative h-16 sm:h-20 lg:h-24 bg-primary-300">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-b from-slate-600 to-slate-900 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
              {/* Left side text */}
              <div
                className={`font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wider ${
                  progress > 0 ? "text-white" : "text-slate-900"
                }`}
              >
                Hi
              </div>

              {/* Right side text */}
              <div
                className={`font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wider ${
                  progress > 0 ? "text-white" : "text-slate-900"
                }`}
              >
                I'm Chidy
              </div>
            </div>
          </div>
        </div>

        {/* Orange content area - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-8">
            <div className="mb-6 sm:mb-8">
              <h1
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Loading...
              </h1>
              <p
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Preparing your experience
              </p>
            </div>
          </div>
        </div>

        {/* Progress percentage in bottom right */}
        <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8">
          <span
            className={`text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold opacity-20 ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
