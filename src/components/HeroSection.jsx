import React from 'react';
import { Download } from 'lucide-react';
import heroimage from '../assets/heroimage.png';
import resume from '../assets/resume.pdf';

const HeroSection = () => {
  return (
    <section className='relative w-full overflow-hidden' data-aos='zoom-in-up'>

      {/* Blur Background */}
      <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
        <div className='h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-20'></div>

        <div className='h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-20 blur-2xl'></div>
      </div>

      <div className='w-full px-6 sm:px-10 lg:px-8 max-w-7xl mx-auto relative z-10'>

        <div className='grid lg:grid-cols-2 gap-16 items-center min-h-screen'>

          {/* Left Content */}
          <div>

            <h1 className='text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight'>
              Hi, I'm{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200'>
                Surya
              </span>
              👋
            </h1>

            <p className='text-gray-300 text-lg mt-8 max-w-xl leading-9'>
               A Full Stack Developer with a passion for building scalable and modern web applications. Combining technical proficiency with creative problem-solving, I turn your ideas into high-performing digital solutions that excel in functionality and design.
            </p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-5 mt-10'>

              {/* Hire Me */}
              <button className='px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all text-white text-lg font-medium w-max'>
                Hire Me
              </button>

              {/* Resume */}
              <a
                href={resume}
                download="Surya_Resume.pdf"
                className='border border-cyan-400 px-8 py-4 rounded-full flex items-center gap-4 text-cyan-400 hover:bg-cyan-400/20 transition-all w-max'
              >
                <Download size={22} />
                Download resume
              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className='flex justify-center lg:justify-end relative'>

            {/* Glow */}
            <div className='absolute w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full'></div>

            {/* Image Box */}
            <div className='relative w-[320px] h-[420px] md:w-[330px] md:h-[400px] border-2 border-cyan-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden p-2 shadow-2xl'>

              <img
                src={heroimage}
                alt='profile'
                className='w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%]'
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection