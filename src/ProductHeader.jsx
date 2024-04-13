import Logo from './assets/Logo.png';
import { FaPaintRoller } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import React, { useState, useEffect } from 'react';


  function ProductHeader({ productData1, productData2, productData3 }) {

    const [cart, setCart] = useState([])

  
   

    const cartItemId = cart.map((product) => product.Id);

    useEffect(() => {
      if (productData1){
        
          setCart(prevCart => [...prevCart, ...productData1]);
        
      }
      
    }, [productData1]);
    
    useEffect(() => {
      if (productData2) {
        setCart(prevCart => [...prevCart, ...productData2]);
      }
    }, [productData2]);
    
    useEffect(() => {
      if (productData3) {
        setCart(prevCart => [...prevCart, ...productData3]);
      }
    }, [productData3]);
    
  
    useEffect(() => {
      // Load cart data from local storage when component mounts
      const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      if (savedCart) {
          setCart(prevCart => [...prevCart, ...savedCart]);
      }
  }, []);
  
  
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cart));
    }, );
 
   
  console.log(cart)

    return(

  <>

    <div className="navbar bg-neutral-100 text-black fixed top-0 w-full z-20">
      <div className="navbar-start ml-0 md:ml-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li>
              <a>Products</a>
              <ul className="p-2">
              <li><Link to="/ColorCraft.co/IllumiGlow"><FaPaintRoller />IllumiGlow Interior paint</Link></li>
                <li><Link to="/ColorCraft.co/GlowGlam"><FaPaintBrush />GlowGlam Face and body paint</Link></li>
                <li><Link to="/ColorCraft.co/GlowMagic"><GiSpray />GlowMagic Spray paint</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <Link to="/ColorCraft.co/"><img className="btn btn-ghost text-xl" src={Logo} alt="Logo" /></Link> 
        
       
      </div>
      <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className="border-r border-gray-400"><Link to="/ColorCraft.co/IllumiGlow"><FaPaintRoller />IllumiGlow Interior paint</Link></li>
          <li className="border-r border-gray-400"><Link to="/ColorCraft.co/GlowGlam"><FaPaintBrush />GlowGlam Face and body paint</Link></li>
          <li><Link to="/ColorCraft.co/GlowMagic"><GiSpray />GlowMagic Spray paint</Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-2 md:mr-6">
        <a className="btn btn-active btn-neutral rounded-full w-20 " onClick={()=>document.getElementById('my_modal_1').showModal()}><LuShoppingCart /></a>
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
    
  
    )

}

export default ProductHeader