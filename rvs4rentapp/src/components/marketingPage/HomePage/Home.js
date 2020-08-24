import React from "react";
import HomeBanner from "./HomeBanner.js";
import HomeContent from "./HomeContent.js";

const Home = (props) => {
  return (
    <div className="HomeWrapper">
      <HomeBanner />
      <HomeContent />
    </div>
  );
};

export default Home;
