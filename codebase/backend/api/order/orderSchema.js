import { z } from "zod";

// Order creation schema
const orderSchema = {
  // Schema for creating an order
  create: z.object({
    employeeId: z.number().min(1, { message: "Employee ID is required" }),
    customerId: z.number().min(1, { message: "Customer ID is required" }),
    vehicleId: z.number().min(1, { message: "Vehicle ID is required" }),
    activeOrder: z.number().min(0, { message: "Active order status is required" }),
    orderInfo: z.object({
      orderTotalPrice: z.number().min(0, { message: "Invalid total price" }),
      estimatedCompletionDate: z.string().nonempty({ message: "Invalid estimated date" }),
      completionDate: z.string().nonempty({ message: "Invalid completion date" }),
      additionalRequest: z.string().optional(),
      notesForInternalUse: z.string().optional(),
      notesForCustomer: z.string().optional(),
      additionalRequestsCompleted: z.number().min(0, { message: "Invalid request" }).optional(),
    }),
    orderService: z.array(
      z.object({
        serviceId: z.number().min(1, { message: "Service ID is required" }),
        serviceCompleted: z.number().min(0, { message: "Invalid service completion status" }),
      })
    ),
    orderStatus: z.object({
      orderStatus: z.number().min(0, { message: "Order status must be a valid status number" }),
    }),
  }),

  // Schema for updating an order
  update: z.object({
    employeeId: z.number().min(1, { message: "Employee ID is required" }),
    customerId: z.number().min(1, { message: "Customer ID is required" }),
    vehicleId: z.number().min(1, { message: "Vehicle ID is required" }),
    activeOrder: z.number().min(0, { message: "Active order status is required" }),
  }),

  // Schema for order information
  orderInfo: z.object({
    orderId: z.string().nonempty({ message: "Order ID is required" }),
    additionalRequest: z.string().optional(),
    notesForInternalUse: z.string().optional(),
    notesForCustomer: z.string().optional(),
    additionalRequestsCompleted: z.number().min(0).optional(),
  }),

  // Schema for order service
  orderService: z.object({
    orderId: z.string().nonempty({ message: "Order ID is required" }),
    serviceId: z.number().min(1, { message: "Service ID is required" }),
  }),

  // Schema for order status
  orderStatus: z.object({
    orderId: z.string().nonempty({ message: "Order ID is required" }),
    orderStatus: z.number().min(0, { message: "Order status must be a valid status number" }),
  }),
};

export default orderSchema;
