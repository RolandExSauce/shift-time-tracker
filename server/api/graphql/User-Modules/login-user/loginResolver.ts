//Local imports
import { AuthContext } from "../../../context/AuthContext";
import { tryLogin } from "./LoginUtitilies";

//For Cookies ###########################
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "../../Globals/tokens/cookieOptions";
import {
  LoginResponse,
  Maybe,
  MutationLoginUserArgs,
  User,
} from "../../../generated/generated__Types";

//Login resolver
export const loginUser = async (
  _: undefined,
  args: MutationLoginUserArgs,
  { res }: AuthContext
): Promise<Maybe<LoginResponse> | undefined> => {
  const personalNumber = args.loginInput.personalNumber;
  const password = args.loginInput.password;

  const tryLoginParams = {
    personalNumber,
    password,
  };

  //login response
  const { access_token, refresh_token, user } = await tryLogin(tryLoginParams);

  // Adding cookies
  res.cookie("refresh_token", refresh_token, accessTokenCookieOptions);
  res.cookie("access_token", access_token, refreshTokenCookieOptions);
  res.cookie("logged_In", true, accessTokenCookieOptions);

  return {
    accessToken: access_token,
    user: user as User,
  };
};
