import vehicleSchema from "./vehicleSchema.js";
import prisma from "../../config/prismaClient.js";


// Helper function to check if a record exists in the database

const vehicleController = {
  // Create a new vehicle
  create: async (req, res, next) => {
    try {
      // Validate the request body against the schema
      const data = vehicleSchema.create.parse(req.body);
      // Check if the customer exists with this customer id
      const customerExists = await prisma.customerIdentifier.findFirst({
        where: { id: +data.customerId },
      });
      if (!customerExists) {
        return res.status(404).json({
          success: false,
          message: "Customer is not found",
        });
      }

      // Create a new vehicle in the database
      const newVehicle = await prisma.customerVehicleInfo.create({
        data: {
          customerId: +data.customerId,
          vehicleYear: data.vehicleYear,
          vehicleMake: data.vehicleMake,
          vehicleModel: data.vehicleModel,
          vehicleType: data.vehicleType,
          vehicleMileage: data.vehicleMileage,
          vehicleTag: data.vehicleTag,
          vehicleSerial: data.vehicleSerial,
          vehicleColor: data.vehicleColor,
        },
      });

      // Respond with the created vehicle details
      return res.status(201).json({
        success: true,  // Corrected success flag
        message: "Vehicle created successfully",
        data: newVehicle,
      });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve all vehicles
  getAll: async (req, res, next) => {
    try {
      // Fetch all vehicles from the database
      const vehicles = await prisma.customerVehicleInfo.findMany();

      // Respond with the list of vehicles
      return res.status(200).json({
        data: vehicles,
        success: true,
        message: "Vehicles fetched successfully",  // Corrected message
      });
    } catch (error) {
      next(error);
    }
  },

  // Retrieve a single vehicle by ID
  getSingle: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Fetch the vehicle matching the provided ID
      const vehicle = await prisma.customerVehicleInfo.findFirst({
        where: { id: parseInt(id, 10) },
      });

      // Return 404 if the vehicle is not found
      if (!vehicle) {
        return res.status(404).json({
          success: false,
          message: "Vehicle not found",
        });
      }

      // Respond with the vehicle details
      return res.status(200).json({
        data: vehicle,
        success: true,
        message: "Vehicle found",  // Corrected message
      });
    } catch (error) {
      next(error);
    }
  },

  // Update an existing vehicle
  update: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Validate the request body against the schema
      const data = vehicleSchema.update.parse(req.body);

      const vehicleExists = await prisma.customerVehicleInfo.findFirst({
        where: { id: +id },
      });
      if (!vehicleExists) {
        return res.status(404).json({
          success: false,
          message: "Vehicle not found",
        });
      }
      // Check if the customer exists with this customer id
      const customerExists = await prisma.customerIdentifier.findFirst({
        where: { id: +data.customerId },  // Added type conversion
      });
      if (!customerExists) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
        });
      }
      // Update the vehicle in the database
      const updatedVehicle = await prisma.customerVehicleInfo.update({
        where: { id: parseInt(id, 10) },
        data: {
          customerId: +data.customerId,
          vehicleYear: data.vehicleYear,
          vehicleMake: data.vehicleMake,
          vehicleModel: data.vehicleModel,
          vehicleType: data.vehicleType,
          vehicleMileage: data.vehicleMileage,
          vehicleTag: data.vehicleTag,
          vehicleSerial: data.vehicleSerial,
          vehicleColor: data.vehicleColor,
        },
      });

      // Respond with the updated vehicle details
      return res.status(200).json({
        success: true,
        message: "Vehicle updated successfully",
        data: updatedVehicle,
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete a vehicle
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      // Check if the vehicle exists before attempting to delete
      const vehicle = await prisma.customerVehicleInfo.findUnique({
        where: { id: parseInt(id, 10) },
      });

      if (!vehicle) {
        // Respond with 404 if the vehicle doesn't exist
        return res.status(404).json({
          success: false,
          message: "Vehicle not found",
        });
      }

      // Delete the vehicle by ID
      const deletedVehicle = await prisma.customerVehicleInfo.delete({
        where: { id: parseInt(id, 10) },
      });

      // Respond with a success message
      return res.status(200).json({
        success: true,
        message: "Vehicle deleted successfully",
        data: deletedVehicle,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default vehicleController;
