import {z} from "zod";

export const UsernameValidation = z
    .string()
    .min(3,"username must be at least 3 chars")
    .max(15, "Username cannot be more than 15 chars")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can not have special chars")

export const SignUpSchema = z.object({
    username: UsernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(4,{message: "Password must be at least 4 chars"}).max(10)
})