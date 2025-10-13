import React, { useState } from "react";
import Loader from "./Loader";

const LoaderDemo: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  const handleShowLoader = () => {
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    console.log("Loader completed!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Full-Screen Loader Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          This loader covers the entire screen and shows the progress percentage
          in the bottom right corner.
        </p>
        <button
          onClick={handleShowLoader}
          className="bg-primary-300 hover:bg-primary-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Show Full-Screen Loader
        </button>
      </div>

      {showLoader && (
        <Loader onComplete={handleLoaderComplete} duration={3000} />
      )}
    </div>
  );
};

export default LoaderDemo;
