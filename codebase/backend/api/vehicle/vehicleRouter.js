import {Router} from "express"
import vehicleController from "./vehicleController.js"


const vehicleRouter = Router()

vehicleRouter.post("/",vehicleController.create)
vehicleRouter.patch("/:id",vehicleController.update)
vehicleRouter.delete("/:id",vehicleController.delete)
vehicleRouter.get("/:id",vehicleController.getSingle)
vehicleRouter.get("/",vehicleController.getAll)



export default vehicleRouter

