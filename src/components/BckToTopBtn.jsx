import React, { useEffect, useState } from 'react'

import { Link,animateScroll as scroll } from 'react-scroll'
import { FaChevronUp } from "react-icons/fa6";

const BckToTopBtn = () => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            return window.scrollY  > 600 ? setShow(true):
            setShow(false)
        })
    })

    const scrillToTop = () => {
        scroll.scrollToTop();
    }
  return (
  show && <button onClick={()=>scrillToTop()} className=' bg-accent w-12 h-12
   hover:bg-accent-hover text-white rounded-full fixed right-24
    bottom-24 cursor-pointer flex justify-center items-center
     transition-all'>
           <FaChevronUp  className=' w-6 h-6'/>
  </button>
  )
}

export default BckToTopBtn
