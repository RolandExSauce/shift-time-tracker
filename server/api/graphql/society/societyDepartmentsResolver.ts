import { AuthContext } from "../../context/AuthContext";
import { prisma } from "../../database/prisma/db-client";
import { SOCIETY_NAME } from "../../env/UseValidatedEnv";
import {
    Department,
    GetDepartmentsResult,
  GraphqlError,
} from "../../generated/generated__Types";
import { checkIsLoggedIn } from "../../middleware/loggedUser";

//get all users in the society
export const GETDepartmentsSOC = async (
  _: undefined,
  args: undefined,
  ctx: AuthContext
): Promise<GetDepartmentsResult | null> => {
  const soc = await prisma.society.findFirst({
    where: {
      societyName: SOCIETY_NAME,
    },

    include: {
      societyDepartments: true,
    },
  });

  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);
    const user = await prisma.user.findFirst({
      where: {
        id: LoggedInUser?.userId,
      },
    });

    //only admins can query for all departments
    if (
      user &&
      user.employeeRole === "ADMIN" &&
      ctx.req.headers.cookie &&
      soc
    ) {
      return {
        departments: soc?.societyDepartments as Array<Department>,
      };
    }
    return null;
  } catch (err) {
    throw err as GraphqlError;
  }
};
