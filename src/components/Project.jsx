import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className=' flex flex-col items-center
     text-center'>
      <div className="mb8">
        <img className=' rounded-2xl' src={item.image} alt="" />
      </div>

      <p className=' capitalize text-accent text-sm
       mt-3'>{item.category}</p>
       <h3 className=' text-2xl font-semibold capitalize
        mt-3'>{item.name}</h3>
      
    </div>
  )
}

export default Project
