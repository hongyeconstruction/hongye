import React from "react";
import "./index.css";
import Header from "./components/Header";
import Cover from "./components/Cover";
// import Review from "./components/Review";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Profession from "./components/Profession";
// import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="homepage" className="main-flex-container">
      <div className="topper">
        <Header />
        <Cover />
      </div>
      <div className="middle">
        <Intro />
        <Services />
        <Profession />
      </div>
      <Gallery />
      {/* <div id="footer" className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
