import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import SingleProject from "./pages/single-project/single-project";
import PersonState from "../context/person/person-state";
import Navbar from "./shared/navbar/navbar";
import Footer from "./shared/footer/footer";

function App() {
  console.log("uh");
  return (
    <Router>
      <PersonState>
        <Routes>
          <Route element={<Navbar />} />
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/portfolio" Component={Projects} />
          <Route path="/projects/:slug" Component={SingleProject} />
          <Route element={<Footer />} />
        </Routes>
      </PersonState>
    </Router>
  );
}

export default App;
