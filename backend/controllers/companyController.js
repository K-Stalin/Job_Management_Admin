import Job from "../models/Job.js"


// post a new job
 const postJob = async (req,res)=>{
      
const {
  title,
  description,
  location,
  companyName,
  jobcreateType,
  minSalary,
  maxSalary,
  applicationDeadLine,
} = req.body;

try {
    
     if (
       !title ||
       !description ||
       !location ||
       !companyName ||
       !jobcreateType ||
       !minSalary ||
       !maxSalary ||
       !applicationDeadLine
     ) {
       return res.status(400).json({ message: "All the fields are required" });
     }

const job = new Job({
  title,
  description,
  location,
  companyName,
  jobcreateType,
  minSalary,
  maxSalary,
  applicationDeadLine: new Date(applicationDeadLine),
});

      await job.save()
   return res.json({ success: true, job });

  } catch (error) {
     console.error(error);
    return res.json({ success: false, message: error.message });
  }   

}


// Get Company Posted Jobs
const getCompanyPostedJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs
    res.status(200).json({success:true,jobs}); 
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export  { postJob , getCompanyPostedJobs }