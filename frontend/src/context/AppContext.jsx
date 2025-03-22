import { createContext, useState } from "react";


export const AppContext = createContext();



export const AppContextProvider = (props) =>{
     

  // Intialy State 
const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:'',
    jobType:'',
    salary:''
})



    const value = {
               searchFilter,
               setSearchFilter
    }
  return (<AppContext.Provider value={value}>
          {props.children}
  </AppContext.Provider>)

}
