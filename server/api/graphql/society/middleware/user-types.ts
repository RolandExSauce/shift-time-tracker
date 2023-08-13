import { Prisma } from "@prisma/client";

export type MappedType = {
  usersInITDep: {
    userDocs: Prisma.UserCreateInput[];
    admins: number;
    normalUsers: number;
    totalUsers: number;
  };

  usersInHRDep: {
    userDocs: Prisma.UserCreateInput[];
    admins: number;
    normalUsers: number;
    totalUsers: number;
  };

  usersInVKDep: {
    userDocs: Prisma.UserCreateInput[];
    admins: number;
    normalUsers: number;
    totalUsers: number;
  };
};
