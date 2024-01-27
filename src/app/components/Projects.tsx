import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import project3Image from "/public/Project3Image.png";
import project2Image from "/public/Project2Image.png";
import project1Image from "/public/Project1Image.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-[120px] mb-[150px]">
      <div>
        <h2>Selected Projects</h2>
        <p className="text-neutral-700 text-[15px] font-normal font-['Inter'] leading-[25px] mb-[25px]">
          Some of the side projects I&apos;ve worked on:
        </p>
      </div>
      <div className="space-y-[60px]">
        {/* Project 1 */}
        <div className="flex">
          <div className="w-[361px] h-[215px] bg-zinc-300 rounded-[10px] drop-shadow mr-[45px]">
            <Image
              className="rounded-[10px] drop-shadow-lg "
              src={project1Image}
              alt={"Movie Monospace"}
            />
          </div>
          <div className=" flex flex-col justify-evenly max-w-[270px]">
            <h3 className="text-black text-[22px] font-bold font-['Inter']">
              Commands REST API
            </h3>
            <p className="text-black text-[15px] font-normal font-['Inter'] leading-[25px]">
              {" "}
              Tend to forget CLI commands? Heres an API I built using .NET and
              PostgreSQL to help you out
            </p>
            <p className="text-black text-[15px] font-normal font-['Inter']">
              <a>
                View Project <GoArrowRight className="inline" />{" "}
              </a>
            </p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex">
          <div className="w-[361px] h-[215px] bg-zinc-300 rounded-[10px] drop-shadow mr-[45px]">
            <Image
              className="rounded-[10px] drop-shadow-lg"
              src={project2Image}
              alt={"Movie Monospace"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex flex-col justify-evenly max-w-[270px]">
            <h3 className="text-black text-[22px] font-bold font-['Inter']">
              Word Master
            </h3>
            <p className="text-black text-[15px] font-normal font-['Inter'] leading-[25px]">
              {" "}
              A fun, UI friendly word guessing game made using JavaFX and
              server-client threading.
            </p>
            <p className="text-black text-[15px] font-normal font-['Inter']">
              <a>
                View Project <GoArrowRight className="inline" />{" "}
              </a>
            </p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex">
          <div className="w-[361px] h-[215px] bg-zinc-300 rounded-[10px] drop-shadow mr-[45px]">
            <Image
              className="rounded-[10px] drop-shadow-lg"
              src={project3Image}
              alt={"Movie Monospace"}
            />
          </div>
          <div className=" flex flex-col justify-evenly max-w-[270px]">
            <h3 className="text-black text-[22px] font-bold font-['Inter']">
              Movie Monospace
            </h3>
            <p className="text-black text-[15px] font-normal font-['Inter'] leading-[25px]">
              {" "}
              A movie website giving you trending movies and searching made with
              React, Tailwind, and ExpressJS.
            </p>
            <p className="text-black text-[15px] font-normal font-['Inter']">
              <a
                href="https://github.com/ffarooqui2/movies-app"
                target="_blank"
              >
                View Project <GoArrowRight className="inline" />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
