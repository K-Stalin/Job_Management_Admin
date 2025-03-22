import React from 'react'
import { assests } from '../assets/assets'


const Navbar = () => {
  return (
    <>
      <header>
         <div className='container'>
             <div className="nav">
                 <div>
                    <img src={assests.logo} alt="logo" />
                 </div>
                  <ul className='nav-right'>
                    <li>Home</li>
                    <li>Find Jobs</li>
                    <li>Find Talents</li>
                    <li>About us</li>
                    <li>Testimonials</li>
                  </ul>
                   <div className='createBtn'>
                     <button>Create jobs</button>
                   </div> 
             </div>
         </div>   
      </header> 
    </>
  )
}

export default Navbar
