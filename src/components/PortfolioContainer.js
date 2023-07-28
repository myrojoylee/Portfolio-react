import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
// import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "./Footer";
// import "../styles/index.css";

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

  //   return (
  //     <div className="wrapper">
  //       <NavigationBar
  //         currentPage={currentPage}
  //         handlePageChange={handlePageChange}
  //       />
  //       <Header />
  //       {renderPage()}
  //       <Section />
  //       <Footer />
  //     </div>
  //   );

  return (
    <>
      <NavigationBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <SectionOne />
      {renderPage()}
      <SectionTwo />
      <Footer />
    </>
  );
}
