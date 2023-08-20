import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {

  let location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <ScrollTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" index extact element={<AboutUs />} />
          <Route path="/work" extact element={<OurWork />} />
          <Route path="/work/:id" extact element={<MovieDetail />} />
          <Route path="/contactus" extact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
