import { GetUsersResultDep, GetUsersResultSoc } from "../resolveTypes";
import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { LoginResult, CreateUserResult } from "./UserResolveTypes";
import { IResolvers } from "@graphql-tools/utils";

export const UserResolvers: IResolvers = {
  //QueryUser,
  //Query,
  LoginResult,
  CreateUserResult,
  Mutation,
  // DateCustom: dateScalar
  // Subscription,
};
