import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import JobCard from './JobCard'

const JobListing = () => {

    const { searchFilter,jobs } = useContext(AppContext)
    
let rangeSalary = searchFilter.salary.split("-")
 
 parseInt(rangeSalary[0]);
 parseInt(rangeSalary[1]);
 



    const [filterdJob,setFilteredJobs ] = useState(jobs)

    useEffect(()=>{
        
        
       const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
          
       const matchesSearchLocation = job =>searchFilter.location === "" ||  job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
       
       const matchesJobType = (job) => searchFilter.jobType === "" || job.jobtype.toLowerCase().includes(searchFilter.jobType.toLowerCase());

       const newFilteredJobs = jobs.slice().reverse().filter(
        job=>matchesTitle(job) && matchesSearchLocation(job) && matchesJobType(job)
       )
       setFilteredJobs(newFilteredJobs)
    },[jobs,searchFilter])

  return (
    <section className='joblisting'>
        <div className="container">
              <div className="joblisting-wrapper">

              {/* Search Filter from Hero Componenet */}
              {                
                (
                <>
                 <div className='joblisting-container'>
                     {
                        filterdJob.map((job,index)=>(
                         <JobCard key={index} job={job}/>
                        ))
                     }
                 </div>
                   
                </>
                )
              }
              </div>
        </div>
      
    </section>
  )
}

export default JobListing
