import React from "react";
import "../src/index.css";
import Header from "../src/components/Header";
import Cover from "../src/components/Cover";
import Review from "../src/components/Review";
import Intro from "../src/components/Intro";
import Services from "./components/Services";
import Profession from "./components/Profession";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="homepage" className="main-flex-container">
      {/* <div className="topper">
        <Header />
        <Cover />
      </div>
      <div className="middle">
        <Review />
        <Intro />
        <Services />
        <Profession />
        <Contact />
      </div>
      <Gallery />

      <div id="footer" className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
