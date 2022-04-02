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
      <Container className="font-mono">
        <div>
          <header className=" text-5xl text-black text-center font-bold">
            About Me
          </header>
          <div className="mt-5">
            <div className="text-zinc-600 font-semibold text-lg md:text-2xl mt-20 ">
              <div>
                <div className="leading-9">
                I am a front end developer with thorough knowledge of React, I have a created projects to showcase my react and 
                web development skills, I am currently searching for a junior front end role.<br></br> <br></br> I am also interested in React Native for mobile development. 

                I am really passionate about tech, which is why I have the determination to learn as much as possible 
                and develop myself technically as well as my soft skills.
                <br></br>
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
                        color: "black",
                        borderColor: "black",
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
                              color: "black",
                            }}
                          />
                          Javascript (ES6+)
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Reactjs
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Nextjs
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Tailwind CSS
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Material UI
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Git / GitHub
                        </div>
                        <div>
                          <ArrowRightIcon
                            style={{
                              color: "black",
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
                              color: "black",
                            }}
                          />
                          Python
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Apollo-client
                        </div>
                        <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "black",
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
