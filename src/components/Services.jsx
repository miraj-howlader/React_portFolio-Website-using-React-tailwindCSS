import React from 'react'

import { services } from '../data'
const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className="container mx-auto">
        {/* section title */}
        <div className=' flex flex-col items-center text-center'>
           <h2 className=' section-title before:content-services relative before:absolute before:opacity-40before:-top[2rem] before:hidden
            before:lg:block'>what I do for clients</h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam neque dolorem asperiores officia impedit alias? Ipsum beatae rerum voluptate.</p>
        </div>

        {/* item grid  */}
        <div className=' grid lg:grid-cols-4 gap-8'>
            {services.map((service,index)=>{
                const {icon,name,description} =service

                return <div className=' bg-secondary p-6
                 rounded-2xl ' key={index}>
                   <div className=' text-accent rounded-sm
                    w-12 h-12 flex justify-center items-center
                     mb-24 text-[28px]'>
                    {icon}
                   </div>
                   <h2 className=' mb-2'>{name}</h2>
                   <p>{description}</p>
                </div>
            })}

        </div>
      </div>
    </section>
  )
}

export default Services
