import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";


export const AppContext = createContext();



export const AppContextProvider = (props) =>{
     

  // Intialy State 
const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:'',
    jobType:'',
    salary:''
})


const [jobs,setJobs ] = useState([])

// function to fetchJob Data

const fetchJobs = async ()=>{
   setJobs(jobsData)  
}

useEffect(()=>{
  fetchJobs()
},[])

    const value = {
               searchFilter,
               setSearchFilter,
               jobs
    }
  return (<AppContext.Provider value={value}>
          {props.children}
  </AppContext.Provider>)

}
