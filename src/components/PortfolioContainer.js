import React, { useState } from "react";

import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
