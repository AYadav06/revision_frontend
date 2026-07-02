import * as z from "zod"

export const userSchema= z.object({
 name : z.string().min(3,"name must be atleast 3 character"),
 email: z.email("Please enter a valid email"),
 password: z.string().min(6,"Password must be atleast 8 character"),
 confirmPassword: z.string()
}).refine((data)=>data.password  == data.confirmPassword,{
    message:"Password do not match",
    path:["confirmPassword"]
});