import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import CreateJobOpen from '../components/CreateJobOpen'



const Home = () => 
{   
  return ( <>
        <Navbar/>          
        <Hero/>
        <JobListing/>
        <CreateJobOpen/>
         </>
  ) 
}


export default Home