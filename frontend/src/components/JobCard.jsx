import React, { useContext } from 'react'
import { assests } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const JobCard = ({job}) => {
 const {showCreateJob} = useContext(AppContext) 



function timeAgo(timestamp) 
{
  const now = new Date();
  const createdAt = new Date(timestamp);
  const diffInSeconds = Math.floor((now - createdAt) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mon ago`;
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}yrs ago`;
}



  return (
    <div className="jobCard" style={{ opacity: showCreateJob ? "0.2" : null }}>
      <div className="company_logo">
        <div>
          <img src={assests.amazon} width="105px" height="104px" alt="" />
        </div>
        <span className='timeStamp'>{timeAgo(job.createdAt)}</span>
      </div>
      <h4 className="job-title">{job.title}</h4>

      <div className="job-data">
        <div>
          <img src={assests.experience} alt="" />
          <span>1-3yrs</span>
        </div>
        <div>
          <img src={assests.onsite} alt="" />
          <span>{job.location}</span>
        </div>
        <div>
          <img src={assests.lpa} alt="" />
          <span>
            {job.minSalary && job.maxSalary
              ? `${Math.round((Number(job.minSalary) * 12) / 100000)}-
               ${Math.round((Number(job.maxSalary) * 12) / 100000)} LPA`
              : "Salary Not Provided"}
          </span>
        </div>
      </div>

      <div
        // dangerouslySetInnerHTML={{ __html: job.description }}
        className="description"
      >
        <ul>
          <li>{job.description}</li>
        </ul>
      </div>
      <div className="applyBtn">
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default JobCard
  