import {Router} from "express"

const appRouter = Router()

import employeeRouter from "../api/employee/employeeRouter.js"
import customerRouter from "../api/customer/customerRouter.js"
import orderRouter from "../api/order/orderRouter.js"
import vehicleRouter from "../api/vehicle/vehicleRouter.js"
import serviceRouter from "../api/service/serviceRouter.js"
import { isAuth } from "../middleware/authMiddleware.js"
import employeeController from "../api/employee/employeeController.js"
import { exceptionHandler } from "../middleware/exceptionHandler.js"

employeeRouter.post("/login",exceptionHandler(employeeController.login))
appRouter.use("/employee",isAuth, employeeRouter)
appRouter.use("/customer",isAuth,customerRouter)
appRouter.use("/order",isAuth,orderRouter)
appRouter.use("/vehicle",isAuth,vehicleRouter)
appRouter.use("/service",isAuth,serviceRouter)





export default appRouter

