import React from 'react'
import { jobLocations, jobType } from '../assets/assets'


const CreateJobOpen = () => {
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
                <input type="text" id="jobTitle" name="jobTitle" required />
              </div>
              <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="create-job__secondrow">
              <div>
                <label htmlFor="location">Location</label>
                <select id="location" name="location" required>
                  {jobLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="jobType">Job Type</label>
                <select id="jobType" name="jobType" required>
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
                  />
                  <input
                    type="number"
                    id="maxSalary"
                    name="maxSalary"
                    placeholder="Max Salary"
                    required
                  />
                </div>
              </div>
              <div className="create-job__thirdrow-second">
                <label htmlFor="deadline">Application Deadline</label>
                <input type="date" id="deadline" name="deadline" required />
              </div>
            </div>

            {/* 4th row */}
            <div className="create-job__fourthrow">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" required></textarea>
            </div>

            {/* 5th row */}
            <div className="create-job__fifthrow">
              <button type="button">Save Draft</button>
              <button type="submit">Publish</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateJobOpen
