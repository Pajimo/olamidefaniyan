import { data } from "./projectsinfo";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Portfolio = () => {
  const [item, setItem] = useState(data);
  return (
    <Container id='portfolio' className="pt-5 font-mono">
      <header className=" text-5xl text-black text-center mt-20 mb-20 font-bold">
        Portfolio
      </header>
      <div>
        {item.map((item) => {
          const { id, image, title, desc, stack, site, git } = item;
          return (
            <div key={id}>
              <div className=" md:h-96 md:flex md:flex-row items-center mb-10 bg-slate-50 shadow-2xl text-black">
                <img src={image} className="md:w-1/2 h-1/2 md:h-full object-contain md:object-cover" />
                <div className=" md:h-60 p-5 w-full">
                  <div className="mb-5 space-x-5">
                    <p className=" text-2xl font-bold">{title}</p>
                  </div>

                  <div>
                    <div className="text-center text-base">
                      {desc}
                    </div>
                    <div className="mt-5">
                      <p className="text-base">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[0]}
                      </p>
                      <p className="text-base">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[1]}
                      </p>
                      <p className="text-base">
                        <ArrowRightIcon
                          style={{
                            color: "lightgreen",
                          }}
                        />{" "}
                        {stack[2]}
                      </p>
                    </div>
                  </div>
                  <div className="md:flex font-semibold pt-10 text-white">
                      <div className='pb-5'>
                        <a href={site} target="_blank" className="space-x-5 mr-5">
                          {" "}
                          <button className='p-3 bg-black rounded-lg'>View Website</button>
                        </a>
                      </div>
                      <div>
                        <a href={git} target="_blank" className="space-x-5">
                          {" "}
                          <button className='p-3 bg-black rounded-lg'>View source code</button>
                        </a>
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
