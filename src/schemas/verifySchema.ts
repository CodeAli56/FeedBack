import {z} from "zod"

export const VerifySchema = z.string().length(6,{message: "Verification code must be of 6 digits"})
