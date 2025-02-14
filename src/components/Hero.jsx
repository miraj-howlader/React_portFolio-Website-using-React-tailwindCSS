import React from 'react'
import WomanImg from '../assets/img/banner-woman2.webp'

const Hero = () => {
  return (
    <section id='home' className=' lg:h-[85vh] flex  items-center
     bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat
      py-32 lg:py-0 overflow-hidden'>
      <div className="container mx-auto  h-full">
         <div className=' flex items-center h-full pt-8'>
          {/* left side  */}
          <div className=' flex flex-1 flex-col items-center
           lg:items-start'>
            <p className=' text-lg text-accent mb-[22px]'>Hey, I'm Jane 👋</p>
            <h1 className=' text-4xl leading-[44px] md:text-5xl
             md:leading-none lg:text-7xl lg:leading-[1.2] font-body
              md:tracking-[-2px]'>
              I Build & Design <br/> Web Interface
            </h1>
            <p className=' pt-4 pb-8 md:pt-4 md:pb-4
             max-w-[480px] text-lg text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellat natus itaque deleniti.</p>
         <button className=' btn btn-md  bg-accent hover:bg-accent-hover md:btn-lg
           transition-all'>Work with me</button>
         
          </div>
          {/* right  */}
          <div className=' hidden lg:flex flex-1 justify-end items-end h-full'>
             <img src={WomanImg} alt="" />
          </div>
         </div>
      </div>
    
    </section>
  )
}

export default Hero
