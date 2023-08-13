import { GetUsersResultSoc } from "./../../generated/generated__Types";
import { AuthContext } from "../../context/AuthContext";
import { prisma } from "../../database/prisma/db-client";
import { SOCIETY_NAME } from "../../env/UseValidatedEnv";
import { GraphqlError, User } from "../../generated/generated__Types";
import { checkIsLoggedIn } from "../../middleware/loggedUser";

//get all users in the society
export const GETUsersSOC = async (
  _: undefined,
  args: undefined,
  ctx: AuthContext
): Promise<GetUsersResultSoc | GraphqlError | undefined> => {
  const soc = await prisma.society.findFirst({
    where: {
      societyName: SOCIETY_NAME,
    },

    include: {
      allSocietyUsers: true,
    },
  });

  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);
    const user = await prisma.user.findFirst({
      where: {
        id: LoggedInUser?.userId,
      },
    });

    //only admins can query for all users
    if (
      user &&
      user.employeeRole === "ADMIN" &&
      ctx.req.headers.cookie &&
      soc
    ) {
      return {
        socUsers: soc?.allSocietyUsers as Array<User>,
      };
    }
  } catch (err) {
    throw err as GraphqlError;
  }
};
