

import { navigation } from "../data"
import {Link}  from 'react-scroll'
const Nav = () => {
  return (
    <nav className=" flex space-x-8 capitalize text-[15px]">
      {
        navigation.map((item,index)=>{
          return <li
          className=" list-none text-white hover:text-accent cursor-pointer"
          key={index}>
            <Link to={item.href}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className=" transition-all duration-300"
            >{item.name}</Link>
          </li>
        })
      }
      
    </nav>
  )
}

export default Nav
