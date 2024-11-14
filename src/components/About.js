import React from 'react'
import AboutImg from '../assets/Photo2.png'

function About() {
  return (
  <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 py-10' >
    <div className='md:w-1/2 py-5 px-5'>
        <img data-aos-anchor-placement="center-bottom" data-aos="flip-right" data-aos-duration="1000" src={AboutImg} alt="About pic" className='aboutimage' />
    </div>

    <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-white'>
        <h1 data-aos="flip-right" className='text-4xl  border-b-4 border-orange mb-5 w-[175px] font-bold'>About Me</h1>
        <p data-aos="fade-up" className='pb-5'>Hi, I am Prathab. I am a React developer. I build beautiful projects with Reactjs.</p>
        <p data-aos="fade-up" className='pb-5'>I am proficient in frontend skills like Reactjs, HTML, CSS, Javascript and Bootstrap.</p>
        <p data-aos="fade-up" className='pb-5'>In backend I am skilled in Node.js, Express.js, and database MongoDB.</p>
      </div>
       
    </div>
  </section>
  )
}

export default About