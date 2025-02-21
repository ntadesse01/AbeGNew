import {Router} from "express"
import serviceController from "./serviceController.js"

const serviceRouter = Router()

serviceRouter.post("/",serviceController.create)
serviceRouter.patch("/",serviceController.update)
serviceRouter.delete("/:id",serviceController.delete)
serviceRouter.get("/:id",serviceController.getSingle)
serviceRouter.get("/",serviceController.getAll)





export default serviceRouter

