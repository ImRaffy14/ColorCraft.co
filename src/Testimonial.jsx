import React from 'react'
import {Reviews} from './Data/Reviews.jsx'
import { Link } from 'react-scroll';

function Testimonial() {
  return (
    <section id="testimonial">
    <div className="h-screen w-full bg-gray-100">
      <div className="max-w-screen-xl flex flex-col justify-center mx-auto">
        <div className="mt-[250px]">
          <h1 className="font-extrabold text-3xl sm:text-[40px] mb-4 text-center md:text-start ml-0 md:ml-6">
            Our Customer's Experience
          </h1>
        </div>
        <div className="mt-16 flex  overflow-x-auto snap-mandatory snap-x">
          {/* Container with fixed width and horizontal scrolling */}
          <div className="flex mb-[30px]">
            {/* Fixed width cards */}
            {Reviews.map((reviews, index) => 
            <div key={index} className="snap-center card w-[380px] h-auto bg-zinc-200 shadow-2xl border border-gray-400 mx-2">
            <div className="mt-4 mx-[20px]">
              <p className="text-md text-center py-2 border-b border-gray-300 italic text-gray-800">"{reviews.Comment}"</p>
              <p className="text-md text-center font-bold mt-2">{reviews.Name}</p>
              <p className="flex justify-center text-yellow-600 mt-2 mb-4">{reviews.Stars}</p>
            </div>
          </div>
                )}
        
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Testimonial
