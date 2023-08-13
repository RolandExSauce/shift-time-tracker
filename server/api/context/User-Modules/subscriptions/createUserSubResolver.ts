import { PubSub } from "graphql-subscriptions";
// import { IUser } from "../../../database/schemaInterfaces";
import { NEW_USER } from "./subscriptionUtils";


// //subscription resolver if a new user is created
// const pubsub = new PubSub();
// export const newUserCreated = (user: IUser) => {
//   setTimeout(() => {
//     if (user) {
//       pubsub.publish(NEW_USER, { newUser: user });
//     }
//   }, 1000);
// };

// export const newUser = {
//   subscribe: () => pubsub.asyncIterator([NEW_USER]),
// };
