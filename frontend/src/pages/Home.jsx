import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import CreateJobOpen from '../components/CreateJobOpen'
import { AppContext } from '../context/AppContext'



const Home = () => 
{   

 const {showCreateJob} = useContext(AppContext) 
  return (
    <>
      <Navbar />
      <Hero />
      <JobListing />
      {showCreateJob && <CreateJobOpen />}
    </>
  ); 
}


export default Home