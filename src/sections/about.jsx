import React from 'react'


const About = () => {
  return (
    <div id="about" className="about_section pt-12 pb-12">
    <div className="hero_wrapper page_width flex justify-center h-full gap-4">
       <h2 className="text-xl h-screen font-[Liber] w-[40%] sticky top-0 flex justify-center items-center">About me</h2>
       <div className="w-[60%]">
        <div className="h-screen flex items-end justify-center p-32 ">
            <p className="text-lg ">
                Hello there! I'm [Your Name], a passionate and creative web developer based in [Your Location]. I have a deep love for coding and a keen eye for design, making the digital world come to life in innovative ways.
            </p>
        </div>
        <div className="flex flex-col items-start justify-end p-32">
            <h3 className="font-['Liber'] text-l mt-10 mb-4 text-['#02AE96']">My Journey:</h3>
            <p className="text-lg ">My journey into the world of web development began with a curiosity for how things work on the internet. Over the years, I've honed my skills in front-end and back-end technologies, turning ideas into interactive and user-friendly websites.</p>
        </div>
        <div className="flex flex-col items-start justify-end p-32">
            <h3  className="font-['Liber'] text-l mt-10 mb-4">What I Do:</h3>
            <p className="text-lg ">I specialize in crafting clean and efficient code to bring ideas to life. From responsive websites to dynamic web applications, I enjoy the process of turning concepts into reality, all while ensuring a seamless user experience.</p>
        </div>
        <div className="flex flex-col items-start justify-center p-32">
            <h3  className="font-['Liber'] text-l mt-10 mb-4">Continuous Learner:</h3>
            <p className="text-lg ">
            The ever-evolving nature of technology excites me, and I am committed to staying on the cutting edge of industry trends. Learning is a continuous journey, and I embrace the challenge of mastering new languages and frameworks to enhance my skill set.
            </p>
        </div>
       </div>
    </div>
     </div>
  )
}

export default About
