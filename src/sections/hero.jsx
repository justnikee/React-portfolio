import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import chrome from '../assets/Assets/web.png'
import { gsap } from "gsap";

const Hero = () => {

  const mainText = useRef(); 
  
  useLayoutEffect(() => {
    var tl = gsap.timeline();

    //sequenced one-after-the-other
    tl.fromTo(".anime_top-text span", {
       opacity: 0,
       y: 50,
       transformOrigin: 'bottom'
    },{
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      delay: 1,
      y: 0
    })
    .fromTo(".anime_second_text span", {
      opacity: 0,
      transformOrigin: 'left',
      y: 50,
    },{
     opacity: 1,
     duration: 1,
     ease: "power2.inOut",
     y: 0,
    })
    .fromTo(".rotating_image", {x: "-1500px", opacity: 0},{x: 0, opacity:1, duration: 1})
    .fromTo(".anime_last_one span", {
      opacity: 0,
      transformOrigin: 'left',
      y: 50,
    },{
     opacity: 1,
     duration: 1,
     ease: "power2.inOut",
     y: 0
    }
    ).to(".rotating_image", {
      rotation: 360,
      duration: 1,
      repeat: 1,
      repeatDelay: 1,
      repeat: -1,
      ease: "power2.inOut",
    })
  }, [])


  return (
       <div className="hero_container h-screen">
<div className="hero_wrapper page_width flex justify-center flex-col h-full">
    <h1 ref={mainText} className="text-4xl leading-relaxed	 font-[Liber] font-bold anime_top-text mb-5 overflow-hidden"><span className="inline-block">Hello I'm Nikhil</span></h1>
    <h2 className="text-8xl font-bold anime_second_text overflow-hidden"> <span className="inline-block">I'm a Cook &</span></h2>
    <h2 className="text-8xl leading-[5.5rem] pb-4 font-bold flex relative anime_last_one overflow-hidden"><span className="inline-block">I Cook things for web</span>
        <img className="rotating_image ml-6" src={chrome} alt="chrome-image" />
    </h2>
</div>
 </div>
  )
}

export default Hero
