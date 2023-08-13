// import { SALT } from "../../../env/UseValidatedEnv";
// import bcrypt from "bcrypt";
// import {
//   MutationCreateUserArgs,
//   User,
// } from "../../../generated/generated__Types";
// // import { newUserCreated } from "../user-subscriptions/createUserSubResolver";
// import { PrismaClient } from "@prisma/client";
// import { prisma } from "../../../database/prisma/db";
// // import { IUser } from "../../../database/prisma/IModelSchema";



// //register user resolver
// export const createUser = async (
//   _: undefined,
//   args: MutationCreateUserArgs
// ) => {
//   const personalNumber = args.createUserInput.personalNumber;
//   const password = args.createUserInput.password;
//   const employeeRole = args.createUserInput.employeeRole;
//   const teamLeaderName = args.createUserInput.teamLeaderName;
//   const department = args.createUserInput.department;
//   const firstName = args.createUserInput.firstName;
//   const lastName = args.createUserInput.lastName;
//   const displayName = args.createUserInput.displayName;
//   const avatar = args.createUserInput.avatar;
//   const schedules = args.createUserInput.schedules;

//   //hash password
//   const encryptedPassword = await bcrypt.hash(password, SALT);

//   // run inside `async` function
//   const newUser = await prisma.worker.create({
//     data: {
//       personalNumber,
//       password,
//       employeeRole,
//       teamLeaderName,
//       department,
//       firstName,
//       lastName,
//       displayName,
//       avatar,
//       schedules,
//     },
//   });

//   //trigger subscription of new created user
//   newUserCreated(newUser);

//   //return the user

//   return newUser as UserData;
// };



//   create schedule from this
//   const year = args.createUserInput.schedule.year;
//   const month = args.createUserInput.schedule.month;
//   const weekday = args.createUserInput.schedule.weekday;
//   const startShift = args.createUserInput.schedule.startShift;
//   const endShift = args.createUserInput.schedule.endShift;
//   const employeeIsAbsent = args.createUserInput.schedule.employeeIsAbsent;
//   const IfDayOff = args.createUserInput.schedule.absentReason;
//   schedules.push(year, month, weekday, startShift, endShift);
//   const obj = {
//     year: year,
//     month: month,
//     WeekSchedule: [
//       {
//         day: weekday,
//         startShift: startShift,
//         endShift: endShift,
//         employeeIsAbsent: employeeIsAbsent,
//         absentReason:     IfDayOff
//       },
//     ],
//   };

//   schedule.push(obj)