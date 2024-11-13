import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-5 py-2 bg-primary navbar'>
        <a className='font-bold text-black' href='#'>Prathab</a>
        <nav data-aos="fade-right" data-aos-duration="1500" className='hidden md:block'>
            <ul className='flex text-blue font-bold'>
                <li className='duration-500 hover:text-red'><a href="#home">Home</a></li>
                <li className='duration-500 hover:text-red'><a href="#about">About</a></li>
                <li className='duration-500 hover:text-red'><a href="#projects">Projects</a></li>
                <li className='duration-500 hover:text-red'><a href="#resume">Resume</a></li>
                <li className='duration-500 hover:text-red'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden'>
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><CiMenuBurger className='text-blue h-5' /></button>

    </header>
  )
}

export default Header