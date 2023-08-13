import { AuthenticationError } from "apollo-server-core";
import { AuthContext } from "../context/AuthContext";

//Logged in or not 
export const checkIsLoggedIn = async ({ req, getAuthUser }: AuthContext) => {
  const authUser = await getAuthUser(req);

  if (authUser) {
    return authUser;
  }
  throw new AuthenticationError("You are not logged in");
};
