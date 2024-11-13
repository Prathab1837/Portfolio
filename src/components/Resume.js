import React from 'react'
import ResumeImg from '../assets/resumeCartoonImage.png'
import PrathabResume from '../assets/PrathabResume.png'

function Resume() {
  return (
  <section id='resume' className='flex flex-col md:flex-row bg-primary px-5 py-20' >
    <div data-aos="fade-down" className='md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg} alt="About pic" />
    </div>

    <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-blue'>
        <h1 data-aos="flip-right" className='text-4xl  border-b-4 border-orange text-blue mb-5 w-[140px] font-bold'>Resume</h1>
        <p data-aos="fade-up" className='pb-5'>You can download my resume here.</p>
          <div data-aos="zoom-out" className='mt-4'>
          <a className='btn text-grey rounded-lg' href={PrathabResume} download>Download</a>
          </div>
      </div>
       
    </div>
  </section>
  )
}

export default Resume