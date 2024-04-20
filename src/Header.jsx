import Logo from './assets/Logo.png'
import fbLogo from './assets/fbLogo.png'
import googleLogo from './assets/googleLogo.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as Links} from 'react-router-dom'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

 
    return(

  <>
    <div className={`navbar ${isScrolled ? `bg-neutral-100 text-black` : `bg-opacity-0 text-slate-100`} fixed top-0 w-full z-20`}>
      <div className="navbar-start ml-0 md:ml-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li className="mr-4"><Links to="/ColorCraft.co/IllumiGlow/">Products</Links></li>
            <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
            <li><Link to="testimonial" smooth={true} duration={500}>Testimonial</Link></li>
          </ul>
        </div>
        
        <Link to="landing-page" smooth={true} duration={500}><img className="btn btn-ghost text-xl" src={Logo} alt="Logo" /></Link> 
        <h1></h1>
       
      </div>
      <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-4"><Links to="/ColorCraft.co/IllumiGlow/">Products</Links></li>
          <li className="mr-4"><Link activeClass="active" spy={true} to="about-us" smooth={true} duration={500}>About Us</Link></li>
          <li className="mr-4"><Link activeClass="active" spy={true} to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
          <li className="mr-4"><Link activeClass="active" spy={true} to="testimonial" smooth={true} duration={500}>Testimonial</Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-2 md:mr-6">
        <a className={`${isScrolled ? `btn btn-active btn-neutral`:`btn`} rounded-full w-20`} onClick={()=>document.getElementById('login').showModal()}>Login</a>
      </div>
    </div>

    {/** modal box */}
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
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
    
  
    )

}

export default Header