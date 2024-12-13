import "dotenv/config";
import {z} from "zod";

const environmentVariablesSchema = z.object({
  SPORTIFY_URL: z.string().min(1, {message: "Required"}),
  USER_EMAIL: z.string().min(1, {message: "Required"}),
  USER_PASSWORD: z.string().min(1, {message: "Required"}),
  CREDIT_CARD_NUMBER: z.string().min(1, {message: "Required"}),
  CREDIT_CARD_SECRET: z.string().min(1, {message: "Required"})
});

type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;

const environmentVariables = environmentVariablesSchema.parse({
    SPORTIFY_URL: process.env.SPORTIFY_URL,
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD,
    CREDIT_CARD_NUMBER: process.env.CREDIT_CARD_NUMBER,
    CREDIT_CARD_SECRET: process.env.CREDIT_CARD_SECRET
});

export default environmentVariables;

export type {EnvironmentVariables};
