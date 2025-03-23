import express from 'express'
import { getCompanyPostedJobs, postJob } from '../controllers/companyController.js'

const  CompanyRouter = express.Router()


// Get  Company posted jobs
CompanyRouter.get("/list-jobs", getCompanyPostedJobs);

// post  a new job
CompanyRouter.post("/post-job", postJob);



export default CompanyRouter;
