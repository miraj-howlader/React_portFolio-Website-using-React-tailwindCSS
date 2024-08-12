import React from 'react'

import Projects from '../components/Projects'

const PortFolio = () => {
  return (
    <section id='portfolio' className=' section bg-primary
     min-h-[1400px]'>
      <div className="container mx-auto">
        <div className=' flex flex-col items-center text-center'>
           <h2 className=' section-title before:content-portfolio
            relative before:absolute before:opacity-40
             before:-top-[2rem] before:-left-3/4 before:hidden
              before:lg:block'>My latest work</h2>
              <p className=' subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi sapiente consequatur placeat excepturi, adipisci et asperiores nobis deleniti tempora.</p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default PortFolio
