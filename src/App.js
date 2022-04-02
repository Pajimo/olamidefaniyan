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
import { Route, Routes } from "react-router";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer'

// ATTENTION!!!!!!!!!!

function App() {
  return (
    <div>
      <div className="bg-gray-800 relative pb-10">
        <div className="sm:ml-10 sm:mr-10"><Header />
        <Routes>
          <Route path="/" element={<div><Home /> <Portfolio /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes></div>
        <Footer />
        
        <div className="md:fixed md:bottom-20 md:left-0 text-white md:m-5 ">
          <div className=" flex md:flex-col space-y-6 md:visible invisible">
            <a href="https://github.com/Pajimo" target="_blank">
              <GitHubIcon style={{ fontSize: 25 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/olamide-faniyan-30ab7422b/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 25 }} />
            </a>
            <a href="mailto:faniyanolamide@gmail.com"target="_blank">
              <EmailIcon style={{ fontSize: 25 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
