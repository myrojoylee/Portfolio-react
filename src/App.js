import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./styles/index.css";

const App = () => <PortfolioContainer />;

export default App;
library.add(fab, fas, far);
