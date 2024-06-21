import { userSchema } from "./userSchema";
import { productSchema } from "./productSchema";
import { mergeTypeDefs } from "@graphql-tools/merge";

export const typeDefs = mergeTypeDefs([productSchema, userSchema]);
