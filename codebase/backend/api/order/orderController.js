import { number } from "zod";
import orderSchema from "./orderSchema.js";
import prisma from "../../config/prismaClient.js";
import { v4 as uuidv4 } from "uuid";

const orderController = {
  // Create a new order
  create: async (req, res, next) => {
    try {
      // Validate request data
      const data = orderSchema.create.parse(req.body);
      // check if employee is exist
      const employeeExist = await prisma.employee.findFirst({
        where: { id: +data.employeeId },
      });
      if (!employeeExist) {
        return res.status(404).json({
          success: false,
          message: "employee not found",
        });
      }
      //check if customer is exist
      const customerExist = await prisma.customerIdentifier.findFirst({
        where: {id:+data.customerId},
      })
      if(!customerExist){
        return res.status(404).json({
            success:false,
            message:"customer not found"
        });
      }

      //check if vehicle is exist 
      const vehicleExist = await prisma.customerVehicleInfo.findFirst({
        where:{id:+data.vehicleId},
      })
      if(!vehicleExist){
        return res.status(404).json({
            success:false,
            message:"vehicle is not found",
        });
      }

      //check if each services exists 

      data.orderService.forEach(async (i)=>{
        //is service exists
        const isServicesExists = await prisma.commonServices.findFirst({
            where:{id:+i.serviceId},
        })
        if(!isServicesExists){
            return res.status(404).json({
                success: false,
                message: "order service is not found",
            })
        }
      })
      data.orderHash = uuidv4()
      // Create the order in the database
      const newOrder = await prisma.order.create({
        data: {
          orderHash: data.orderHash,
          customerId: +data.customerId,
          employeeId: +data.employeeId,
          vehicleId: data.vehicleId,
          activeOrder: data.activeOrder,
          orderInfo: {
            create: {
              orderTotalPrice: data.orderInfo.orderTotalPrice,
              additionalRequest: data.orderInfo.additionalRequest,
              additionalRequestsCompleted: data.orderInfo.additionalRequestsCompleted,
              notesForCustomer: data.orderInfo.notesForCustomer,
              completionDate: data.orderInfo.completionDate,
              estimatedCompletionDate: data.orderInfo.estimatedCompletionDate,
              notesForInternalUse: data.orderInfo.notesForInternalUse,
            }
          },
          orderService: {
            create: data.orderService.map(service => ({
              serviceId: service.serviceId,
              serviceCompleted: service.serviceCompleted
            }))
          },
          orderStatus: {
            create: {
              orderStatus: data.orderStatus.orderStatus
            }
          }
        }
      });
      
      // const orderHash = uuidv4();

      // Respond with the newly created order
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  },

  // Get all orders
  getAll: async (req, res, next) => {
    try {
      const orders = await prisma.order.findMany({
        include: {
          orderInfo: true,
          orderService: true,
          orderStatus: true,
          employee: true,
          customerIdentifier: true,
          customerVehicleInfo: true,
        },
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  },

  // Get a single order by ID
  getSingle: async (req, res, next) => {
    try {
      const { orderId } = req.params;
      const order = await prisma.order.findFirst({
        where: { id: Number(orderId) },
        include: {
          orderInfo: true,
          orderService: true,
          orderStatus: true,
          employee: true,
          customerIdentifier: true,
          customerVehicleInfo: true,
        },
      });
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  },

  // Update an order by ID
  update: async (req, res, next) => {
    try {
      const { orderId } = req.params;

      // Validate the request data
      const data = orderSchema.update.parse(req.body);

      // Update the order in the database
      const updatedOrder = await prisma.order.update({
        where: { id: Number(orderId) },
        data: {
          employeeId: data.employeeId,
          customerId: data.customerId,
          vehicleId: data.vehicleId,
          activeOrder: data.activeOrder,
          orderHash: data.orderHash,
          orderInfo: {
            update: {
              orderTotalPrice: data.orderInfo.orderTotalPrice,
              estimatedCompletionDate: data.orderInfo.estimatedCompletionDate,
              notesForInternalUse: data.orderInfo.notesForInternalUse,
              notesForCustomer: data.orderInfo.notesForCustomer,
              additionalRequestsCompleted:
                data.orderInfo.additionalRequestsCompleted,
            },
          },
          orderService: {
            updateMany: data.orderService.map((service) => ({
              where: { id: service.id },
              data: { serviceCompleted: service.serviceCompleted },
            })),
          },
          orderStatus: {
            update: {
              orderStatus: data.orderStatus,
            },
          },
        },
      });

      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  },

  // Delete an order by ID
  delete: async (req, res, next) => {
    try {
      const { orderId } = req.params;

      // Delete the order from the database
      const deletedOrder = await prisma.order.delete({
        where: { id: Number(orderId) },
      });

      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
};

export default orderController;
