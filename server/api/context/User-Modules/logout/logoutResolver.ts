import { AuthContext } from "../../../context/AuthContext";
// import redisClient from "../../../utils/connectRedis";
import { checkIsLoggedIn } from "../../../middleware/loggedUser";
import errorHandler from "../../../controllers/error.controller";

import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "../../Globals/tokens/cookieOptions";
import { Scalars } from "../../../generated/generated__Types";
import redisClient from "../../../database/connections/redis.connection";

//Logout resolver
export const logoutUser = async (
  parent: undefined,
  args: undefined,
  ctx: AuthContext
): Promise<Scalars["Boolean"] | undefined> => {
  try {
    const LoggedInUser = await checkIsLoggedIn(ctx);

    // Logout user if logged
    if (LoggedInUser && ctx.req.headers.cookie) {
      await redisClient.del(LoggedInUser.userId);

      ctx.res.cookie("refresh_token", "", {
        ...refreshTokenCookieOptions,
        httpOnly: false,
        sameSite: "none",
        maxAge: 0,
      });
      ctx.res.cookie("access_token", "", {
        ...accessTokenCookieOptions,
        httpOnly: false,
        sameSite: "none",
        maxAge: 0,
      });
      ctx.res.cookie("logged_In", false, {
        ...accessTokenCookieOptions,
        httpOnly: false,
        sameSite: "none",
        maxAge: 0,
      });
      return true;
    }
  } catch (error) {
    console.log(error);
    errorHandler(error);
  }
};
