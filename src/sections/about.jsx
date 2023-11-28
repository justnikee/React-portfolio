import React, { useRef } from "react";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const About = () => {

    const aboutSection = useRef();
    const itemOne = useRef();
    const itemTwo = useRef();
    const itemThree = useRef();
    const itemFour = useRef();

    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const animateBackground = (elements, backgroundColor, textColor) => {
        gsap.to(elements, {
          background: backgroundColor,
          color: textColor,
          scrollTrigger: {
            trigger: elements,
            scrub: true,
            markers: true,
          },
        });
      };

      const animateVerticalPosition = (element, startX, endX) => {
        gsap.fromTo(
          element,
          {
            x: startX,
          },
          {
            x: endX,
            ease: "power.inOut",
            scrollTrigger: {
              trigger: element,
              scrub: true,
              // markers: true,
            },
          }
        );
      };

      const tl = gsap.timeline();

      // Part 1: Change background and color up to the specified end point
      // animateBackground(
      //   [aboutSection.current, ".animate_header"],
      //   "#f9f9f9",
      //   "#000"
      // );
      // Part 2: Change background and color after the first animation
      // animateBackground(
      //   [aboutSection.current, ".animate_header"],
      //   "#000",
      //   "#fff"
      // );
      // Part 3: Animate vertical position of itemOne
      animateVerticalPosition(itemOne.current, 400, 0);
      animateVerticalPosition(itemTwo.current, 400, 0);
      animateVerticalPosition(itemThree.current, 400, 0);
      animateVerticalPosition(itemFour.current, 400, 0);
    }, []); // <- Closing parenthesis was missing here

    return (
      <div
        id="about"
        ref={aboutSection}
        className="about_section pt-12 pb-12 bg-[#f9f9f9] text-black"
      >
        <div className="hero_wrapper page_width flex justify-center h-full gap-4">
          <h2 className="text-xl h-screen font-[Liber] w-[40%] sticky top-0 flex justify-center items-center">
            About me
          </h2>
          <div className="w-[60%]">
            <div
              ref={itemOne}
              className="flex items-center justify-center h-[400px]"
            >
              <p className="text-lg w-[70%]">
                Hello there! I'm [Your Name], a passionate and creative web
                developer based in [Your Location]. I have a deep love for
                coding and a keen eye for design, making the digital world come
                to life in innovative ways.
              </p>
            </div>
            <div
              ref={itemTwo}
              className="flex flex-col items-start justify-center h-[400px]"
            >
              <h3 className="font-['Liber'] text-l mt-10 mb-4 text-[#02AE96]">
                My Journey:
              </h3>
              <p className="text-lg w-[70%]">
                My journey into the world of web development began with a
                curiosity for how things work on the internet. Over the years,
                I've honed my skills in front-end and back-end technologies,
                turning ideas into interactive and user-friendly websites.
              </p>
            </div>
            <div
              ref={itemThree}
              className="flex flex-col items-start justify-center h-[400px]"
            >
              <h3 className="font-['Liber'] text-l mt-10 mb-4 text-[#02AE96]">
                What I Do:
              </h3>
              <p className="text-lg w-[70%]">
                I specialize in crafting clean and efficient code to bring ideas
                to life. From responsive websites to dynamic web applications, I
                enjoy the process of turning concepts into reality, all while
                ensuring a seamless user experience.
              </p>
            </div>
            <div
              ref={itemFour}
              className="flex flex-col items-start justify-center h-[400px]"
            >
              <h3 className="font-['Liber'] text-l mt-10 mb-4 text-[#02AE96]">
                Continuous Learner:
              </h3>
              <p className="text-lg w-[70%]">
                The ever-evolving nature of technology excites me, and I am
                committed to staying on the cutting edge of industry trends.
                Learning is a continuous journey, and I embrace the challenge of
                mastering new languages and frameworks to enhance my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
