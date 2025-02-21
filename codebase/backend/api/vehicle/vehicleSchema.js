import { z } from "zod";

const vehicleSchema = {
  create: z.object({
    customerId: z.number().min(1, { message: "Customer ID required" }),
    vehicleYear: z
      .number()
      .min(1800, { message: "Vehicle year must be at least 1800" })
      .max(new Date().getFullYear(), {
        message: "Vehicle year cannot be in the future",
      }),
    vehicleMake: z
      .string()
      .min(1, { message: "Vehicle make required" })
      .max(50, { message: "Vehicle make must be at most 50 characters long" }),
    vehicleModel: z
      .string()
      .min(1, { message: "Vehicle model required" })
      .max(50, { message: "Vehicle model must be at most 50 characters long" }),
    vehicleType: z
      .string()
      .min(1, { message: "Vehicle type required" })
      .max(50, { message: "Vehicle type must be at most 50 characters long" }),
    vehicleMileage: z
      .number()
      .min(0, { message: "Mileage must be a positive number" })
      .max(Number.MAX_SAFE_INTEGER, { 
        message: "Mileage must be a valid number",
      }),
    vehicleTag: z
      .string()
      .min(1, { message: "Vehicle tag required" })
      .max(20, { message: "Vehicle tag must be at most 20 characters long" }),
    vehicleSerial: z
      .string()
      .min(1, { message: "Vehicle serial required" })
      .max(50, {
        message: "Vehicle serial must be at most 50 characters long",
      }),
    vehicleColor: z
      .string()
      .min(1, { message: "Vehicle color required" })
      .max(50, { message: "Vehicle color must be at most 50 characters long" }),
  }),

  update: z.object({                                                                               
    customerId: z
      .number()
      .min(1, { message: "Customer ID required" })
      .optional(),
    vehicleYear: z
      .number()
      .min(1900, { message: "Vehicle year must be at least 1900" })
      .max(new Date().getFullYear(), {
        message: "Vehicle year cannot be in the future",
      })
      .optional(),
    vehicleMake: z
      .string()
      .min(1, { message: "Vehicle make required" })
      .max(50, { message: "Vehicle make must be at most 50 characters long" })
      .optional(),
    vehicleModel: z
      .string()
      .max(50, { message: "Vehicle color must be at           most 50 characters long" })
      .optional(),
  }),
};

export default vehicleSchema;
