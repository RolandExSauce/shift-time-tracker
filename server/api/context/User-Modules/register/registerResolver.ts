import { User } from "../../../database/schemas/User.model";
import { SALT } from "../../../env/UseValidatedEnv";
import bcrypt from "bcrypt";
import {
  MutationRegisterUserArgs,
  UserData,
} from "../../../generated/generated__Types";
import { newUserCreated } from "../subscriptions/createUserSubResolver";

//register user resolver
export const registerUser = async (
  _: undefined,
  args: MutationRegisterUserArgs
): Promise<UserData> => {
  const password = args.registerInput.password;
  const username = args.registerInput.username;
  const email = args.registerInput.email;
  const profilId = args.registerInput.profilId;
  const role = args.registerInput.role;
  const avatar = args.registerInput.avatar;

  //hash password
  const encryptedPassword = await bcrypt.hash(password, SALT);

  //create new user
  const user = new User({
    profilId: profilId,
    role: role,
    username: username,
    email: email,
    password: encryptedPassword,
    avatar: avatar,
    verified: false,
  });

  //trigger subscription of new created user
  newUserCreated(user);

  //return the user
  await user.save();
  return user as UserData;
};
