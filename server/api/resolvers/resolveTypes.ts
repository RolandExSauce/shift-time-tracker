import { Department, Scalars, User } from "../generated/generated__Types";

//resolve type for users in society
export const GetUsersResultSoc = {
  __resolveType: (obj: {
    socUsers: Array<User>;
    errorMessage: Scalars["String"];
  }): "UsersSuccessSoc" | "GraphqlError" | null => {
    if (obj.socUsers) {
      return "UsersSuccessSoc";
    }

    if (obj.errorMessage) {
      return "GraphqlError";
    }
    return null;
  },
};

export const GetUsersResultDep = {
  __resolveType: (obj: {
    depUsers: Array<User>;
    errorMessage: Scalars["String"];
  }): "UsersSuccessDep" | "GraphqlError" | null => {
    if (obj.depUsers) {
      return "UsersSuccessDep";
    }

    if (obj.errorMessage) {
      return "GraphqlError";
    }
    return null;
  },
};

//resolve type for department
export const GetDepartmentsResult = {
  __resolveType: (obj: {
    departments: Array<Department>;
    errorMessage: Scalars["String"];
  }): "DepartmentsSuccessSoc" | "GraphqlError" | null => {
    if (obj.departments) {
      return "DepartmentsSuccessSoc";
    }
    if (obj.errorMessage) {
      return "GraphqlError";
    }
    return null;
  },
};
