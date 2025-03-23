import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import CompanyRouter from "./routes/companyRoutes.js";


//Intialize Express
const app = express()

// connect to Database
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
 

// Routes

app.get("/",(req,res)=>{
   res.send('API')  
})

app.use("/api/company", CompanyRouter);


// PORT
const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// stalinkumanan
// bWac8aE91YNMCHu7