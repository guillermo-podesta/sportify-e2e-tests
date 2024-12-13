import "dotenv/config";
import {z} from "zod";

const environmentVariablesSchema = z.object({
  SPORTIFY_URL: z.string().min(1, {message: "Required"}),
  USER_EMAIL: z.string().min(1, {message: "Required"}),
  USER_PASSWORD: z.string().min(1, {message: "Required"})
});

type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;

const environmentVariables = environmentVariablesSchema.parse({
    SPORTIFY_URL: process.env.SPORTIFY_URL,
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASSWORD: process.env.USER_PASSWORD
});

export default environmentVariables;

export type {EnvironmentVariables};
