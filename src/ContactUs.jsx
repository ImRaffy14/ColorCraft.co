import React, { useState, useEffect } from 'react';
import { CiChat1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

function ContactUs(){
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 400){
            setIsVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        
        <div className="h-dvh-100 w-full bg-gray-100">
            <div className="max-w-screen-xl mx-auto justify-center flex flex-col">
                <div className="mt-[200px]"> 
                    <h1 className="font-extrabold text-4xl sm:text-[45px] mb-4 text-center ">Contact Us</h1>
                </div>
                <div className="h-dvh-75 mb-[100px] mt-[35px] flex flex-col md:flex-row justify-center items-center mx-4">
                    <div className="card w-[400px] sm:w-[500px] max-[450px]:w-[280px] h-[340px] bg-zinc-200 shadow-2xl border border-gray-400 my-5 mx-3">
                        <div className="card-body items-center">
                            <h2 className="text-center font-bold text-2xl">Chat Support</h2>
                            <p className="text-center mt-2">Our Self-serve help center is open 24/7 with 150+ articles to help.</p>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <button className="btn btn-ghost text-lg">Chat now<FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="card w-[400px] sm:w-[500px] max-[450px]:w-[280px] h-[340px] bg-zinc-200 shadow-2xl border border-gray-400 my-5 mx-3">
                        <div className="card-body items-center">
                            <h2 className="text-center font-bold text-2xl">Email Support</h2>
                            <p className="text-center mt-2">Prefer to email? Send us an email and we'll get back to you soon.</p>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <button className="btn btn-ghost text-lg">Send email<FaArrowRight /></button>
                        </div>
                    </div>
                    
                    <div className="card w-[400px] sm:w-[500px] max-[450px]:w-[280px] h-[340px] bg-zinc-200 shadow-2xl border border-gray-400 my-5 mx-3">
                        <div className="card-body items-center">
                            <h2 className="text-center font-bold text-2xl">Help Center</h2>
                            <p className="text-center mt-2">Our Self-serve help center is open 24/7 with 150+ articles to help.</p>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <button className="btn btn-ghost text-lg">Visit now<FaArrowRight /></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs