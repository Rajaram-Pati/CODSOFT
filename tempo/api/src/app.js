import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({
    origin : ["http://localhost:5173"],
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes

import userRouter from '../router/user.routes.js'

//routes controller

app.use('/api/v1/users' , userRouter)

//http:localhost:8000/api/v1/users/register

export default app