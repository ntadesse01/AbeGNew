import {Router} from "express"
import serviceController from "./serviceController.js"

const serviceRouter = Router()

employeeRouter.post("/",serviceController.create)
employeeRouter.patch("/",serviceController.update)
employeeRouter.delete("/:id",serviceController.delete)
employeeRouter.get("/:id",serviceController.getSingle)
employeeRouter.get("/",serviceController.getAll)





export default serviceRouter

