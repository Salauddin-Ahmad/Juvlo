import { useEffect } from "react";
import HeroBanner from "./components/Banner/HeroBanner";
import FeatureDetails from "./components/FeatureDetails/FeatureDetails";
import GridFeature from "./components/GridFeature/GridFeature";
import Navbar from "./components/Navbar/Navbar";

import Lenis from "lenis";
import MarketingArea from "./components/MarketingArea/MarketingArea";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import InfiniteScroll from "./components/Creators/InfiniteScroll";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="hero--nav--bg--wrapper bg-[url('')!important]">
        {/* Navbar starts */}
        <Navbar />
        {/* Navbar ends */}
        <HeroBanner />
      </div>

      {/* main content area starts */}
      <main>
        <InfiniteScroll />
        <FeatureDetails />
        <GridFeature />
        <MarketingArea />
        <Faq />
      </main>
      {/* main content area ends */}

      <Footer />

    </>
  );
};

export default App;
