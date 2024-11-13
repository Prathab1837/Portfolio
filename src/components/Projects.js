import React from 'react'
import project1 from '../assets/form.png';
import project2 from '../assets/weather.png';
import project3 from '../assets/moviebag.png';
function Projects() {
  return (
    <section id='projects' className='flex flex-col py-14 px-5 justify-center bg-secondary text-white '>
        <div className='w-full'>
          <div className='flex flex-col px-5 mb-5'>
            <h1 data-aos="flip-right" className='text-4xl  border-b-4 border-orange mb-5  w-[140px] font-bold'>Projects</h1>
            <p data-aos="fade-up">These are some of my projects. I have built these with React, MERN and css. Check them out.</p>
          </div>
        </div>
        <div className='w-full '>
          <div className='flex flex-col md:flex-row px-10 gap-5 '>

            <div data-aos="zoom-in" className='relative border-2 border-white'>
              <img className='h-[200px] w-[500px]' src={project1} alt="form pic" />
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>A Signup form with fields like Name, Email and Password with basic validation.</p>
                <div className='flex justify-center'>
                  <a className='btn' href="https://prathab1837.github.io/FormValidation/">View</a>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in" className='relative border-2 border-white'>
              <img className='h-[200px] w-[500px]' src={project2} alt="weather pic" />
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>A weather app with API to fetch real weather data for a specified city.</p>
                <div className='flex justify-center'>
                  <a className='btn' href="https://prathab1837.github.io/React-weather-app/">View</a>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in" className='relative border-2 border-white'>
              <img className='h-[200px] w-[500px]' src={project3} alt="moviebag pic" />
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>A movie search app with OMDB API to allow users to search for movies and display results.</p>
                <div className='flex justify-center'>
                  <a className='btn' href="https://prathab1837.github.io/movieBAG">View</a>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Projects