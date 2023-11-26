import React, { useRef } from "react";
import logo from "../assets/Assets/icon.png";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const animateHeader = useRef();
  useLayoutEffect(() => {
    gsap.fromTo(
      animateHeader.current,
      {
        height: "0px",
        opacity: 0,
      },
      {
        height: "100px",
        duration: 2,
        ease: "power.out",
        delay: 4,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div
      ref={animateHeader}
      className="h-[70px] sticky top-0 animate_header z-[9999] bg-[#0E100F]"
    >
      <div className="page_width h-full flex items-center">
        <div className="logo_container flex items-center gap-2 w-[20%]">
          <img height="50" width="50" src={logo} alt="logo" className="logo" />
          <span className="font-[General Sans] text-xl font-semibold">
            Nxkeyyy
          </span>
        </div>
        <ul className="flex w-[80%] m-auto justify-end gap-8 h-full items-center anime-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a
              className="bg-green-300 px-8 py-3 rounded-full text-black"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
