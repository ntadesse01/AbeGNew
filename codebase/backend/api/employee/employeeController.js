import employeeSchema from "./employeeSchema.js";
import prisma from "../../config/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../../config/secret.js";

const employeeController = {
  create: async (req, res, next) => {
    // Validate the request body using the schema
    const data = employeeSchema.create.parse(req.body);

    // Check if the email is already in use
    const isEmailExist = await prisma.employee.findFirst({
      where: {
        email: data.email,
      },
    });
    if (isEmailExist) {
      return res.status(403).json({
        success: false,
        message: "Email is already in use",
      });
    }
    //Check if the phone number is already in use
    const isPhoneExist = await prisma.employeeInfo.findFirst({
      where: {
        phone: data.phone,
      },
    });
    if (isPhoneExist) {
      return res.status(403).json({
        success: false,
        message: "phone number is already in use",
      });
    }
    // Verify that the company role ID exists
    const isCompanyRoleIdExist = await prisma.companyRole.findFirst({
      where: {
        id: data.companyRoleId,
      },
    });
    if (!isCompanyRoleIdExist) {
      return res.status(403).json({
        success: false,
        message: "company role doesn't exist",
      });
    }

    //  Hash the employee password securely
    const employeePasswordHashed = await bcrypt.hashSync(data.password, 10);

    //Create a new employee in the database

    const newEmployee = await prisma.employee.create({
      data: {
        activeStatus: data.activeStatus,
        email: data.email,
        employInfo: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
          },
        },
        employeePassword: {
          create: {
            employeePasswordHashed,
          },
        },
        employeeRole: {
          create: {
            companyRoleId: data.companyRoleId,
          },
        },
      },
    });
    //  Respond with success
    return res.status(200).json({
      success: true,
      message: "employee created successfully",
      data: newEmployee,
    });
  },
  //Retrieve details of a single employee by ID.
  getAll: async (req, res, next) => {
    try {
      const employees = await prisma.employee.findMany({
        include: {
          //featch associated employeinfo,employeerole,and exclude sensitive info
          employInfo: true,
          employeeRole: true,
          employeePassword: false,
        },
      });

      return res.status(200).json({
        success: true,
        data: employees,
      });
    } catch (error) {
      next(error);
    }
  },
  //  Retrieve details of a single employee by ID.
  getSingle: async (req, res, next) => {
    try {
      const { id } = req.params;

      const employee = await prisma.employee.findUnique({
        where: { id: parseInt(id, 10) },
        include: {
          employInfo: true,
          employeeRole: true,
        },
      });
      if (!employee) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }
      return res.status(200).json({
        success: true,
        data: employee,
      });
    } catch (error) {
      next(error);
    }
  },

  // Update an existing employee's information.

  update: async (req, res, next) => {
    try {
      const { id } = req.parasm;
      const data = employeeSchema.update.parse(req.body);
      const updatedEmployee = await prisma.employee.update({
        where: { id: parseInt(id, 10) },
        data: {
          email: data.email,
          activeStatus: data.activeStatus,
          employInfo: {
            update: {
              firstName: data.firstName,
              lastName: data.lastName,
              phone: data.phone,
            },
          },
          employeeRole: {
            update: {
              companyRoleId: data.companyRoleId,
            },
          },
        },
      });
      return res.status(200).json({
        success: true,
        message: "Employee updated successfully",
        data: updatedEmployee,
      });
    } catch (error) {
      next(error);
    }
  },
  // Delete an employee and all related information.
  delete: async (req, res, next) => {
    try {
      const employeeID = parseInt(req.params.id);
      const employee = await prisma.employee.findUnique({
        where: { id: employeeID },
      });
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      // Start a transaction to delete the employee and related information
      await prisma.$transaction([
        // Delete orders associated with the employee

        prisma.order.deleteMany({
          where: { employeeId: employeeID },
        }),

        // Delete employee's information

        prisma.employeeInfo.delete({
          where: { employeeId: employeeID },
        }),

        // Delete employee's password

        prisma.employeePassword.delete({
          where: { employeeId: employeeID },
        }),

        // Delete employee's role

        prisma.employeeRole.delete({
          where: { employeeId: employeeID },
        }),

        // Finally, delete the employee

        prisma.employee.delete({
          where: { id: employeeID },
        }),
      ]);

      return res.status(200).json({
        message: "Employee and related information deleted successfully",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while deleting the employee" });
    }
  },
  // Change an employee's password
  changePassword: async (req, res, next) => {
    const { employeeID, oldPassword, newPassword, confirmPassword } = req.body;
    const data = employeeSchema.changePassword.parse(req.body);

    if (data.newPassword !== data.confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "New Password and confirm password dont match",
      });
    }
    const employeePassword = await prisma.employeePassword.findUnique({
      where: { employeeId: parseInt(employeeID, 10) },
    });
    if (!employeePassword || oldPassword !== employeePassword.password) {
      return res.status(403).json({
        success: false,
        message: "Old password is incorrect",
      });
    }
    await prisma.employeePassword.update({
      where: { employeeId: parseInt(employeeID, 10) },
      data: { password: newPassword },
    });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  },
  login: async (req, res, next) => {
    // Validate the request body using the schema
    const data = employeeSchema.login.parse(req.body);
    // Check if the email is already in use
    const isEmailExist = await prisma.employee.findFirst({
      where: {
        email: data.email,
      },
      include: {
        employeePassword: true,
        employInfo:true
      },
    });
    if (!isEmailExist) {
      return res.status(403).json({
        success: false,
        message: "No account exists in this email account",
      });
    }

    //check password is exist
    const isPasswordMatch = bcrypt.compareSync(
      data.password,
      isEmailExist.employeePassword.employeePasswordHashed
    );
    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "password is not correct",
      });
    }
    //prepare payload
    const payload = {
      firstName:isEmailExist.employInfo.firstName,
      email:isEmailExist.email,
    }
    const token = jwt.sign(payload,JWT_SECRET,{expiresIn:"24hr"})
    return res.status(200).json({
      success:true,
      message:"login successfully",
      data:{token,employee:isEmailExist}
    })
  },
};

export default employeeController;
