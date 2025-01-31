import z, { optional } from "zod"

const employeeSchema = {
    create:z.object({
        email:z.string().email({message:"Invalid Email"}),
        firstName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"}),
        lastName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"}),
        phone:z.string()
        .min(9,{message:"Phone number must be at least 9 characters long"})
        .max(10,{message:"Phone number must be no more than 10 characters long"}),
        activeStatus:z.number({message:"msg"}),
        password:z.string()
        .min(6,{message:"Password must be at least 6 characters long"})
        .max(15,{message:"Password must be no more than 15 characters long"}),
        companyRoleId:z.number(),

    }),

    update:z.object({
        email:z.string().email({message:"Invalid Email"}).optional(),
        firstName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"}).optional(),
        lastName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"}).optional(),
        phone:z.string()
        .min(9,{message:"Phone number must be at least 9 characters long" })
        .max(10,{message:"Phone number must be no more than 10 characters long" }).optional(),
        activeStatus:z.number({message:"msg"}).optional(),
        
    }),
    changePassword:z.object({
        oldPassword:z.string()
        .min(6,{message:"Current password must be at least 6 characters long."})
        .max(15,{message:"Current password must be no more than 15 characters long."}),
        newPassword:z.string()
        .min(6,{message:"New password must be at least 6 characters long." })
        .max(15,{message:"New password must be no more than 15 characters long." }),
        confirmPassword:z.string()
        .min(6,{message:"Confirm new password must be at least 6 characters long."})
        .max(15,{message: "Confirm new password must be no more than 15 characters long."}),
    }),

}

export default employeeSchema


 
 