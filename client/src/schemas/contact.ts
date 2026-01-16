import { z } from "zod";

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  projectName: z.string().min(1, "Project name is required"),
  ecosystem: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  contactInfo: z.string().min(1, "Contact info is required"),
});
