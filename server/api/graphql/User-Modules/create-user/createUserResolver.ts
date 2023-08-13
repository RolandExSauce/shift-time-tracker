// import { newUser } from './../../../context/User-Modules/subscriptions/createUserSubResolver';
import { GraphQLError } from "graphql";
import { prisma } from "../../../database/prisma/db-client";
import { Prisma } from "@prisma/client";
import {
  MutationCreateUserArgs,
  User,
} from "../../../generated/generated__Types";
import bcrypt from "bcrypt";
import { SALT } from "../../../env/UseValidatedEnv";
import { getUsersBasedOnDepartments } from "../../society/middleware/getDepUsers";

export const createUser = async (
  _: undefined,
  args: MutationCreateUserArgs
): Promise<User | undefined> => {
  const notSafePassword = args.createUserInput.password;
  const employeeRole = args.createUserInput.employeeRole;
  const teamLeaderName = args.createUserInput.teamLeaderName;
  const userDepartment = args.createUserInput.userDepartment;
  const firstName = args.createUserInput.firstName;
  const lastName = args.createUserInput.lastName;
  // const personalNumber = args.createUserInput.personalNumber;


  let personalNumber: string = ""
  //Get the department which equals typed in department of created user
  const DepToInsertUser = await prisma.department.findFirst({
    where: {
      departmentName: userDepartment,
    },
  });

  //which society to insert the user into
  const SocietyToInsertUser = await prisma.society.findFirst({
    where: {
      societyName: "Donauversicherung AG",
    },
  });

  //When chat is added: update fields => avatar, displayName
  //When schedule is added: update field => schedule

  try {
    const userArr = await prisma.user.findRaw({});
    let i: number;
    let j: string;

    if (userArr.length === 0) {
      i = 0;
      j = "0";
    } else {
      if ((userArr.length as number) > 0 && (userArr.length as number) < 1){
        personalNumber = "WSM-00"
      }
        const lastUser = userArr[
          Number(userArr.length) - 1
        ] as Prisma.UserCreateInput;

      const wsId = lastUser?.personalNumber?.match(/\d/g)?.join(""); //Get the digits in the personalNumber
      i = Number(wsId) + 1;
      j = "0";
      if (i > 9) j = "";
    }
     personalNumber = `WSM-${j}${i}`; //WSM steht für "Wiener Städtische Mitarbeiter"
    const encryptedPassword = await bcrypt.hash(notSafePassword, SALT);

    //create a user and add corresponding dep Id
    const createdUser = await prisma.user.create({
      data: {
        personalNumber,
        password: encryptedPassword,
        employeeRole,
        teamLeaderName,
        userDepartment,
        firstName,
        lastName,
        departmentId: DepToInsertUser?.id,
        societyId: SocietyToInsertUser?.id,
      },
    });

    let allUsersInDep: Prisma.AllUsersCreateInput | undefined;

    //update users and admins total sum
    if (createdUser.employeeRole === "ADMIN") {
      allUsersInDep = {
        admins: (DepToInsertUser?.allUsers?.admins as number) + 1,
        normalUsers: DepToInsertUser?.allUsers?.normalUsers as number,
        totalUsers: (DepToInsertUser?.allUsers?.totalUsers as number) + 1,
      };
    } else if (createdUser.employeeRole === "USER") {
      allUsersInDep = {
        admins: DepToInsertUser?.allUsers?.admins as number,
        normalUsers: (DepToInsertUser?.allUsers?.normalUsers as number) + 1,
        totalUsers: (DepToInsertUser?.allUsers?.totalUsers as number) + 1,
      };
    }

    await prisma.department.update({
      data: {
        allUsers: allUsersInDep,
      },
      where: {
        //update the department where user is inside
        id: createdUser.departmentId as string,
      },
    });

    //update num of users in society
    const mySOCID = createdUser.societyId as string;
    const ALLUSERS = await getUsersBasedOnDepartments(mySOCID);
    const [arrIT, arrHR, arrVK] = ALLUSERS;

    const totalNormalUsersInSociety =
      arrIT.normalUsers + arrHR.normalUsers + arrVK.normalUsers;
    const totalAdminUsersInSociety = arrIT.admins + arrHR.admins + arrVK.admins;
    const totalUsersInSociety =
      arrHR.totalUsers + arrIT.totalUsers + arrVK.totalUsers;

    //update number of users in society
    await prisma.society.update({
      data: {
        allUsers: {
          admins: totalAdminUsersInSociety,
          normalUsers: totalNormalUsersInSociety,
          totalUsers: totalUsersInSociety,
        },
      },

      where: {
        id: mySOCID,
      },
    });

    return createdUser as User;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw new GraphQLError(
          `User with the personal number ${personalNumber} already exists!`
        );
      }
    }
  }
};
