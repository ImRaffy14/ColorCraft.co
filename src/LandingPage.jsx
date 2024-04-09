import { GrPaint } from "react-icons/gr";
import Background from './assets/Background.jpg'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function LandingPage() {

    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState ('')

    useEffect(() => {
      setIsVisible(true);
    }, []);

    
    const handleSetActive = (to) => {
      setIsActive(to)
    }

    console.log(isActive)

  return (

  <>
    <div className="h-screen w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          filter: "blur(10px)"
        }}
      />
      <div className="max-w-screen-xl mx-auto h-full items-center justify-center flex flex-col relative z-10 text-slate-200">
        <div className={`slide-up-company ${isVisible ? 'animate' : ''}`}>
          <button className="btn btn-ghost btn-active w-[300px] welcome rounded-2xl"><GrPaint />ColorCraft co.</button>
        </div>
        <div className={`slide-up-text ${isVisible ? 'animate' : ''}`}>
          <div className="mb-16 mt-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-center mx-10"> Experience the <a className="underline decoration-emerald-600">Glow</a>, Create the <a className="underline decoration-yellow-500">Magic</a>: Unleash Your <a className="underline decoration-yellow-500">Imagination</a> with our Vibrant <a className="underline decoration-emerald-600">Glow in the Dark Paint</a></h1>
          </div>
        </div>
    
        <p className={`slide-up-text ${isVisible ? 'animate' : ''} mb-4`}>Scroll to see more</p>

        <Link to="aboutus"  
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}>
        <button
        className="cursor-pointer bg-opacity-0 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
        >
        <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            strokeLinejoin="round"
            strokeLinecap="round"
            ></path>
        </svg>
        </button> 
        </Link> 
      </div>
      <div className="my-[90px]"> 
      <section id="aboutus"></section>
      </div> 
    </div>
    
  </>  
  );
}

export default LandingPage;
