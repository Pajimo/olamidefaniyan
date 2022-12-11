import Container from "@mui/material/Container";
import React from "react";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ProfileLinks from "./links";
import profilePicture from "../assets/profile.jpg";
import cv from "../documents/Olamide Faniyan_CV.pdf";

const About = () => {
  
  const skils = ["TypeScript", "React", "JavaScript", "Nextjs", "React Native", "Expo", "TailwindCSS", "Firebase", "Redux & Redux-toolkit", "Git/GitHub"]
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
                I am a software developer with 2 years of professional experience building front end web applications and mobile applications. I studied computer science in my undergraduate degree and I graduated with a second class upper (2.1). <br></br> I am well versed in modern technologies and I learn very fast and very well. I worked with a software development agency which allowed me to take on projects of different sizes, tech stack, timeline, and I have been able to deliver exceptionally.
    I am always looking for a reason to develop and improve myself, so I am always learning new stack, new problem solving method.<br></br> <br></br> 
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
                  <div className="mt-10">
                    {" "}
                    <p className="underline">Technologies I'm strong with</p>
                    <div className="mt-5 mb-10">
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 text-lg">
                        {skills.map((item) =>                         <div>
                          {" "}
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
{item}
                        </div>
)
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
                          <ArrowRightIcon
                            style={{
                              color: "black",
                            }}
                          />
                          Node js
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
