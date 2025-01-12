import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between ">
        <a href="http://">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">My Services</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div>
          <a href="#contact">
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
