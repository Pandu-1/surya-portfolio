import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <section className='text-white mt-20 relative overflow-hidden'id='about'>
        <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                    More <span className='text-primary'>About </span>Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                    write about yours
                </p>
                <div className='grid grid-cols-3 gap-6 max-w-xl'>
                    <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                            +20
                        </h3>
                        <p className='text-sm text-gray-400 uppercase tracking-wider mt-2'>
                            projects
                        </p>
                    </div>
                    <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                            +2
                        </h3>
                        <p className='text-sm text-gray-400 uppercase tracking-wider mt-2'>
                            clients
                        </p>
                    </div>
                    <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                            +1.5
                        </h3>
                        <p className='text-sm text-gray-400 uppercase tracking-wider mt-2'>
                            years
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative'data-aos='fade-left'>
                <div className='relative w-64 h-64 md:w-96 md:h-120'>
                    <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4 '>

                    </div>
                    <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                        <img  src={about} alt="about" className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About