import {z} from "zod";


export const SignInSchema = z.object({
    identifier: z.string().email({message:"Invalid email address"}),
    password: z.string().min(4,{message: "Password must be at least 4 chars"}).max(10,{message:"Password cannot be more than 10 chars"})
})