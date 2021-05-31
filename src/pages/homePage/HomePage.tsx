import React from "react";

import FirstSection from "./components/sections/FirstSections";
import SecondSection from "./components/sections/SecondSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default HomePage;
