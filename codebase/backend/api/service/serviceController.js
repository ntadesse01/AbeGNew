import serviceSchema from "./serviceSchema.js";
import prisma from "../../config/prismaClient.js";

const serviceController = {
  // Create a new service
  create: async (req, res, next) => {
    try {
      // Validate the request body against the schema
      const data = serviceSchema.create.parse(req.body);

      const newService = await prisma.commonServices.create({
        data: {
          serviceName: data.serviceName,
          serviceDescription: data.serviceDescription,
        },
      });

      // Respond with the created service details
      return res.status(201).json({
        success: true,
        message: "Service created successfully",
        data: newService,
      });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve all services
  getAll: async (req, res, next) => {
    try {
      // Fetch all services from the commonServices table
      const services = await prisma.commonServices.findMany();

      // Respond with the list of services
      return res.status(200).json({
        data: services,
        success: true,
        message: "Services fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve a single service by ID
  getSingle: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Fetch the service matching the provided ID
      const service = await prisma.commonServices.findUnique({
        where: { id: parseInt(id, 10) },
      });

      // Return 404 if the service is not found
      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      // Respond with the service details
      return res.status(200).json({
        data: service,
        success: true,
        message: "Service found",
      });
    } catch (error) {
      next(error);
    }
  },

  // Update an existing service
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = serviceSchema.update.parse(req.body);

      // Check if the service exists
      const serviceExists = await prisma.commonServices.findFirst({
        where: { id: +id },
      });

      if (!serviceExists) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      // Update the service in the database
      const updatedService = await prisma.commonServices.update({
        where: { id: parseInt(id, 10) },
        data: {
          serviceName: data.serviceName,
          serviceDescription: data.serviceDescription,
        },
      });

      // Respond with the updated service details
      return res.status(200).json({
        success: true,
        message: "Service updated successfully",
        data: updatedService,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete a service
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Check if the service exists before attempting to delete
      const service = await prisma.commonServices.findUnique({
        where: { id: parseInt(id, 10) },
      });

      if (!service) {
        // Respond with 404 if the service doesn't exist
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      // Delete the service by ID
      const deletedService = await prisma.commonServices.delete({
        where: { id: parseInt(id, 10) },
      });

      // Respond with a success message
      return res.status(200).json({
        success: true,
        message: "Service deleted successfully",
        data: deletedService,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default serviceController;
