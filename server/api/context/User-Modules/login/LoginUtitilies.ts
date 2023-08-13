// import { ApolloError } from "apollo-server-errors";
// import bcrypt from "bcrypt";
// import { LoginInterface } from "./LoginTools__Interfaces";
// import { signTokens } from "../../Globals/tokens/signTokens";

// //try to login a user
// export const tryLogin = async (loginParams: LoginInterface) => {
//   //update verified true after first login
//   const foundUser = await loginParams.UserModel.findOneAndUpdate(
//     {
//       email: loginParams.email,
//     },
//     {
//       $set: {
//         verified: true,
//       },
//     },
//     {
//       returnOriginal: true,
//     }
//   );

//   //check and decrypt pw match stored pw
//   const decryptedPassword = await bcrypt.compare(
//     loginParams.password,
//     foundUser!.password
//   );

//   if (!foundUser) {
//     throw new ApolloError("Incorrect credentials", "INCORRECT_CREDENTIALS");
//   }
//   // user && correct password fine
//   if (foundUser && decryptedPassword) {
//     foundUser.verified = true;
//   }

//   // Create a session and tokens
//   const [access_token, refresh_token] = await signTokens(foundUser._id);
//   return {
//     user: foundUser,
//     access_token,
//     refresh_token,
//   };
// };
