import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import backgroundInage from "../assets/Assets/main-image.jpg";

const Hero = () => {

  const [counter, setCounter] = useState(0);

  const startLoader = () => {
    if (counter === 100) {
      return;
    }

    setCounter((prevCounter) => {
      const newCounter = prevCounter + Math.floor(Math.random() * 10) + 1;

      if (newCounter > 100) {
        return 100;
      }

      return newCounter;
    });

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(startLoader, delay);
  };

  useEffect(() => {
    // Call startLoader to initiate the counter update
    startLoader();
  }, []); // Empty dependency array to run the effect only once on mount

  const mainText = useRef();
  const backgroundImg = useRef();
  const loadingScreen = useRef();
  const text = useRef();
  const bar = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin();

    const timeline = gsap.timeline();

    timeline.to(text.current, {
      ease: "power2.inOut",
    });

    timeline.to(loadingScreen.current, {
      height: 0,
      duration: 1,
      delay: 3,
    });

    timeline.to(
      [text.current, bar.current],
      {
        opacity: 0,
      },
      "-=2"
    );

    timeline.fromTo(
      ".anime_top-text span",
      {
        autoAlpha: 0,
        y: 50,
        transformOrigin: "bottom",
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        y: 0,
      }
    );

    timeline.fromTo(
      ".anime_second_text span",
      {
        autoAlpha: 0,
        transformOrigin: "left",
        y: 50,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
        y: 0,
      },
      "-=0.5"
    );

    timeline.fromTo(
      ".anime_last_one span",
      {
        autoAlpha: 0,
        transformOrigin: "left",
        y: 50,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
        y: 0,
      },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <div
        ref={loadingScreen}
        className="fixed top-0 left-0 bg-yellow-600 h-full w-full z-[999999]"
      >
        <div
          ref={bar}
          className="bg-black h-[100px] w-0 fixed bottom-0 left-0 ease-in-out"
          style={{ width: counter + "%" }}
        ></div>
        <h2
          className="fixed top-1/2 left-1/2 text-black text-6xl font-[Liber] translate-x-[-50%] translate-y-[-50%]	"
          ref={text}
        >
          {counter}
        </h2>
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
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
