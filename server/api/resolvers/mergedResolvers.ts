import { IResolvers } from "@graphql-tools/utils";
import { UserResolvers } from "./user-resolvers/user-resolver";
import { SocietyResolvers } from "./society-resolver/society-resolver";
import { customResolvers } from "./customResolver";
import { mergeResolvers } from "@graphql-tools/merge";


const mergedResolvers = [customResolvers, UserResolvers, SocietyResolvers];
export const resolvers: IResolvers = mergeResolvers(mergedResolvers);

