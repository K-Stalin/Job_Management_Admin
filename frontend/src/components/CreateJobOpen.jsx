import React, { useContext, useState } from 'react'
import { assests, jobLocations, jobType } from '../assets/assets'
import axios from 'axios'
import { AppContext } from '../context/AppContext';
import { toast } from "react-toastify";


const CreateJobOpen = () => {

const [title,setTitle ] = useState('');    
const [companyName,setCompanyName ] = useState('');    
const [location,setLocation ] = useState();    
const [jobcreateType,setJobCreateType ] = useState('');    
const [description,setDescription ] = useState('');    
const [minSalary,setMinSalary ] = useState();    
const [maxSalary,setMaxSalary ] = useState();
const [applicationDeadLine, setapplicationDeadLine] = useState();    

const { backendUrl, setShowCreateJob, fetchListJob } = useContext(AppContext); 


const onSubmitHandler = async (e) =>{
  e.preventDefault()
  
 
// console.log(title)        
// console.log(companyName)        
// console.log(location)        
// console.log(jobcreateType)        
// console.log(description)        
// console.log(minSalary)
// console.log(maxSalary)
// console.log(applicationDeadLine)

        try {
          
          
         const { data } = await axios.post(`${backendUrl}/api/company/post-job`, {
           title,
           companyName,
           location,
           jobcreateType,
           description,
           minSalary,
           maxSalary,
           applicationDeadLine,
         });
        if(data.success)
        {

          toast.success("Job posted successfully!");
          setTitle('')
          setCompanyName('')
          setDescription('')
          setLocation('')
          setJobCreateType('')
          setMaxSalary('')
          setMinSalary('')
          setapplicationDeadLine('')
          setShowCreateJob(false);
          fetchListJob();
        }

        } catch (error) {
          console.log(error)
        }

}


  return (
    <section className="create">
      <div className="container">
        <div className="overlay">
          <form className="create-wrapper" onSubmit={onSubmitHandler}>
            <h4 className="create-jo__title">Create Job Opening</h4>
            {/* 1st row */}
            <div className="create-job__firstrow">
              <div>
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  required
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="create-job__secondrow">
              <div>
                <label htmlFor="location">Location</label>
                <select onChange={(e) => setLocation(e.target.value)} value={location} required>
                  <option value="">Select a Location</option>
                  {jobLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="jobType">Job Type</label>
                <select
                  onChange={(e) => setJobCreateType(e.target.value)}
                  value={jobcreateType}
                  required
                >
                  <option value="">Select a job type</option>
                  {jobType.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3rd row */}
            <div className="create-job__thirdrow">
              <div>
                <label className="salary-range" htmlFor="minSalary">
                  Salary Range
                </label>
                <div className="create-job__thirdrow-first">
                  <input
                    type="number"
                    id="minSalary"
                    name="minSalary"
                    placeholder="₹10K"
                    required
                    onChange={(e) => setMinSalary(e.target.value)}
                    value={minSalary}
                  />
                  <input
                    type="number"
                    id="maxSalary"
                    name="maxSalary"
                    placeholder="₹100,000"
                    onChange={(e) => setMaxSalary(e.target.value)}
                    value={maxSalary}
                    required
                  />
                </div>
              </div>
              <div className="create-job__thirdrow-second">
                <label htmlFor="deadline">Application Deadline</label>
                <input
                  type="date"
                  onChange={(e) => setapplicationDeadLine(e.target.value)}
                  value={applicationDeadLine}
                  required
                />
              </div>
            </div>

            {/* 4th row */}
            <div className="create-job__fourthrow">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                placeholder='Please share a description to let the candidate know more about the job role'
              ></textarea>
            </div>

            {/* 5th row */}
            <div className="create-job__fifthrow">
              <button type="button">
                Save Draft <img src={assests.downarrow} alt="downarrow" />
              </button>
              <button type="submit">
                Publish <img src={assests.rightarrow} alt="rightarrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateJobOpen
