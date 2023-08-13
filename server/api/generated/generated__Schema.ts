import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../resolvers/mergedResolvers";
import { SCHEMA_PATH } from "../env/UseValidatedEnv";
import { GraphQLSchema } from "graphql";

//look for graphql schema folders, then inside look for .graphql files and merge them
export const JOINED_SCHEMA_PATH = path.join(__dirname, SCHEMA_PATH);
const typesArray = loadFilesSync(JOINED_SCHEMA_PATH, {
  extensions: ["graphql"],
  recursive: true,
});
const typeDefs = mergeTypeDefs(typesArray);
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});