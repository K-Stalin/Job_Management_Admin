import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import axios from "axios";


export const AppContext = createContext();



export const AppContextProvider = (props) =>{
     
const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Intialy State 
const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:'',
    jobType:'',
    salary:''
})


const [jobs,setJobs ] = useState([])

const [showCreateJob,setShowCreateJob] = useState(false)

// function to fetchJob Data
const fetchJobs = async ()=>{
  //  setJobs(jobsData)  
}


const fetchListJob = async ()=>{
  
  try {
        
const { data } = await axios.get(`${backendUrl}/api/company/list-jobs`);


    if(data.success)
    {
      console.log(data.jobs)
      setJobs(data.jobs)
    }
         
  } catch (error) {
    
  }

}


useEffect(()=>{
  fetchJobs()
  fetchListJob()
},[])

    const value = {
               searchFilter,
               setSearchFilter,
               jobs,
               showCreateJob,
               setShowCreateJob,
               backendUrl,
               jobs,
               fetchListJob
    }
  return (<AppContext.Provider value={value}>
          {props.children}
  </AppContext.Provider>)

}
