import {
  JWT_PRIVATE_KEY_ONE,
  JWT_PRIVATE_KEY_TWO,
  accessTokenExpireIn,
  refreshTokenExpiresIn,
} from "../../../env/UseValidatedEnv";
import redisClient from "../../../database/connections/redis.connection";
import { signJWT } from "../../../utils/jwt";


//sign token
export const signTokens = async (userId: string) => {
  // Create a Session
  // const sessionId = userId.toHexString();
  await redisClient.set(userId, JSON.stringify(userId), {
    EX: 60 * 60,
  });

  // Create access token
  const access_token = signJWT({ userId }, JWT_PRIVATE_KEY_ONE, {
    expiresIn: accessTokenExpireIn,
  });

  // Create refresh token
  const refresh_token = signJWT({ user: userId }, JWT_PRIVATE_KEY_TWO, {
    expiresIn: refreshTokenExpiresIn,
  });
  return Promise.all([access_token, refresh_token]);
};
