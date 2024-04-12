import sampleImg from './assets/sample.jpg'
import { IllumiGlowPaint } from './Data/Products'
import { LuShoppingCart } from "react-icons/lu";

function IllumiGlow () {

    return(
        <div className="h-dvh-100 w-full bg-neutral-100 text-black">
            <div className="max-w-screen-2xl h-[700px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-black">
                <img src={sampleImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-emerald-400" />
                <div className="mx-[10px] mt-[50px] md:mt-0 text-center md:text-start mb-10 text-neutral-800">
                    <h1 className="mb-4 font-extrabold text-4xl">IllumiGlow Interior Paint</h1>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus voluptas maiores ducimus neque, eum quaerat nihil. Nemo aspernatur iure, earum corporis quam veniam, excepturi deleniti cum quas, ea dolore officia!</p>
                </div>
            </div>
            <div className="max-w-screen-2xl flex h-dvh-100 items-center mx-auto overflow-hidden">
                <div className="flex flex-wrap justify-center my-[50px]"> 
                {IllumiGlowPaint.map((product1) =>
                    <div key={product1.Id} className="card card-compact w-[300px] bg-gray-100 shadow-xl mx-2 my-2">
                    <figure><img src={product1.Image} alt={product1.Name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product1.Name}</h2>
                        <p>₱{product1.Price}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><LuShoppingCart />Add to Cart</button>
                        </div>
                    </div>
                    </div>
                )}
               

                </div>
            </div>
        </div>




    )
}

export default IllumiGlow