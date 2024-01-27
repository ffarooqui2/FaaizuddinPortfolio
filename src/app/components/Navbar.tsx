"use client";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll/modules";

import Image from "next/legacy/image";
import close from "/public/close.svg";
import menu from "/public/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify justify-between max-w-[1080px] mt-[30px] mb-[80px]">
      <div className=" text-black text-[17px] font-medium font-['SF Pro Display'] tracking-wider">
        <a href="#">FAAIZUDDIN FAROOQUI</a>
      </div>
      <div>
        <button
          className="md:hidden px-[30px]"
          onClick={() => setToggle((prev) => !prev)}
        >
          <Image
            src={toggle ? close : menu}
            alt={"menu"}
            className="w-[30px] h-[30px]"
          />
        </button>

        <div className={`${toggle ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-['Inter']">
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://github.com/ffarooqui2" target="_blank">
                <FaGithub className="w-[25px] h-[25px]" {...FaGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
