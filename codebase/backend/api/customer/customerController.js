// a customerController with CRUD operations for handling customer data
import prisma from "../../config/prismaClient.js";
import customerSchema from "./customerSchema.js";
import { v4 as uuidv4 } from "uuid";

const customerController = {
  create: async (req, res, next) => {
    try {
      // Parse and validate the incoming request body using Zod schema
      const data = customerSchema.create.parse(req.body);

      //check if email is already in use
      const emailExists = await prisma.customerIdentifier.findFirst({
        where: {
          email: data.email,
        },
      });
      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: "Email is already in use",
        });
      }
      //check if the phone number already exists
      const isPhoneExist = await prisma.customerIdentifier.findFirst({
        where: { phone: data.phone },
      });
      if (isPhoneExist) {
        return res.status(403).json({
          success: false,
          message: "Phone number already exists.",
        });
      }

      const customerHash = uuidv4();
      //create new customer
      const newCustomer = await prisma.customerIdentifier.create({
        data: {
          email: data.email,
          phone: data.phone,
          //uuid
          customerHash,
          customerInfo: {
            create: {
              firstName: data.firstName,
              lastName: data.lastName,
              customerStatus: data.customerStatus,
            },
          },

        },
      });
      return res.status(201).json({
        success: true,
        message: "Customer created successfully",
        data: newCustomer,
      });
    } catch (error) {
      next(error);
    }
  },
  // Retrieve all customers
  getAll: async (req, res, next) => {
    try {
      const customers = await prisma.customerIdentifier.findMany({
        include: {
          customerInfo: true,
        },
      });
      return res.status(200).json({
        success: true,
        data: customers,
      });
    } catch (error) {
      next(error);
    }
  },
  // Retrieve a single customer by ID
  getSingle: async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await prisma.customerIdentifier.findFirst({
        where: { id: parseInt(id) },
        include: {
          customerInfo: true,
          customerVehicleInfo: true,
          order: true,
        },
      });
      if (!customer) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: customer,
      });
    } catch (error) {
      next(error);
    }
  },
  // Update a customer's information
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = customerSchema.update.parse(req.body);

      // if customer is existed with this id

      const customerExisted = await prisma.customerIdentifier.findFirst({
        where:{ 
          id:+id
        },
      })
      if (!customerExisted){
        return res.status(404).json({
          success:false,
          message:"customer is not found"
        })
      }

      //check if email is already in use
      const emailExists = await prisma.customerIdentifier.findFirst({
        where: {
          email: data.email,
        },
      });
      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: "Email is already in use",
        });
      }
      //check if the phone number already exists
      const isPhoneExist = await prisma.customerIdentifier.findFirst({
        where: { phone: data.phone },
      });
      if (isPhoneExist) {
        return res.status(403).json({
          success: false,
          message: "Phone number already exists.",
        });
      }

      const updatedCustomer = await prisma.customerIdentifier.update({
        where: { id: parseInt(id) },
        data: {
          email: data.email,
          phone: data.phone,
          customerInfo: {
            update: {
              firstName: data.firstName,
              lastName: data.lastName,
              customerStatus: data.activeStatus,
            },
          },
        },
      });

      return res.status(200).json({
        success: true,
        message: "Customer updated successfully",
        data: updatedCustomer,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete a customer
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Check if the customer exists
      const customer = await prisma.customerIdentifier.findFirst({
        where: { id: parseInt(id) },
      });

      if (!customer) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
        });
      }
      await prisma.customerInfo.deleteMany({
        where: {customerId: parseInt(id)},
      });
      await prisma.customerVehicleInfo.deleteMany({
        where: {customerId: parseInt(id)},
      });
      await prisma.order.deleteMany({
        where: {customerId: parseInt(id)},
      });
      await prisma.customerIdentifier.deleteMany({
        where: { id: parseInt(id) },
      });

      return res.status(200).json({
        success: true,
        message: "Customer deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};

export default customerController;
