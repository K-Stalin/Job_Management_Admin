import React, { useContext } from 'react'
import { assests } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const JobCard = ({job}) => {
 const {showCreateJob} = useContext(AppContext) 


  return (
    <div className="jobCard" style={{opacity:showCreateJob ? '0.2' : null}}>
      <div className="company_logo">
        <div>
          <img src={job.image} width="105px" height="104px" alt="" />
        </div>
        <span>24h ago</span>
      </div>
      <h4 className="job-title">{job.title}</h4>

      <div className="job-data">
        <div>
          <img src={assests.experience} alt="" />
          <span>{job.level}</span>
        </div>
        <div>
          <img src={assests.onsite} alt="" />
          <span>{job.location}</span>
        </div>
        <div>
          <img src={assests.lpa} alt="" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: job.description }}
        className="description"
      ></div>
      <div className="applyBtn">
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default JobCard
  