import { ApolloError } from "apollo-server-errors";
import { User } from "../../../database/schemas/User.model";
import {
  MutationDeleteUserArgs,
  UserData,
} from "../../../generated/generated__Types";

//delete user resolver
export const deleteUser = async (
  _: undefined,
  args: MutationDeleteUserArgs
): Promise<UserData | ApolloError | null> => {
  const user = await User.findOne({ profilId: args.profilId });
  const deletedUser = await User.findByIdAndDelete(user?._id, {
    returnOriginal: true,
  });

  if (deletedUser) {
    return {
      id: deletedUser.id,
      ...deletedUser._doc,
    };
  } else {
    throw new ApolloError(
      "A user under that profilId could not be deleted",
      "WRONG PROFIL_ID"
    );
  }
};
