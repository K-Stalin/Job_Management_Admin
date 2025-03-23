import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    companyName: { type: String, required: true },
    jobcreateType: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    applicationDeadLine: { type: Date, required: true },
  },
  { timestamps: true }
);  


const Job = mongoose.model('jobSchema',jobSchema)

export default Job;