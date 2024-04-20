import IllumiGlowImg from './assets/IllumiGlow.jpg'
import GlowMagicImg from './assets/GlowMagic.jpg'
import GlowGlamImg from './assets/GlowGlam.jpg'
import ProductHeader from './ProductHeader.jsx'
import fbLogo from './assets/fbLogo.png'
import googleLogo from './assets/googleLogo.png'
import { IllumiGlowPaint, GlowGlamPaint, GlowMagicPaint } from './Data/Products'
import { LuShoppingCart } from "react-icons/lu";
import React, { useState, useEffect } from 'react'
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";


function IllumiGlow () {

    const [cartItem, setCartItem] = useState([]);
    const [emptyCart, setEmptyCart] = useState(true)
    const [notifFailedTimeout, setNotifFailedTimeout] = useState(false)
    const [itemNotifId, setItemNotifId] = useState([])
    const [removeIndex, setRemoveIndex] = useState(null)
    const [totalPrice, setTotalPrice] = useState([])



    const totalItems = cartItem.length
    const cartItemId = cartItem.map((product) => product.Id);
    
    //Handles add to cart
    const addToCart = (product) => {
        if (cartItemId.includes(product.Id)) {
            setNotifFailedTimeout(true);
            setTimeout(() => {
                setNotifFailedTimeout(false);
            }, 3000); 
        } else {
            setItemNotifId(prevItem => [...prevItem, product.Id])
            setCartItem(prevCart => [...prevCart, product]);
            setTotalPrice(prevTotal => [...prevTotal, product.Price])
          
        }
    };

    
    
    //Saving to local storage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const savedTotal = JSON.parse(localStorage.getItem('totalPrice')) || [];
        if (savedCart && savedTotal) {
            setCartItem(prevCart => [...prevCart, ...savedCart]);
            setTotalPrice(prevTotal => [...prevTotal, ...savedTotal]);
        }
    }, []);
    
    
      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        if(cartItem.length > 0){
            setEmptyCart(false)
        }
        else{
            setEmptyCart(true)
        }
      }, [cartItem]);



    //Notification
    useEffect(() => {
    let intervalId;

    if (itemNotifId.length > 0) {
        intervalId = setInterval(() => {
            setItemNotifId(prevItem => {
                if (prevItem.length > 0) {
                    const newData = [...prevItem];
                    newData.shift();
                    return newData;
                }
                return prevItem;
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [itemNotifId]);


    //Adding total price
    const sum = totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumAsPHP = sum.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
    let subTotal;
    if(cartItem.length === 0){
        subTotal = 0
    }
    else{
        subTotal = sum + 200
    }
    const subTotalAsPHP = subTotal.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });


    //Interactions
    const handleModalConfirmation = (index) => {
        setRemoveIndex(index)
        document.getElementById('removeConfirmation').showModal()
    };

    const handleRemoveItem = () => {
        const updatedCart = [...cartItem];
        const removedItem = updatedCart.filter((_,i) => i !== removeIndex)
        const removedPrice = totalPrice.filter((_,i) => i !== removeIndex)
        updatedCart[removeIndex].Quantity = 1;
        setCartItem(updatedCart);    
        setCartItem(removedItem);
        setTotalPrice(removedPrice)
    }

    const handleQuantityChange = (e, index) => {
        const updatedCart = [...cartItem];
        updatedCart[index].Quantity = parseInt(e.target.value) || 0;
        setCartItem(updatedCart);
    };

    const handleIncrement = (index) => {
        const updatedCart = [...cartItem];
        updatedCart[index].Quantity += 1;
        setCartItem(updatedCart);
        handlePrice(index)
    };

    const handlePrice = (index) => {
        const updatedTotalPrice = [...totalPrice]; 
        const totalPriceQuan = cartItem[index].Quantity * cartItem[index].Price; 
        updatedTotalPrice[index] = totalPriceQuan; 
        setTotalPrice(updatedTotalPrice); 
    }
    
    const handleDecrement = (index) => {
        const updatedCart = [...cartItem];
        if (updatedCart[index].Quantity > 1) {
            updatedCart[index].Quantity -= 1;
            setCartItem(updatedCart);
            handlePrice(index)
        }
    };

    

    return(

        <>
            <ProductHeader itemNumber={totalItems}/>
            <div className="bg-neutral-100">
                <section id="IllumiGlow">
                <div className="h-dvh-100 w-full bg-neutral-100 text-black">
                    <div className={`flex flex-col justify-center items-start fixed top-[70px] right-3 z-40 `}>
                        {itemNotifId.map((notif) =>
                        <div key={notif} role="alert" className="alert alert-success mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Product ID:{notif} added to the cart.</span>
                        </div>
                        )}
                        
                        {notifFailedTimeout && 
                        <div  role="alert" className="alert alert-error mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>You Already added this item to the cart.</span>
                        </div>
                        }
                        
                    </div>
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
                                <h2 className="card-title font-bold">{product.Name}</h2>
                                <p className="text-md font-medium">{product.Size}</p>
                                <p className="text-md font-medium">₱{product.Price}</p>
                                <div className="card-actions justify-end">
                                    {/* Call addToCart function with the product details when button is clicked */}
                                    <button className="btn btn-warning" onClick={() => addToCart(product)}>
                                        <LuShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                </section>
                
                <section id="GlowGlam">
                <div className="h-dvh-100 w-full bg-neutral-100 text-black mt-[100px]">
                    <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                        <img src={GlowGlamImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-yellow-400" />
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
                                <h2 className="card-title font-bold">{product.Name}</h2>
                                <p className="text-md font-medium">{product.Size}</p>
                                <p className="text-md font-medium">₱{product.Price}</p>
                                <div className="card-actions justify-end">
                                    {/* Call addToCart function with the product details when button is clicked */}
                                    <button className="btn btn-warning" onClick={() => addToCart(product) }>
                                        <LuShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                </section>

                <div id="GlowMagic" className="h-dvh-100 w-full bg-neutral-100 text-black mt-[100px]">
                    <div className="max-w-screen-2xl h-[800px] md:h-[500px] justify-center items-center mx-auto flex flex-col md:flex-row border-b border-gray-500">
                        <img src={GlowMagicImg} className="max-w-sm rounded-lg shadow-2xl w-[300px] h-[300px] mx-[30px] border-2 border-red-400" />
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
                                <h2 className="card-title font-bold">{product.Name}</h2>
                                <p className="text-md font-medium">{product.Size}</p>
                                <p className="text-md font-medium">₱{product.Price}</p>
                                <div className="card-actions justify-end">
                                    {/* Call addToCart function with the product details when button is clicked */}
                                    <button className="btn btn-warning" onClick={() => addToCart(product) }>
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
            <div className="modal-box w-full flex flex-col lg:flex-row max-w-6xl h-[600px] bg-gray-200">
                <div className="w-full lg:w-6/12 h-full items-center justify-center overflow-auto mr-0 md:mr-1 flex flex-wrap sm:flex-wrap">
                    
                   {emptyCart && <div className="mx-auto h-full items-center justify-center flex flex-col font-bold text-4xl text-gray-400"><h1>Empty Cart</h1></div>}
                   {cartItem.map((items, index) =>  
                   <div key={items.Id} className="card card-side h-[250px] w-[250px] lg:w-[500px] sm:w-[700px] sm:h-[200px] bg-base-100 shadow-xl my-4 mx-2">
                    <figure><img className="w-[200px] hidden sm:block" src={items.Image} alt={items.Name}/></figure>
                    <div className="card-body">
                        <button className="btn btn-sm btn-error absolute right-2 top-2" onClick={() => handleModalConfirmation(index)}><FaRegTrashAlt /></button>
                        <h2 className="card-title">{items.Name}</h2>
                        <p>{items.Size}</p>
                        <p>₱{items.Price}</p>
                        <div className="card-actions justify-end">
                        <button className="btn" onClick={() => handleDecrement(index)}><FaMinus /></button>
                        <input value={items.Quantity} onChange={(e) => handleQuantityChange(e, index)} className="input input-bordered p-0 text-center w-[50px] h-[50px]" />
                        <button className="btn" onClick={() => handleIncrement(index)}><FaPlus /></button>
                        </div>
                    </div>
                    </div>)}
                </div>

                <div className="max-w-screen-sm w-full lg:w-6/12 mx-auto h-[400px] mt-[30px] lg:mt-[120px]">
                    <h1 className="font-extrabold text-center text-2xl md:text-4xl mb-[30px]">Order Summary</h1>
                    <p className="flex justify-between w-full">
                        <span className="font-medium text-xl">Total Price</span>
                        <span className="font-medium text-xl">{sumAsPHP}</span>
                    </p>
                    <p className="flex justify-between w-full mt-[10px]">
                        <span className="font-medium text-xl">Shipping fee</span> 
                        <span className="font-medium text-xl">₱200.00</span>
                    </p>
                    <h1 className="flex justify-between w-full border-t border-b border-black mt-[10px] py-2">
                        <span className="font-medium text-xl">Subtotal</span> 
                        <span className="font-medium text-xl">{subTotalAsPHP}</span>
                    </h1>
                    <div className="flex justify-center">
                        <button className="btn btn-success mt-4 w-[250px] h-[60px] rounded-full" onClick={()=>document.getElementById('login').showModal()}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
                
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
            
            {/** Remove Item Confirmation */}
            <dialog id="removeConfirmation" className="modal">
            <div className="modal-box bg-red-400">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">Are you sure to remove this item from the cart?</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={handleRemoveItem}>Yes</button>
                    <button className="btn mx-4">No</button>
                </form>
                </div>
            </div>
            </dialog>
            
            {/* Modal box for login */}
            <dialog id="login" className="modal">
            <div className="modal-box">
                <h1 className="text-center font-bold text-2xl mt-4">LOGIN</h1>
                <form className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    <a className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="flex w-full">
                    <div className="grid h-[70px] w-[50px] flex-grow card rounded-box place-items-center cursor-pointer btn btn-active bg-blue-500 hover:bg-blue-600"><img src={fbLogo} className="h-[50px]"/></div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="grid h-[70px] w-[50px] flex-grow card rounded-box place-items-center cursor-pointer btn btn-active bg-emerald-500 hover:bg-emerald-600"><img src={googleLogo} className="h-[50px]"/></div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </>
    );
}

export default IllumiGlow;




