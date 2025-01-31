import {Router} from "express"
import orderController from "./orderController.js"


const orderRouter = Router()

orderRouter.post("/",orderController.create)
orderRouter.patch("/",orderController.update)
orderRouter.delete("/:id",orderController.delete)
orderRouter.get("/:id",orderController.getSingle)
orderRouter.get("/",orderController.getAll)








export default orderRouter

