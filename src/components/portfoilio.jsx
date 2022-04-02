import { data } from "./projectsinfo";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Portfolio = () => {
  const [item, setItem] = useState(data);
  return (
    <Container id='portfolio' className="mt-20 font-mono">
      <header className=" text-5xl text-gray-300 text-center mt-20 mb-20 font-bold">
        Portfolio
      </header>
      <div>
        {item.map((item) => {
          const { id, image, title, desc, stack, site, git } = item;
          return (
            <div key={id}>
              <div className="relative md:w-2/3 md:h-96">
                <img src={image} className=" md:mb-10" />
                <div className="bg-gray-600 w-auto h-auto md:h-60 p-5 mb-10 md:absolute md:bottom-0 md:right-0">
                  <div className="mb-5 space-x-5 text-white">
                    <p className=" text-xl text-white">{title}</p>
                    <div>
                      <a href={site} className="flex items-center space-x-5">
                        {" "}
                        <InfoOutlinedIcon style={{ fontSize: 40 }} />
                        <p>View Website</p>
                      </a>
                    </div>
                    <div>
                      <a href={git} className="flex items-center space-x-5">
                        {" "}
                        <GitHubIcon style={{ fontSize: 40 }} />
                        <p>View source code</p>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-center text-base text-white">
                      {desc}
                    </div>
                    <div className="mt-5">
                      <p className="text-base text-white">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[0]}
                      </p>
                      <p className="text-base text-white">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[1]}
                      </p>
                      <p className="text-base text-white">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[2]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Portfolio;
