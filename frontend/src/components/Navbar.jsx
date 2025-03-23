import React, { useContext } from 'react'
import { assests } from '../assets/assets'
import { AppContext } from '../context/AppContext'


const Navbar = () => {

const {setShowCreateJob} = useContext(AppContext)

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
                     <button onClick={e=>setShowCreateJob(true)}>Create jobs</button>
                   </div> 
             </div>
         </div>   
      </header> 
    </>
  )
}

export default Navbar
