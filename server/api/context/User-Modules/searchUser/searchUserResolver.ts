import { User } from "../../../database/schemas/User.model";
import {
  GraphqlError,
  QuerySearchUserArgs,
  UserData,
  UserResult,
} from "../../../generated/generated__Types";

//search user resolver
export const searchUser = async (
  _: undefined,
  args: QuerySearchUserArgs
): Promise<UserResult | undefined> => {
  try {
    const email = args.email;
    const user = await User.findOne({ email });

    if (user) {
      return user as UserData;
    }
  } catch (err: unknown) {
    throw err as GraphqlError;
  }
};
