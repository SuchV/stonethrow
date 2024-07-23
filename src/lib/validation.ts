import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]{1,15}$/,
    "Username must be 1-15 characters and contain only letters, numbers, and underscores",
  ),
  password: requiredString.regex(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Password must be at least 8 characters and contain at least one letter and one number",
  ),
});

export type SignUpvalues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;
