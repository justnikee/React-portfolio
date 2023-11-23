import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import backgroundInage from "../assets/Assets/main-image.jpg";

const Hero = () => {
  const mainText = useRef();
  const backgroundImg = useRef();

  useLayoutEffect(() => {
    var tl = gsap.timeline();

    tl.fromTo(
      ".anime_top-text span",
      {
        opacity: 0,
        y: 50,
        transformOrigin: "bottom",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        y: 0,
      }
    )
      .fromTo(
        ".anime_second_text span",
        {
          opacity: 0,
          transformOrigin: "left",
          y: 50,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          y: 0,
        },
        "-=0.5"
      )
      // .fromTo(
      //   ".rotating_image",
      //   { x: "-1500px", opacity: 0 },
      //   { x: 0, opacity: 1, duration: 1 }
      // )
      .fromTo(
        ".anime_last_one span",
        {
          opacity: 0,
          transformOrigin: "left",
          y: 50,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          y: 0,
        },
        "-=0.5"
      );
    // .to(".rotating_image", {
    //   rotation: 360,
    //   duration: 1,
    //   repeat: 1,
    //   repeatDelay: 1,
    //   repeat: -1,
    //   ease: "power2.inOut",
    // });
  }, []);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setCounter(() => {
      setCounter((counter) => {
        counter > 100 ? counter + 1 : clearInterval(count), setCounter(100);
      });
    }, 25);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 bg-red-400 h-full w-full z-[999999] flex flex-col justify-center items-center">
        <div
          className="bg-black h-[2px] w-0"
          style={{ width: counter + "%" }}
        ></div>
        {counter}
      </div>
      <div className="hero_container h-screen">
        <div className="hero_wrapper page_width flex justify-center flex-col h-full">
          <img
            ref={backgroundImg}
            className="absolute right-0 top-0 h-full object-cover w-1/2"
            src={backgroundInage}
            alt="background image"
          />
          <h1
            ref={mainText}
            className="text-8xl font-[Anton] font-bold anime_top-text mb-5 overflow-hidden"
          >
            <span className="inline-block">Hello I'm Nikhil</span>
          </h1>
          <h2 className="text-8xl font-[Anton] font-bold anime_second_text mb-5 overflow-hidden">
            {" "}
            <span className="inline-block">I'm a Cook &</span>
          </h2>
          <h2 className="text-8xl font-[Anton] pb-4 font-bold flex relative anime_last_one overflow-hidden">
            <span className="inline-block">I Cook things for web</span>
            {/* <img
            className="rotating_image ml-6"
            src={chrome}
            alt="chrome-image"
          /> */}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
