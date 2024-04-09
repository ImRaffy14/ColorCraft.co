import PaintImg from './assets/PaintImg.png'

function AboutUs (){

    return(
        <div className="h-screen w-full bg-gray-100">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col h-[650px] w-full lg:w-[1800px] mx-10">
                    <h1 className=" text-center font-extrabold text-2xl mb-4">About Product</h1>
                    <p className="text-center  ">Glow in the Dark Paint, a revolutionary product that brings a mesmerizing glow to any surface. Our range includes Interior Glow Paint, Face and Body Glow Paint, and Spray Glow based Paint, all of which are water-based, eco-friendly, and non-toxic. The key features of our glow paint include a vibrant and long-lasting glow effect that adds a touch of magic to your surroundings. With its easy application and quick-drying formula, our paint allows for hassle-free use on various surfaces. Whether you want to create a captivating ambiance in your home, experiment with unique face and body art, or add a luminous touch to objects, our glow paint is the perfect choice. The eco-friendly and non-toxic nature of our paint ensures the safety of users and the environment. It is made using high-quality ingredients that have been carefully selected for optimal performance and durability. Transform your space into a radiant wonderland with our Glow in the Dark Paint product and let your imagination shine. </p>
                </div>
                <div className="h-[700px] ml-[50px] hidden lg:block">
                    <img src={PaintImg} className="w-[1000px] h-[450px]"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs