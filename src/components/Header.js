import React, { useState } from 'react'
import { CiMenuBurger, FaHome, FaUser, FaFile, FaBriefcase, FaEnvelope  } from "react-icons/fa";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const clicked = () => {

    }
  return (
    <header>
        <div id='home'>
            <div className='iconcontainer'>
                <div className='iconbox' >
                    <a href='#home'><div className='icons'><FaHome size={30}/><h1>HOME</h1></div></a>
                </div>
                <div className='iconbox'>
                    <a href='#about'><div className='icons'><FaUser size={30}/><h1>ABOUT</h1></div></a>
                </div>
                <div className='iconbox'>
                    <a href='#projects'><div className='icons'><FaBriefcase size={30}/><h1>PROJECTS</h1></div></a>
                </div>
                <div className='iconbox'>
                    <a href='#resume'><div className='icons'><FaFile size={30}/><h1>RESUME</h1></div></a>
                </div>
                <div className='iconbox'>
                    <a href='#contact'><div className='icons'><FaEnvelope size={30}/><h1>CONTACT</h1></div></a>
                </div>
            </div>
        </div>
    </header>

  )
}

export default Header