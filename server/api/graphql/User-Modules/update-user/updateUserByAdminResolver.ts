import { AuthContext } from "../../../context/AuthContext";
import { prisma } from "../../../database/prisma/db-client";
import {
  MutationUpdateUserByAdminArgs,
  User,
  UserRole,
  ValidDepartment,
} from "../../../generated/generated__Types";
import { checkIsLoggedIn } from "../../../middleware/loggedUser";

//update a user's profile
export const updateUserByAdmin = async (
  _: undefined,
  args: MutationUpdateUserByAdminArgs,
  ctx: AuthContext
): Promise<User | null> => {
  const personalNumberOfUserToUpdate = args.updateInput.personalNumber;
  const newRole = args.updateInput.newRole;
  const newFirstName = args.updateInput.newFirstName;
  const newLastName = args.updateInput.newLastName;
  const newUserDepartment = args.updateInput.newUserDepartment;
  const newTeamLeaderName = args.updateInput.newTeamLeaderName;

  const LoggedInUser = await checkIsLoggedIn(ctx);
  const user = await prisma.user.findFirst({
    where: {
      id: LoggedInUser?.userId,
    },
  });

  //only admins can query for users
  if (user && user.employeeRole === "ADMIN" && ctx.req.headers.cookie) {
    const updatedUser = await prisma.user.update({
      data: {
        employeeRole: newRole as UserRole,
        firstName: newFirstName as string,
        lastName: newLastName as string,
        userDepartment: newUserDepartment as ValidDepartment,
        teamLeaderName: newTeamLeaderName as string,
      },
      where: {
        personalNumber: personalNumberOfUserToUpdate,
      },
    });
    if (updatedUser) return updatedUser as User;
  }
  return null;
};
