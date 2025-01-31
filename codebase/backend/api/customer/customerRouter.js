import {Router} from "express"
import customerController from "./customerController.js"

const customerRouter = Router()

customerRouter.post("/",customerController.create)
customerRouter.patch("/:id",customerController.update)
customerRouter.delete("/:id",customerController.delete)
customerRouter.get("/:id",customerController.getSingle)
customerRouter.get("/",customerController.getAll)








export default customerRouter

