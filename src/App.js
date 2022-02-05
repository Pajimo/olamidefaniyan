import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/portfoilio";
import Contact from "./components/Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// ATTENTION!!!!!!!!!!

function App() {
  return (
    <div>
      <div className="bg-gray-800 relative pb-10">
        <Header />
        <Home id="home"/>
        <About id="about"/>
        <Portfolio id="portfolio"/>
        <Contact id="contact"/>
        <div class="md:fixed md:bottom-0 md:left-0 text-white md:m-5 ">
          <div className=" flex md:flex-col space-y-6 md:visible invisible">
            <a href="https://github.com/Pajimo" _target>
              <GitHubIcon style={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/olamide-faniyan-30ab7422b/"
              _target
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
            <a href="mailto:faniyanolamide@gmail.com" _target>
              <EmailIcon style={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
