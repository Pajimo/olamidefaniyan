import Container from "@mui/material/Container";
import React from "react";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ProfileLinks from "./links";
import profilePicture from "../assets/profile.jpg";
import cv from "../documents/Olamide_Faniyan_CV.pdf";

const About = () => {
  return (
    <div className="ml-2 mr-2">
      <Container className="font-mono shadow-inner">
        <div>
          <header className=" text-5xl text-gray-300 text-center mt-10 font-bold">
            About Me
          </header>
          <div className="border-t-4 border-emerald-400 mt-5">
            <div className="text-zinc-400 font-semibold text-lg md:text-2xl mt-20 ">
              <div>
                <div className="leading-9">
                  Hello my name is Olamide. I'm an aspiring Junior Front-End
                  Developer, Started coding 2016 and ever since I have invested
                  in my goal to become a Software Developer.<br></br>
                  <br></br>
                  <p> I enjoy building with codes and playing chess.</p>
                </div>
                <br></br>
                <p>
                  I have serious passion for creating and building intuitive
                  dynamic user experiences
                </p>
                <div className="mt-10">
                  <a href={cv} download>
                    <Button
                      size="large"
                      variant="outlined"
                      style={{
                        color: "lightgreen",
                        borderColor: "darkgreen",
                        borderWidth: 3,
                        width: 200,
                        height: 70,
                      }}
                    >
                      Download my CV{" "}
                    </Button>
                  </a>
                  <div className="mt-10">
                    {" "}
                    <p className="underline">Technologies I'm strong with</p>
                    <div className="mt-5 mb-10">
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 text-lg">
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Javascript (ES6+)
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Reactjs
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Nextjs
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Tailwind CSS
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Material UI
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Git / GitHub
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Firebase
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    {" "}
                    <p className="underline">Technologies I'm familiar with</p>
                    <div className="mt-5 mb-10">
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 text-lg">
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Python
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          Apollo-client
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "lightgreen",
                            }}
                          />
                          GraphQL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
