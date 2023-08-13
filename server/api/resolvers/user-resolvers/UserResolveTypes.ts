import { CreateUserInput } from "../../generated/generated__Types";
import { Scalars } from "../../generated/generated__Types";

export const LoginResult = {
  __resolveType: (obj: {
    user: CreateUserInput;
    errorMessage: Scalars["String"];
  }): "GraphqlError" | "LoginResponse" | null => {
    if (obj.user) {
      return "LoginResponse";
    }
    if (obj.errorMessage) {
      return "GraphqlError";
    }
    return null;
  },
};

export const CreateUserResult = {
  __resolveType: (obj: {
    personalNumber: Scalars["String"];
    errorMessage: Scalars["String"];
  }): "GraphqlError" | "User" | undefined => {
    if (obj.personalNumber) {
      return "User";
    }
    if (obj.errorMessage) {
      return "GraphqlError";
    }
    return undefined;
  },
};
