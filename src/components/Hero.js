import React from 'react';
import HeroImg from '../assets/Photo1.png';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai";
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <section id='home' className='flex flex-col md:flex-row px-5 pt-[7rem] pb-[3rem] justify-center heropage'>
        <div className='md:w-1/2 flex flex-col md:mt-16 mt-0 gap-6'>
            <h1 data-aos="fade-left" data-aos-duration="2000" className=' text-orange text-5xl font-hero-font '>HI, <br /> <h1 className='text-6xl'>I'm Prathab</h1>
            <p data-aos="fade-right" data-aos-duration="2000" className='text-2xl text-red'>
              <Typewriter
                options={{
                strings: ['Web developer','React developer','Mern-stack developer'],
                autoStart: true,
                loop: true,
                }}
              /> 
            </p>
            </h1>
            <div data-aos="fade-right" data-aos-duration="2000" className='flex py-10'>
                <a href="https://www.linkedin.com/in/prathab-m-45813a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='pr-5 text-blue'><AiOutlineLinkedin size={40}/></a>
                <a href="mailto: prathabsm4646@gmail.com" className='pr-5 text-yellow-500'><AiOutlineMail size={40}/></a>
                <a href="https://www.instagram.com/invites/contact/?igsh=1snyzs8ncsam8&utm_content=hdikh24" className='text-pink-500'><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
                <div className='flex'>
                  <div data-aos="fade-up" className='h-80 w-80 md:h-96 md:w-96 rounded-full bg-slate-400 absolute mt-12 md:mt-20 ml-2 shadow-2xl'></div>
                  <img data-aos="fade-down" data-aos-duration="2100" src={HeroImg} alt="pic" className=' heroimage md:ml-10' />
                  <div className='fixed mt-96 ml-80 md:ml-96 z-20'>
                  <a href="https://wa.me/6374039851?text=Just saw your Portfolio" target="_blank" rel="noreferrer" className='text-green-500'><AiOutlineWhatsApp size={50}/></a>
                  </div>
                </div>
               
    </section>
  )
}

export default Hero