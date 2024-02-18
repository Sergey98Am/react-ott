import {z} from 'zod';
import {isValidPhoneNumber} from 'react-phone-number-input';


export const supportSchema = z.object({
    firstName: z
      .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
      })
      .min(2, { message: "First name must be at least 2 characters." })
      .max(50, { message: "First name cannot exceed 50 characters." }),
    lastName: z
      .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
      })
      .min(2, { message: "First name must be at least 2 characters." })
      .max(50, { message: "First name cannot exceed 50 characters." }),
    email: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
    phone: z
      .string({ required_error: "Phone number is required" })
      .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    message: z
      .string({ required_error: "Message is required" })
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(160, {
        message: "Message must not be longer than 30 characters.",
      }),
    agreement: z.literal(true),
  });
