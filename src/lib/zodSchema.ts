import { z } from "zod";

export const personalInfoSchema = z.object({
	fullName: z.string().nonempty("Full Name is required"),
	email: z.string().nonempty("Email is required").email("Invalid email format"),
	phone: z
		.string()
		.nonempty("Phone is required")
		.min(10, "Phone number must be at least 10 digits")
		.regex(/^\d+$/, "Phone number must be numeric"),
});

export const addressSchema = z.object({
	street: z.string().nonempty("Street Address is required"),
	city: z.string().nonempty("City is required"),
	zip: z.string().regex(/^\d{5,}$/, "Zip must be at least 5 digits"),
});

export const accountSchema = z
	.object({
		username: z.string().min(4, "Username must be at least 4 characters"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords must match",
	});

export const fullFormSchema = personalInfoSchema
	.merge(addressSchema)
	.merge(accountSchema._def.schema);

export type FullFormSchema = z.infer<typeof fullFormSchema>;
