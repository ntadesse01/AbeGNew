import { number } from "zod";
import orderSchema from "./orderSchema.js";
import prisma from "../../config/prismaClient.js";
// import { v4 as uuidv4 } from "uuid";

const orderController = {
    // Create a new order
    create: async (req, res, next) => {
        try {
            // Validate request data
            const data = orderSchema.create.parse(req.body);

            // Create the order in the database
            const newOrder = await prisma.order.create({
                data: {
                    employeeId: data.employeeId,
                    customerId: data.customerId,
                    vehicleId: data.vehicleId,
                    activeOrder: data.activeOrder,
                    orderHash: data.orderHash,
                    orderInfo: {
                        create: {
                            orderTotalPrice: data.orderInfo.orderTotalPrice,
                            estimatedCompletionDate: data.orderInfo.orderTotalPrice,
                            additionalRequest: data.orderInfo.additionalRequest,
                            notesForInternalUse: data.orderInfo.notesForInternalUse,
                            notesForCustomer: data.orderInfo.notesForCustomer,
                            additionalRequestsCompleted: data.orderInfo.additionalRequestsCompleted,
                        },
                    },
                    orderService: {
                        create: data.orderServices.map((service) => ({
                            serviceId: service.serviceId,
                            serviceCompleted: service.serviceCompleted,
                        })),
                    },
                    orderStatus: {
                        create: {
                            orderStatus: data.orderStatus,
                        },
                    },
                },
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
                            additionalRequestsCompleted: data.orderInfo.additionalRequestsCompleted,
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
