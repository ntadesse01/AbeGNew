import {Router} from "express"
import employeeController from "./employeeController.js"

const employeeRouter = Router()

employeeRouter.post("/",employeeController.create)
employeeRouter.patch("/",employeeController.update)
employeeRouter.delete("/:id",employeeController.delete)
employeeRouter.get("/:id",employeeController.getSingle)
employeeRouter.get("/",employeeController.getAll)





export default employeeRouter

