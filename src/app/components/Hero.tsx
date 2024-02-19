import React from "react";
import Image from "next/legacy/image";
import faaiz from "/public/faaiz-profile.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  return (
    <section id="hero" className="flex row-auto justify justify-between">
      <div className="flex flex-col max-w-[600px]">
        <RoughNotationGroup show={true}>
          <div className="text-[40px] leading-tight mb-[20px] font-bold">
            👋🏼 Hello! I&apos;m Faaizuddin, a{" "}
            <RoughNotation color={"#AFC8AD"} type="highlight">
              developer
            </RoughNotation>{" "}
            based in Chicago.
          </div>
          <p className="text-neutral-700  text-[15px] font-normal mb-[25px] leading-normal">
            I enjoy building apps that are user-friendly, fun, and helpful.
            <br />
            <br />
            As a sophomore in{" "}
            <RoughNotation color="#EEE7DA" type="highlight">
              Computer Science
            </RoughNotation>{" "}
            at the University of Illinois at Chicago, I&apos;ve gained a solid
            foundation in{" "}
            <RoughNotation color="#D2E3C8" type="highlight">
              data structures
            </RoughNotation>
            ,{" "}
            <RoughNotation color="#88AB8E" type="highlight">
              algorithms
            </RoughNotation>
            , and both client-server{" "}
            <RoughNotation color="#D2E3C8" type="highlight">
              software design
            </RoughNotation>{" "}
            and low-level programming. My work at the Electronic Visualization
            Laboratory further expanded my skills in modern front-end
            technologies, including{" "}
            <RoughNotation color="#88AB8E" type="highlight">
              React
            </RoughNotation>
            ,{" "}
            <RoughNotation color="#ECE3CE" type="highlight">
              TypeScript
            </RoughNotation>
            , and <RoughNotation type="box">Tailwind CSS.</RoughNotation>
            <br />
            <br />
            This blend of academic learning and practical application has honed
            my problem-solving abilities, UX design insight, and communication
            skills. I thrive in environments that value{" "}
            <RoughNotation color="#ECE3CE" type="highlight">
              creativity
            </RoughNotation>
            ,{" "}
            <RoughNotation color="#88AB8E" type="highlight">
              discipline
            </RoughNotation>
            , and{" "}
            <RoughNotation color="#D2E3C8" type="highlight">
              teamwork
            </RoughNotation>
            , consistently applying these qualities to my projects and
            collaborations.
            <br />
            <br />
            I&apos;m currently looking for a software engineering internship .
            {"   "}
            <RoughNotation
              type="circle"
              iterations={5}
              animationDuration={2000}
            >
              <b>Hire me?</b>
            </RoughNotation>
          </p>
        </RoughNotationGroup>
        <div className="flex">
          <button className="w-[180px] h-12 bg-zinc-900 rounded-[7px] text-white mr-[15px]">
            <a href="https://www.linkedin.com/in/faaizuddinf/" target="_blank">
              View LinkedIn
            </a>
          </button>
          <button className="text-neutral-500 w-[180px] h-12 bg-white rounded-[7px] border-2 border-neutral-300">
            <a href={"/InternshipResume.pdf"} target="_blank">
              View Resume
            </a>
          </button>
        </div>
      </div>
      <div className=" hidden sm:block max-w-[350px] rounded-[15px] drop-shadow-2xl">
        <Image
          className="rounded-[15px] drop-shadow-2xl"
          src={faaiz}
          alt={"Faaiz's Profile Image"}
        />
      </div>
    </section>
  );
};

export default Hero;
