import { z } from "zod";

export const UserSchema = z.object({
  email: z
    .string()
    .email("The email is invalid")
    .min(1, "The email is required"),
  password: z
    .string()
    .min(1, "The password is required")
    .min(6, "The password should have at least 6 characters"),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
