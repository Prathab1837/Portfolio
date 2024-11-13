import React from 'react';
import reactIcon from '../assets/ReactIcon.jpeg';
import nodeIcon from '../assets/NodejsIcon.png';
import expressIcon from '../assets/ExpressjsIcon.png';
import mongodbIcon from '../assets/MongodbIcon.png';
import javascriptIcon from '../assets/JavascriptIcon.png';
import htmlIcon from '../assets/HtmlIcon.png';
import tailwindIcon from '../assets/tailwindIcon.png';
import bootstrapIcon from '../assets/BootstrapIcon.jpeg';
import githubIcon from '../assets/GithubIcon.png';
import gitIcon from '../assets/GitIcon.png';

function Skills() {
  return (
    <section className='bg-primary px-5 py-14 flex flex-col md:flex-row text-blue'>
      <div className='w-full md:w-1/2'>
        <h1 data-aos="flip-right" className='text-4xl border-b-4 border-orange w-[90px] font-bold '>Skills</h1>
        <p data-aos="fade-down">These are the platforms I am skilled in.</p>
      </div>
      <div className='w-full px-5 py-2 mt-2 mb-2 md:w-auto bg-secondary flex flex-col md:flex-row rounded-xl text-grey'>

          <div className='flex flex-col md:px-3 gap-5'>

          <div className='flex flex-row mt-2 gap-2 md:gap-5'>
            <div data-aos="fade-down"> 
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${reactIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>Reactjs</div>
            </div>
            <div data-aos="fade-right">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${nodeIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>Nodejs</div>
            </div>
            <div data-aos="fade-left">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${expressIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>Expressjs</div>
            </div>
            <div data-aos="fade-up">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${mongodbIcon})`, height:"75px", width:"75px" }}></div>
              <div className='text-center'>MongoDB</div>
            </div>
          </div>

          <div className='flex gap-2 mt-2 md:gap-5'>
            <div data-aos="fade-up">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${javascriptIcon})`, height:"75px", width:"75px"}} ></div>
              <div className='text-center'>Javascript</div>
            </div>
            <div data-aos="fade-left">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${htmlIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>HTML</div>
            </div>
            <div data-aos="fade-right">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${tailwindIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center' >Tailwind</div>
            </div>
            <div data-aos="fade-down">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${bootstrapIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>Bootstrap</div>
            </div>
          </div>

          <div className='flex mt-2 gap-2 md:gap-5'>
            <div data-aos="fade-down">
                <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${githubIcon})`, height:"75px", width:"75px"}}></div>
                <div className='text-center'>Github</div>
            </div>
            <div data-aos="fade-right">
              <div className='justify-center bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${gitIcon})`, height:"75px", width:"75px"}}></div>
              <div className='text-center'>Git</div>
            </div>
          </div>

          </div>

      </div>
    </section>
  )
}

export default Skills