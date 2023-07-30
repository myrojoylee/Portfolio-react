import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

// import components
import PortfolioContainer from "./components/PortfolioContainer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Footer from "./components/Footer";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./styles/index.css";

function App() {
  return (
    <>
      <SectionOne />
      <PortfolioContainer />
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
library.add(fab, fas, far);
