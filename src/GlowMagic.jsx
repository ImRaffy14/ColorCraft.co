import sampleImg from './assets/sample.jpg'
import { GlowMagicPaint } from './Data/Products'
import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from 'react'
import ProductHeader from './ProductHeader.jsx'



function GlowMagic () {
    
    const [cartItem3, setCartItem3] = useState([]);

  
    const cartItemId = cartItem3.map((product) => product.Id);
    
    const addToCart = (product3) => {
        if (cartItemId.includes(product3.Id)) {
            alert('You already added this item to the cart');
        } else {
            setCartItem3(prevCart => [...prevCart, product3]);
        }
    };
    
   
    
    return(

        <>
        
        <ProductHeader productData3={cartItem3}/>
            <div className="h-dvh-100 w-full bg-neutral-100 text-black">
                <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                    <img src={sampleImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-emerald-400" />
                    <div className="mx-[10px] mt-[50px] md:mt-0 text-center md:text-start mb-10 text-neutral-800">
                        <h1 className="mb-4 font-extrabold text-4xl">GlowGlam Face and Body Paint</h1>
                        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus voluptas maiores ducimus neque, eum quaerat nihil. Nemo aspernatur iure, earum corporis quam veniam, excepturi deleniti cum quas, ea dolore officia!</p>
                    </div>
                </div>
                <div className="max-w-screen-2xl flex h-dvh-100 items-center mx-auto overflow-hidden">
                    <div className="flex flex-wrap justify-center my-[50px]"> 
                    {GlowMagicPaint.map((product3) =>
                        <div key={product3.Id} className="card card-compact w-[300px] bg-gray-100 shadow-xl mx-3 my-3">
                        <figure><img src={product3.Image} alt={product3.Name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product3.Name}</h2>
                            <p>₱{product3.Price}</p>
                            <div className="card-actions justify-end">
                                {/* Call addToCart function with the product details when button is clicked */}
                                <button className="btn btn-primary" onClick={() => addToCart(product3)}>
                                    <LuShoppingCart /> Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GlowMagic;
