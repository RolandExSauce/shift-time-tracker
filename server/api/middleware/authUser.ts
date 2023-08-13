import { ForbiddenError } from "apollo-server-core";
import { Request } from "express";
// import { User } from "../database/schemas/User.model";
import { verifyJWT } from "../utils/jwt";
import { JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC } from "../env/UseValidatedEnv";
import { JwtPayload } from "jsonwebtoken";
import redisClient from "../database/connections/redis.connection";

//authenticate the user
export const getAuthUser = async (req: Request) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const access_token = req.headers.authorization.split(" ")[1];
    const decodedUser = verifyJWT(
      access_token,
      JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC
    ) as JwtPayload;

    const session = await redisClient.get(decodedUser?.userId);
    if (!session) {
      throw new ForbiddenError("Session has expired");
    }
   return decodedUser;
  }
};
