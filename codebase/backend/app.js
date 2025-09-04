import express from "express"
import { PORT } from "./config/secret.js"
import appRouter from "./router/index.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json()),
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to our API.",
        data: {}
    })
})

app.use("/api",appRouter)

app.listen(PORT,(error)=>{
if (error){
    console.log(error)
}else{
    console.log(`server running on http://localhost:${PORT}`)
}
})