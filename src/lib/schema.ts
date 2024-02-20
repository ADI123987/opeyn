import { z } from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";

export const NewsletterFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
});

export const ContactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email.").min(1, "Email is required."),
  message: z.string().min(6, "Message must be at least 6 characters."),
});

export const QuotationFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email.").min(1, "Email is required."),
  phone: z.union([z.string().refine(isMobilePhone).optional(), z.literal("")]),
  website: z.union([
    z.string().url("The URL must start with http:// or https://"),
    z.literal(""),
  ]),
  service: z.union([z.string().optional(), z.literal("")]),
  message: z.string(),
});

export const SearchFormSchema = z.object({
  query: z.string().optional(),
});
