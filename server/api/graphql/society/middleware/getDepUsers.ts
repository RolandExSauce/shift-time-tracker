import { Prisma } from "@prisma/client";
import { prisma } from "../../../database/prisma/db-client";
import { MappedType } from "./user-types";

export const getUsersBasedOnDepartments = async (socId: string) => {
  let usersInITArr: Prisma.UserCreateInput[] = [];
  let usersInHRAr: Prisma.UserCreateInput[] = [];
  let usersInVKArr: Prisma.UserCreateInput[] = [];

  let usersIT: number = 0;
  let adminsIT: number = 0;

  let usersHR: number = 0;
  let adminsHR: number = 0;

  let usersVK: number = 0;
  let adminsVK: number = 0;

  //users are filtered by userDepartment, maybe this one in another resolver ?
  const filteredUsers = await prisma.user
    .findMany({
      where: {
        societyId: socId,
      },
    })
    .then((users) => {
      users.map((user) => {
        if (user.userDepartment === "IT" && socId === user.societyId) {
          usersInITArr.push(user);

          if (user.employeeRole === "USER" && socId === user.societyId) {
            usersIT++;
          } else {
            adminsIT++;
          }
        } else if (user.userDepartment === "HR" && socId === user.societyId) {
          usersInHRAr.push(user);

          if (user.employeeRole === "USER" && socId === user.societyId) {
            usersHR++;
          } else {
            adminsHR++;
          }
        } else if (user.userDepartment === "VK" && socId === user.societyId) {
          usersInVKArr.push(user);

          if (user.employeeRole === "USER" && socId === user.societyId) {
            usersVK++;
          } else {
            adminsVK++;
          }
        }
      });

      return {
        usersInITDep: {
          userDocs: usersInITArr,
          admins: adminsIT,
          normalUsers: usersIT,
          totalUsers: usersInITArr.length,
        },
        usersInHRDep: {
          userDocs: usersInHRAr,
          admins: adminsHR,
          normalUsers: usersHR,
          totalUsers: usersInHRAr.length,
        },
        usersInVKDep: {
          userDocs: usersInVKArr,
          admins: adminsVK,
          normalUsers: usersVK,
          totalUsers: usersInVKArr.length,
        },
      };
    })
    .catch((err) => console.log("Error: ", err));

  const USER_ARR = Object.values(filteredUsers as MappedType);
  return USER_ARR;
};
