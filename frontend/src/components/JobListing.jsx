import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import JobCard from './JobCard'

const JobListing = () => {

    const { searchFilter,jobs } = useContext(AppContext)
    



    const [filterdJob,setFilteredJobs ] = useState(jobs)


    useEffect(()=>{
        
        
       const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
          
       const matchesSearchLocation = job =>searchFilter.location === "" ||  job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
       
       const matchesJobType = (job) =>
         searchFilter.jobType === "" ||
         job.jobcreateType
           .toLowerCase()
           .includes(searchFilter.jobType.toLowerCase());

     let rangeSalary = searchFilter.salary.split("-");
     let minSalary = parseInt(rangeSalary[0]);
     let maxSalary = parseInt(rangeSalary[1]);
      
     
 

     const matchesSalary = (job) => {

       console.log(job);
      //  let finalLpa = parseInt(numbers[0]) * 100000; 
       if (
         !isNaN(minSalary) &&
         !isNaN(maxSalary) &&
         job.minSalary >= minSalary &&
         job.maxSalary <= maxSalary
       ) {
         return job;
       }
       else if(isNaN(minSalary)&& isNaN(maxSalary))
       {
        return job;
       }
     };

       const newFilteredJobs = jobs
         .slice()
         .reverse()
         .filter(
           (job) =>
             matchesTitle(job) &&
             matchesSearchLocation(job) &&
             matchesJobType(job) &&
             matchesSalary(job)
         );
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
