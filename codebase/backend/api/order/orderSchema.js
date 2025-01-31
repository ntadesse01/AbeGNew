import { z } from "zod";
//order creation

const orderSchema = {
  create: z.object({
    employeeId: z.string({ message: "Employee ID is required" }), 
    customerId:z.string({message:"customer ID is required"}),
    vehicleId:z.string({message:"Vehicle ID is required"}),
    activeOrder:z.string({message:"active order status required"}),
  }),
  update:z.object({
    employeeId: z.string({ message: "Employee ID is required" }), 
    customerId:z.string({message:"customer ID is required"}),
    vehicleId:z.string({message:"Vehicle ID is required"}),
    activeOrder:z.string({message:"active order status required"}),
  }),
  orderInfo:z.object({
    orderId:z.string({message:"order ID is required"}),
    additionalRequest: z.string().optional(),
    notesForInternalUse: z.string().optional(),
    notesForCustomer: z.string().optional(),
    additionalRequestsCompleted: z.number().optional(),
  }),
  orderService:z.object({
orderId:z.string({message:"order is required"}),
serviceId:z.number({message:"service is required"})
.min(0,{message:"service completion status must be greater than or equal to 0 "})

  }),
  orderStatus:z.object({
    orderId:z.string({message:"order ID is required"}),
    orderStatus:z
    .number({message:"order status is required"})
    .min(0,{message:"order status must be a valid status number"}),
  }),
};

export default orderSchema
 