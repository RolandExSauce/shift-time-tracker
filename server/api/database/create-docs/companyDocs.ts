import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/db-client";

//Will create docs like: Department, userChats, etc - will be empty for now
export const createCompanyDocs = async () => {
  let createdSociety: Prisma.SocietyCreateInput | undefined;

  //If collection has empty docs, create docs for different departments
  const depDocsExists = await prisma.department.findMany({});
  if (depDocsExists.length === 0) {
    await prisma.department.create({
      data: {
        departmentName: "IT",
        societyId: createdSociety?.id,
        allUsers: {
          admins: 0,
          normalUsers: 0,
          totalUsers: 0,
        },
      },
    });

    await prisma.department.create({
      data: {
        departmentName: "HR",
        societyId: createdSociety?.id,
        allUsers: {
          admins: 0,
          normalUsers: 0,
          totalUsers: 0,
        },
      },
    });

    await prisma.department.create({
      data: {
        departmentName: "VK",
        societyId: createdSociety?.id,
        allUsers: {
          admins: 0,
          normalUsers: 0,
          totalUsers: 0,
        },
      },
    });
  }
  //only create a society if no docs exist, TODO: OR FIXME: ??? later implement: If Docs exists then check for societies
  //that exists and push the department in the respective society
  const societyDocsExists = await prisma.society.findMany({});
  if (societyDocsExists.length === 0) {
    //: TODO: OR FIXME: ??? FOR NOW IT'S HARD CODED, MAYBE CLIENT WANTS IT
    //DYNAMIC ?
    const depDocs = await prisma.department.findMany({});
    if (depDocs.length > 0) {
      //TODO: OR FIXME: ??? If greater than 0 than departments exists check for the
      //departments which where created in the society below, else update number of society departments

      createdSociety = await prisma.society.create({
        data: {
          societyName: "Donauversicherung AG",
          societyGroup: "Vienna Insurance Group AG",
          numOfDepartments: depDocs.length,

          allUsers: {
            admins: 0,
            normalUsers: 0,
            totalUsers: 0,
          },
        },
      });
    }
  }
};
