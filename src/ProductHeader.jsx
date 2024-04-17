import Logo from './assets/Logo.png';
import { FaPaintRoller } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { Link } from 'react-scroll';
import { Link as Links } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import React, {useState, useEffect} from 'react'



  function ProductHeader({itemNumber}) {

    const [notif, setNotif] = useState(false)

    useEffect(() => {
      if(itemNumber === 0){
        setNotif(true)
      }
      else{
        setNotif(false)
      }
    }, [itemNumber])


    
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
              <li><Link to="IllumiGlow" smooth={true} duration={500}><FaPaintRoller />IllumiGlow Interior paint</Link></li>
                <li><Link to="GlowGlam" smooth={true} duration={500}><FaPaintBrush />GlowGlam Face and body paint</Link></li>
                <li><Link to="GlowMagic" smooth={true} duration={500}><GiSpray />GlowMagic Spray paint</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <Links to="/ColorCraft.co/"><img className="btn btn-ghost text-xl" src={Logo} alt="Logo" /></Links> 
        
       
      </div>
      <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className="border-r border-gray-400"><Link to="IllumiGlow" smooth={true} duration={500}><FaPaintRoller />IllumiGlow Interior paint</Link></li>
          <li className="border-r border-gray-400"><Link to="GlowGlam" smooth={true} duration={500}><FaPaintBrush />GlowGlam Face and body paint</Link></li>
          <li><Link to="GlowMagic" smooth={true} duration={500}><GiSpray />GlowMagic Spray paint</Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-2 md:mr-6">
        <a className="btn btn-active btn-neutral rounded-full w-20" onClick={() => document.getElementById('my_modal_1').showModal()}><LuShoppingCart />{notif ? '' : `${itemNumber}`}</a>
      </div>
    </div>
    
  </>
    
  
    )

}

export default ProductHeader