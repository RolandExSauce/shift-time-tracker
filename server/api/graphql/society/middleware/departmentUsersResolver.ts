import { Prisma } from "@prisma/client";
import { AuthContext } from "../../../context/AuthContext";
import { prisma } from "../../../database/prisma/db-client";
import { SOCIETY_NAME } from "../../../env/UseValidatedEnv";
import {
  GetUsersResultDep,
  GraphqlError,
  User,
} from "../../../generated/generated__Types";
import { checkIsLoggedIn } from "../../../middleware/loggedUser";
import { getUsersBasedOnDepartments } from "./getDepUsers";

// import { newUser } from './../../../context/User-Modules/subscriptions/createUserSubResolver';
export const GETUsersDEP = async (
  _: undefined,
  args: undefined,
  ctx: AuthContext
): Promise<GetUsersResultDep | GraphqlError | null> => {
  const socID = await prisma.society.findFirst({
    where: {
      societyName: SOCIETY_NAME,
    },
  });

  let filteredUsers: User[] = [];

  const USERS = await getUsersBasedOnDepartments(socID?.id as string);

  const usersIT = USERS[0].userDocs as User[];
  const usersHR = USERS[1].userDocs as User[];
  const usersVK = USERS[2].userDocs as User[];

  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);

    const user = await prisma.user.findFirst({
      where: {
        id: LoggedInUser?.userId,
      },
    });

    //only admins can query for users
    if (
      user &&
      user.employeeRole === "ADMIN" &&
      ctx.req.headers.cookie &&
      USERS
    ) {
      if (user.userDepartment === "IT") {
        return {
          depUsers: usersIT,
        };
      } else if (user.userDepartment === "HR") {
        return {
          depUsers: usersHR,
        };
      } else if (user.userDepartment === "VK") {
        return {
          depUsers: usersVK,
        };
      }
    }

    //normal users can only query for users in their own departments which must be users as well
    else if (user && user.employeeRole === "USER") {
      if (user.userDepartment === "IT") {
        filteredUsers = usersIT.filter(function (user: any) {
          return user.userDepartment === "IT" && user.employeeRole === "USER";
        });

        return {
          depUsers: filteredUsers,
        };
      } else if (user.userDepartment === "HR") {
        filteredUsers = usersHR.filter(function (user: any) {
          return user.userDepartment === "HR" && user.employeeRole === "USER";
        });

        return {
          depUsers: filteredUsers,
        };
      } else if (user.userDepartment === "VK") {
        filteredUsers = usersVK.filter(function (user: any) {
          return user.userDepartment === "VK" && user.employeeRole === "USER";
        });

        return {
          depUsers: filteredUsers,
        };
      }
    }

    return null;
  } catch (err) {
    throw err as GraphqlError;
  }
};
