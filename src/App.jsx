import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Fund from "./components/Fund";

function App() {

  return (
    <>
      <header className='header'>
        <h1>crowdfund</h1>
        <ul>
          <li><a href='./Home' >Home</a></li>
          <li><a href='./Fund' >Fund</a></li>
          <li><a href='./About' >About</a></li>
        </ul>

      </header>
      <HashRouter basename="/crowdfund">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route  path="/Home" element={<Home />} />
          <Route path="/Fund" element={<Fund />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
