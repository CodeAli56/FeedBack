import {z} from "zod"

export const MessageSchema = z.object({
    content: z.string().min(10, {message:"Content cannot be less than 10 chars"}).max(300, {message: "Content must be less than 300 chars"}),
    createdAt: z.date()
})