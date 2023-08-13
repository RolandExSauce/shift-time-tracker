import { ForbiddenError } from "apollo-server-core";
import { AuthContext } from "../../../context/AuthContext";
import { signJWT, verifyJWT } from "../../../utils/jwt";
import errorHandler from "../../../controllers/error.controller";
import { accessTokenCookieOptions } from "./cookieOptions";
import {
  JWT_PRIVATE_KEY_TWO,
  accessTokenExpireIn,
} from "../../../env/UseValidatedEnv";
import redisClient from "../../../database/connections/redis.connection";
import { User } from "../../../database/schemas/User.model";

//refresh token
export const refreshAccessToken = async (
  parent: undefined,
  args: undefined,
  { req, res }: AuthContext
) => {
  try {
    // Get the refresh token
    const { refresh_token } = req.cookies;
    // Validate the RefreshToken
    const decoded = verifyJWT(refresh_token, JWT_PRIVATE_KEY_TWO);

    if (!decoded) {
      throw new ForbiddenError("Could not refresh access token");
    }

    //Check if user's session is valid
    const session = await redisClient.get(decoded.user);

    if (!session) {
      throw new ForbiddenError("User session has expired");
    }

    // Check if user exist and is verified
    const user = await User.findOne({
      _id: decoded.user,
    });

    console.log("redis user: ", user);

    if (!user || !user.verified) {
      throw new ForbiddenError("Could not refresh access token");
    }

    // Sign new access token
    const access_token = signJWT({ user: user._id }, JWT_PRIVATE_KEY_TWO, {
      expiresIn: accessTokenExpireIn,
    });

    // Send access token cookie
    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("logged_In", true, accessTokenCookieOptions);

    return {
      status: "success",
      access_token,
    };
  } catch (error) {
    errorHandler(error);
  }
};
