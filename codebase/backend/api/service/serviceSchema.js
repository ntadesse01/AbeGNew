import z from "zod";

const serviceSchema = {
  create: z.object({
    serviceName: z
      .string()
      .min(6, { message: "Service name must be at least 6 characters long" })
      .max(15, { message: "Service name must be no longer than 15 characters" }),
    serviceDescription: z
      .string()
      .min(10, { message: "Service description must be at least 10 characters long" })
      .max(100, { message: "Service description must be no longer than 100 characters" }),
  }),

  update: z.object({
    serviceName: z
      .string()
      .min(6, { message: "Service name must be at least 6 characters long" })
      .max(15, { message: "Service name must be no longer than 15 characters" })
      .optional(),
    serviceDescription: z
      .string()
      .min(10, { message: "Service description must be at least 10 characters long" })
      .max(100, { message: "Service description must be no longer than 100 characters" })
      .optional(),
  }),
};

export default serviceSchema;
