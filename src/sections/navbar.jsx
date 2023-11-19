import React from 'react'
import logo from '../assets/Assets/icon.png'

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const Navbar = () => {

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(()=> {
        gsap.to(".animate_header", {
            background: "#f9f9f9",
            color: "#000",
            duration: 2,
            scrollTrigger: {
              trigger: ".animate_header",
              start: "100px top",
              end: "bottom top",
              scrub: 2, 
            //   markers: true,
              triggerActions: "restart none reverse none "
            },
          })
    }, [])

  return (
      <div className="h-[70px] sticky top-0 animate_header z-10">
    <div className="page_width h-full flex items-center">
        <div className="logo_container flex items-center gap-2 w-[20%]">
            <img height="50" width="50" src={logo} alt="logo" className="logo"/>
            <span className="font-[Liber] text-xs">Nxkeyyy</span>
        </div>
        <ul className="flex w-[60%] m-auto justify-center gap-4 h-full items-center anime-links">
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
                <a href="#">Contact</a>
            </li>
        </ul>
        <div className="w-[20%]">

        </div>
    </div>
 </div>
  )
}

export default Navbar
