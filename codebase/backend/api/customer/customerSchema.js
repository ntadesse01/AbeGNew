import z, { ZodString } from "zod"

const customerSchema = {
    create:z.object({
        email:z.string().email({message:"Invalid Email"}),
        firstName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"}),
        lastName:z.string()
        .min(4,{message:"Last name must be at least 4 characters"})
        .max(15,{message:"Last name must be no longer than 15 characters"}),
        phone:z.string ()
        .min(10,{message:"Phone number must be at least 10 characters"})
        .max(15,{message:"Phone number must be no more than 15 characters"}),
        // customerHash:z.string(),
        customerStatus:z.number({message:"Invalid status"}),
        // customerAddedDate: z.string().optional(),

    }),

    update:z.object({
        email:z.string().email({message:"Invalid Email"}).optional(),
        firstName:z.string()
        .min(4,{message:"First name must be at least 4 characters"})
        .max(15,{message:"First name must be no longer than 15 characters"})
        .optional(),
        lastName:z.string()
        .min(4, { message: "Last name must be at least 4 characters" })
        .max(15, { message: "Last name must be no longer than 15 characters" })
        .optional(),
        phone:z.string()
        .min(10, { message: "Phone number must be at least 10 characters" })
        .max(15, { message: "Phone number must be no more than 15 characters" })
        .optional(),
        customerStatus: z.number().optional(),
         
    }),
     
};




export default customerSchema


 