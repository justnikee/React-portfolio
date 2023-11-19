import React, { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'



const Projects = () => {

    gsap.registerPlugin(ScrollTrigger)
const mainContainer = useRef();
const wrapperContainer = useRef();


useLayoutEffect(() => {

    let ctx = gsap.context(() => {
       

        const reces = document.querySelector(".animate_items")
        let raceWidth = reces.offsetWidth;
        let amountToScroll = raceWidth - window.innerWidth;
        
        setTimeout(function(){
          console.log("raceWidth", raceWidth)
          console.log("amountToScroll", amountToScroll)
        }, 100)
        
        
        const tween = gsap.to(reces, {
          x : -amountToScroll,
          duration: 3,
          ease: "none"
        })
        
        ScrollTrigger.create({
          trigger: ".animate_items_container",
          start: "top 40%",
          end: "+=" + amountToScroll,
          pin: true,
          animation: tween,
          scrub: 2,
        //   markers: true
        })
    })

}, [])




  return (
    <>
       <div className="">
        <div className="page_width flex">
            <div className="w-[40%]">
                <h2 className="text-xl font-[Liber] flex justify-center items-center leading-relaxed">Some of <br/> the <br/> Projects</h2>
            </div>
            
            <div className="w-[60%] flex items-center justify-center p-32">
                <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a molestias possimus maiores fugit, aliquam consequuntur blanditiis quis vero quo consectetur fugiat ut expedita distinctio deleniti vel. Culpa, tenetur provident.</p>
            </div>
        </div>
     </div>
     <div ref={mainContainer} className="animate_items_container">
        <div ref={wrapperContainer} className="animate_items flex w-[2500px] pl-[50%]">
            <div className="flex items-center justify-center h-[300px] w-[500px] bg-green-300 mr-10">
                <img src=""/>
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
  )
}

export default Projects
