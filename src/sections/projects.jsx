import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const wrapperContainer = useRef();

  useEffect(() => {
    const reces = wrapperContainer.current;
    const raceWidth = reces.offsetWidth;
    const amountToScroll = raceWidth - window.innerWidth;

    console.log("raceWidth", raceWidth);
    console.log("amountToScroll", amountToScroll);

    const tween = gsap.to(reces, {
      x: -amountToScroll,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: wrapperContainer.current,
      start: "top center",
      end: `+=${amountToScroll}`,
      pin: true,
      animation: tween,
      scrub: true,
      markers: true, // Enable markers for debugging
    });
  }, []);

  return (
    <>
      <div className="pt-[200px] h-full">
        <div className="page_width flex">
          <div className="w-[40%]">
            <h2 className="text-xl font-[Liber] flex justify-center items-center leading-relaxed">
              Some of <br /> the <br /> Projects
            </h2>
          </div>

          <div className="w-[60%] flex items-center justify-center p-32">
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
              molestias possimus maiores fugit, aliquam consequuntur blanditiis
              quis vero quo consectetur fugiat ut expedita distinctio deleniti
              vel. Culpa, tenetur provident.
            </p>
          </div>
        </div>
      </div>
      <div className="animate_items_container">
        <div
          ref={wrapperContainer}
          className="animate_items pl-[50%] flex w-[2500px]"
        >
          <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10">
            <img src="" />
            <h3>Ecommerce Store Frontent</h3>
            <p>React - TS - Tailwind CSS</p>
          </div>
          <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10"></div>
          <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10"></div>
          <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10 "></div>
          <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
