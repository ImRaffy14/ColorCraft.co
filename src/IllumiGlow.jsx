import IllumiGlowImg from './assets/IllumiGlow.jpg'
import { IllumiGlowPaint, GlowGlamPaint, GlowMagicPaint } from './Data/Products'
import { LuShoppingCart } from "react-icons/lu";
import React, { useState, useEffect } from 'react'




function IllumiGlow () {

    const [cartItem, setCartItem] = useState([]);

    const cartItemId = cartItem.map((product) => product.Id);
    
    const addToCart = (product) => {
        if (cartItemId.includes(product.Id)) {
            alert('You already added this item to the cart');
        } else {
            setCartItem(prevCart => [...prevCart, product]);
        }
    };
    
    useEffect(() => {
        // Load cart data from local storage when component mounts
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (savedCart) {
            setCartItem(prevCart => [...prevCart, ...savedCart]);
        }
    }, []);
    
    
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
      }, [cartItem]);
     
      console.log(cartItem)
    
    return(

        <>
        
        <div className="bg-neutral-100">
            <div id="IllumiGlow" className="h-dvh-100 w-full bg-neutral-100 text-black">
                <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                    <img src={IllumiGlowImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-emerald-400" />
                    <div className="mx-[10px] mt-[50px] md:mt-0 text-center md:text-start mb-10 text-neutral-800">
                        <h1 className="mb-4 font-extrabold text-4xl">IllumiGlow Interior Paint</h1>
                        <p className="">Crafted with premium-grade phosphorescent pigments, it absorbs light during the day and emits a mesmerizing glow at night. Create a captivating ambiance in your home with this eco-friendly and non-toxic paint. Easy to apply and quick-drying, it leaves a flawless, radiant finish. Let your walls shine with IllumiGlow and bring magic to your space. Illuminate your imagination today. </p>
                    </div>
                </div>
                <div className="max-w-screen-2xl flex h-dvh-100 items-center mx-auto overflow-hidden border-b">
                    <div className="flex flex-wrap justify-center my-[50px]"> 
                    {IllumiGlowPaint.map((product) =>
                        <div key={product.Id} className="card card-compact w-[300px] bg-gray-100 shadow-xl mx-3 my-3">
                        <figure><img src={product.Image} alt={product.Name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.Name}</h2>
                            <p>{product.Size}</p>
                            <p>₱{product.Price}</p>
                            <div className="card-actions justify-end">
                                {/* Call addToCart function with the product details when button is clicked */}
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    <LuShoppingCart /> Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>

            <div id="GlowGlam" className="h-dvh-100 w-full bg-neutral-100 text-black mt-[100px]">
                <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                    <img src={IllumiGlowImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-emerald-400" />
                    <div className="mx-[10px] mt-[50px] md:mt-0 text-center md:text-start mb-10 text-neutral-800">
                        <h1 className="mb-4 font-extrabold text-4xl">GlowGlam Face and Body Paint Paint</h1>
                        <p className="">GlowGlam Face and Body Paint lets you shine like never before. With vibrant colors and a captivating glow-in-the-dark effect, this premium-grade paint transforms you into a luminous masterpiece. Easy to apply and long-lasting, it's perfect for parties, festivals, and special events. Let your creativity glow with GlowGlam. Illuminate your world today.</p>
                    </div>
                </div>
                <div className="max-w-screen-2xl flex h-dvh-100 items-center mx-auto overflow-hidden">
                    <div className="flex flex-wrap justify-center my-[50px]"> 
                    {GlowGlamPaint.map((product) =>
                        <div key={product.Id} className="card card-compact w-[300px] bg-gray-100 shadow-xl mx-3 my-3">
                        <figure><img src={product.Image} alt={product.Name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.Name}</h2>
                            <p>{product.Size}</p>
                            <p>₱{product.Price}</p>
                            <div className="card-actions justify-end">
                                {/* Call addToCart function with the product details when button is clicked */}
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    <LuShoppingCart /> Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>

            <div id="GlowMagic" className="h-dvh-100 w-full bg-neutral-100 text-black mt-[100px]">
                <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                    <img src={IllumiGlowImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-emerald-400" />
                    <div className="mx-[10px] mt-[50px] md:mt-0 text-center md:text-start mb-10 text-neutral-800">
                        <h1 className="mb-4 font-extrabold text-4xl">GlowMagic Spray Paint</h1>
                        <p className="">Ignite Your Artistic Brilliance,unleash your creativity and add a touch of magic to your artwork with GlowMagic Spray Paint. This extraordinary paint combines vibrant colors with an enchanting glow-in-the-dark effect, allowing you to create captivating masterpieces that come alive after dark. Illuminate your imagination and let your artistic brilliance shine with GlowMagic Spray Paint. Elevate your art to new heights and leave a lasting impression with this innovative and mesmerizing paint. </p>
                    </div>
                </div>
                <div className="max-w-screen-2xl flex h-dvh-100 items-center mx-auto overflow-hidden">
                    <div className="flex flex-wrap justify-center my-[50px]"> 
                    {GlowMagicPaint.map((product) =>
                        <div key={product.Id} className="card card-compact w-[300px] bg-gray-100 shadow-xl mx-3 my-3">
                        <figure><img src={product.Image} alt={product.Name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.Name}</h2>
                            <p>{product.Size}</p>
                            <p>₱{product.Price}</p>
                            <div className="card-actions justify-end">
                                {/* Call addToCart function with the product details when button is clicked */}
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                    <LuShoppingCart /> Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
 
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-full flex flex-col md:flex-row max-w-6xl h-[600px]">
                <div className="w-full md:w-6/12 overflow-auto mr-0 md:mr-10">
                <div className="card card-side h-[200px] w-[500px] bg-base-100 shadow-xl my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                    </div>

                    <div className="card card-side h-[200px] w-[500px] bg-base-100 shadow-xl my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                    </div>

                    <div className="card card-side h-[200px] w-[500px] bg-base-100 shadow-xl my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 h-[500px] mt-10">
                <h1>Order Summary</h1>
                <p>Subtotal (0 items) : </p>
                <p>Shipping fee: </p>
                <input type="text" placeholder="Enter Voucher Code" className="input input-bordered w-full max-w-xs mr-1" /><button className="btn btn-primary">Apply Voucher</button>
                <h1 className="border-t border-black">Subtotal:</h1>
                <button className="btn btn-primary w-32">Proceed to Checkout</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </>
    );
}

export default IllumiGlow;
