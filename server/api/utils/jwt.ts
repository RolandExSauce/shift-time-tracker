import jwt from "jsonwebtoken";
import errorHandler from "../controllers/error.controller";

//Signing JSON webtoken
export const signJWT = (
  payload: Object,
  privateKey: string,
  options: jwt.SignOptions | undefined
) => {
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

//Verifying JSON webtoken
export const verifyJWT = (token: string, publicKey: string) => {
  try {
    const decoded = jwt.verify(token, publicKey) as any;
    return decoded;
  } catch (error) {
    errorHandler(error);
  }
};
