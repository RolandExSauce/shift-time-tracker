import { AuthenticationError } from "apollo-server-core";
import { AuthContext } from "../../../context/AuthContext";
import errorHandler from "../../../controllers/error.controller";
import { User } from "../../../database/schemas/User.model";
import { checkIsLoggedIn } from "../../../middleware/loggedUser";
import { UserData } from "../../../generated/generated__Types";

//current user
export const getCurrentUser = async (
  parent: undefined,
  args: undefined,
  ctx: AuthContext
): Promise<UserData | undefined> => {
  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);
    const user = await User.findOne({
      _id: LoggedInUser?.userId,
    });

    if (ctx.req.headers.cookie && LoggedInUser) {
      return {
        id: user?.id,
        ...user?._doc,
      };
    } else {
      throw new AuthenticationError("You are not logged in");
    }
  } catch (error) {
    errorHandler(error);
  }
};
