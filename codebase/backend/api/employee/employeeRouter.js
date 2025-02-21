import {Router} from "express"
import employeeController from "./employeeController.js"
import { exceptionHandler } from "../../middleware/exceptionHandler.js"

const employeeRouter = Router()

employeeRouter.post("/",exceptionHandler(employeeController.create))
employeeRouter.patch("/",exceptionHandler(employeeController.update))
employeeRouter.delete("/:id",exceptionHandler(employeeController.delete))
employeeRouter.get("/:id",exceptionHandler(employeeController.getSingle))
employeeRouter.get("/",exceptionHandler(employeeController.getAll))





export default employeeRouter

