import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcrypt";
import { signTokens } from "../../Globals/tokens/signTokens";
import { prisma } from "../../../database/prisma/db-client";
import { ILoginInput } from "./LoginTools__Interfaces";

//try to login a user
export const tryLogin = async (loginParams: ILoginInput) => {
  //update verified true after first login
  const foundUser = await prisma.user.findFirst({
    where: { personalNumber: loginParams.personalNumber },
  });

  //check and decrypt pw match stored pw
  const decryptedPassword = await bcrypt.compare(
    loginParams.password,
    foundUser!.password
  );

  if (!foundUser || !decryptedPassword) {
    throw new ApolloError("Incorrect credentials", "INCORRECT_CREDENTIALS");
  }

  // Create a session and tokens
  const [access_token, refresh_token] = await signTokens(foundUser.id);

  return {
    user: foundUser,
    access_token,
    refresh_token,
  };
};
