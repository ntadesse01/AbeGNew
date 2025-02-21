import {Router} from "express"

const appRouter = Router()
import employeeRouter from "../api/employee/employeeRouter.js"
import customerRouter from "../api/customer/customerRouter.js"
import orderRouter from "../api/order/orderRouter.js"
import vehicleRouter from "../api/vehicle/vehicleRouter.js"
import serviceRouter from "../api/service/serviceRouter.js"


appRouter.use("/employee", employeeRouter)
appRouter.use("/customer",customerRouter)
appRouter.use("/order",orderRouter)
appRouter.use("/vehicle",vehicleRouter)
appRouter.use("/service",serviceRouter)





export default appRouter

