import { singleUpload } from "../../graphql/File/uploadFileResolver";
import { createUser } from "../../graphql/User-Modules/create-user/createUserResolver";
import { loginUser } from "../../graphql/User-Modules/login-user/loginResolver";
import { updateUserByAdmin } from "../../graphql/User-Modules/update-user/updateUserByAdminResolver";

//Mutations
export const Mutation = {
  singleUpload,
  createUser,
  loginUser,
  updateUserByAdmin,
};
