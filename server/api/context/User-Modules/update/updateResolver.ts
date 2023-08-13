import { User } from "../../../database/schemas/User.model";
import {
  MutationUpdateUserArgs,
  UserData,
} from "../../../generated/generated__Types";

//update a user's profile
export const updateUser = async (
  _: undefined,
  args: MutationUpdateUserArgs
): Promise<UserData | null> => {
  const oldEmail = args.updateInput.oldEmail;
  const newRole = args.updateInput.newRole;
  const newUsername = args.updateInput.newUsername;
  const newEmail = args.updateInput.newEmail;

  const updatedUser = await User.findOneAndUpdate(
    {
      email: oldEmail,
    },
    {
      $set: {
        email: newEmail,
        role: newRole,
        username: newUsername,
      },
    },

    {
      returnOriginal: true, //Message: user with email { old email of user } was deleted
    }
  );

  return updatedUser
    ? {
        ...updatedUser,
        id: updatedUser._id,
        ...updatedUser._doc,
      }
    : null;
};
