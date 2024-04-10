import PaintImg from './assets/PaintImg.png'
import AboutUsImg from './assets/AboutUsImg.png'
import React, { useState, useEffect } from 'react';

function AboutUs (){

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
        <div className="h-[1500PX] w-full bg-gray-100">
            <div className={`max-w-screen-xl mx-auto flex items-center justify-center h-[1000px] px-4 slide-about-product ${isVisible ? 'animate' : ''}`}>
                <div className="flex flex-col h-[650px] w-full lg:w-[1800px] mx-10 overscroll-contain items-center">
                    <div className="hidden md:block">
                        <h1 className=" text-center font-extrabold text-2xl mb-4 underline">About Product</h1>
                        <p className=" text-center font-semi-bold">Glow in the Dark Paint, a revolutionary product that brings a mesmerizing glow to any surface. Our range includes Interior Glow Paint, Face and Body Glow Paint, and Spray Glow based Paint, all of which are water-based, eco-friendly, and non-toxic. The key features of our glow paint include a vibrant and long-lasting glow effect that adds a touch of magic to your surroundings. With its easy application and quick-drying formula, our paint allows for hassle-free use on various surfaces. Whether you want to create a captivating ambiance in your home, experiment with unique face and body art, or add a luminous touch to objects, our glow paint is the perfect choice. The eco-friendly and non-toxic nature of our paint ensures the safety of users and the environment. It is made using high-quality ingredients that have been carefully selected for optimal performance and durability. Transform your space into a radiant wonderland with our Glow in the Dark Paint product and let your imagination shine. </p>
                    </div>
                    <div className="block md:hidden">
                        <div className="card w-[500px] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        <figure><img className="h-[300px]" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
                <div className="h-[700px] ml-[50px] hidden lg:block">
                    <img src={PaintImg} className="w-[1000px] h-[450px]"/>
                </div>
            </div>
            <div className={`max-w-screen-xl mx-auto flex items-center justify-center h-[100px] px-4 slide-about-us ${isVisible ? 'animate' : ''} `}>
                <div className="h-[1000px] mx-[0px] hidden lg:block">
                    <img src={AboutUsImg} className="w-[1100px] h-[500px]"/>
                </div>
                <div className="flex flex-col h-[900px] lg:h-[800px] w-full mx-10 items-center">
                    <div className="hidden md:block">
                        <h1 className=" text-center font-extrabold text-2xl mb-4 underline">About Us</h1>
                        <p className="text-center font-semi-bold">We're dedicated to illuminating the world with safe and innovative glowing paint solutions.
                                                                At ColorCraftpaint co., our commitment to excellence begins with our mission: to provide top-quality, non-toxic glowing paint products that inspire creativity and elevate environments. We understand the importance of safety and sustainability, which is why all our products are meticulously crafted using non-toxic materials, ensuring both peace of mind and exceptional performance. Whether you're an artist seeking to infuse your creations with luminescence or a designer looking to transform spaces with unique ambiance, our glowing paints offer endless possibilities. Our team is here to support you at every stage of your project, from selecting the perfect product to providing expert guidance and assistance. </p>
                    </div>
                    <div className="block md:hidden mt-20">
                        <div className="card w-[500px] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        <figure><img className="h-[300px]" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs