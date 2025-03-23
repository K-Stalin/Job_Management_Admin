import React, { useState } from 'react'
import { assests, jobLocations, jobType } from '../assets/assets'


const CreateJobOpen = () => {

const [jobTitle,setJobTitle ] = useState('');    
const [companyName,setCompanyName ] = useState('');    
const [location,setLocation ] = useState('');    
const [jobcreateType,setJobCreateType ] = useState('');    
const [description,setDescription ] = useState('');    
const [minSalary,setMinSalary ] = useState(0);    
const [maxSalary,setMaxSalary ] = useState(0);
const [deadline,setDeadline] = useState()    


  return (
    <section className="create">
      <div className="container">
        <div className='overlay'>
          <form className="create-wrapper">
            <h4 className="create-jo__title">Create Job Opening</h4>
            {/* 1st row */}
            <div className="create-job__firstrow">
              <div>
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" onChange={e=>setJobTitle(e.target.value)} value={jobTitle} required />
              </div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={e=>setCompanyName(e.target.value)}
                  value={companyName}
                  required
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="create-job__secondrow">
              <div>
                <label htmlFor="location">Location</label>
                <select onChange={e=>setLocation(e.target.value)} required>
                  {jobLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="jobType">Job Type</label>
                <select onChange={e=>setJobCreateType(e.target.value)} required>
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
                    placeholder="Min Salary"
                    required
                    onChange={e=>setMinSalary(e.target.value)}
                    value={minSalary}
                  />
                  <input
                    type="number"
                    id="maxSalary"
                    name="maxSalary"
                    placeholder="Max Salary"
                    onChange={e=>setMaxSalary(e.target.value)}
                    value={maxSalary}
                    required
                  />
                </div>
              </div>
              <div className="create-job__thirdrow-second">
                <label htmlFor="deadline">Application Deadline</label>
                <input type="date" onChange={e=>setDeadline(e.target.value)} value={deadline} required />
              </div>
            </div>

            {/* 4th row */}
            <div className="create-job__fourthrow">
              <label htmlFor="description">Description</label>
              <textarea onChange={e=>setDescription(e.target.value)} value={description} required></textarea>
            </div>

            {/* 5th row */}
            <div className="create-job__fifthrow">
              <button type="button">Save Draft  <img src={assests.downarrow} alt="downarrow" /></button>
              <button type="submit">Publish  <img src={assests.rightarrow} alt="rightarrow" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateJobOpen
