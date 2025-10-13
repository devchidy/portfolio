import React, { useState } from "react";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import PageLayout from "../layouts/PageLayout";
import Loader from "../components/common/Loader";

function Home() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    console.log("Home page loaded!");
  };

  return (
    <>
      {showLoader && (
        <Loader onComplete={handleLoaderComplete} duration={2500} />
      )}

      {!showLoader && (
        <PageLayout>
          <Hero />
          <Experience />
        </PageLayout>
      )}
    </>
  );
}

export default Home;
