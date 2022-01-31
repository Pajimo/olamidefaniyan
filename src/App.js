import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  return (
    <div>
      <div className="bg-gray-800 relative">
        <div class="fixed bottom-0 left-0">Links</div>
        <Header />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
