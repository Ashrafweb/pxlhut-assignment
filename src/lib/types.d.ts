import { z } from "zod";
import { accountSchema, addressSchema, personalInfoSchema } from "./zodSchema";

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type AddressDetails = z.infer<typeof addressSchema>;
export type AccountSetup = z.infer<typeof accountSchema>;

export type FormData = PersonalInfo & AddressDetails & AccountSetup;
