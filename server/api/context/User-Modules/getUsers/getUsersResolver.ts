import { User } from "../../../database/schemas/User.model";
import { AuthContext } from "../../../context/AuthContext";
import { checkIsLoggedIn } from "../../../middleware/loggedUser";
import {
  GetUsersResult,
  GraphqlError,
  UserData,
} from "../../../generated/generated__Types";

//get users resolver
export const users = async (
  _: undefined,
  __: undefined,
  ctx: AuthContext
): Promise<GetUsersResult | null> => {
  const users: UserData[] = await User.find({});
  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);
    const user = await User.findOne({
      _id: LoggedInUser?.userId,
    });

    if (
      user &&
      user.role === "ADMIN" &&
      user.verified === true &&
      ctx.req.headers.cookie &&
      users
    ) {
      return {
        users: users,
      };
    }
    return null;
  } catch (err) {
    throw err as GraphqlError;
  }
};
