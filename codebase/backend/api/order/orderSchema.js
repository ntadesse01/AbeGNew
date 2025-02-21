import { z } from "zod";
//order creation

const orderSchema = {
  create: z.object({
    employeeId: z.number({ message: "Employee ID is required" }),
    customerId: z.number({ message: "customer ID is required" }),
    vehicleId: z.number({ message: "Vehicle ID is required" }),
    activeOrder: z.number({ message: "active order status required" }),
    orderInfo: z.object({
      orderTotalPrice: z.number({ message: "invalid total price" }),
      estimatedCompletionDate: z.string({ message: "invalid estimated date" }),
      completionDate: z.string({ message: "invalid completion date" }),
      additionalRequest: z.string({ message: "invalid request" }),
      notesForInternalUse: z.string({ message: "invalid note" }),
      notesForCustomer: z.string({ message: "invalid customer note" }),
      additionalRequestsCompleted: z.number({ message: "invalid request" }),
    }),
    orderService:z.array(
      z.object({
        serviceId:z.number({ message: "service is required" }).min(0, {
          message:
            "service completion status must be greater than or equal to 0 ",
        }),
        serviceCompleted: z.number({ message: "invalid service number" }),
      }),
    ),

    orderStatus: z.object({
      orderStatus: z
        .number({ message: "order status is required" })
        .min(0, { message: "order status must be a valid status number" }),
    }),
  }),


  update: z.object({
    employeeId: z.string({ message: "Employee ID is required" }),
    customerId: z.string({ message: "customer ID is required" }),
    vehicleId: z.string({ message: "Vehicle ID is required" }),
    activeOrder: z.string({ message: "active order status required" }),
  }),
  orderInfo: z.object({
    orderId: z.string({ message: "order ID is required" }),
    additionalRequest: z.string().optional(),
    notesForInternalUse: z.string().optional(),
    notesForCustomer: z.string().optional(),
    additionalRequestsCompleted: z.number().optional(),
  }),
  orderService: z.object({
    orderId: z.string({ message: "order is required" }),
    serviceId: z.number({ message: "service is required" }).min(0, {
      message: "service completion status must be greater than or equal to 0 ",
    }),
  }),
  orderStatus: z.object({
    orderId: z.string({ message: "order ID is required" }),
    orderStatus: z
      .number({ message: "order status is required" })
      .min(0, { message: "order status must be a valid status number" }),
  }),
};

export default orderSchema;
