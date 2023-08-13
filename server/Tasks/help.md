  const DepToInsertUser = await prisma.department.findFirst({
    where: {
      departmentName: userDepartment,
    },

    //TO get users array
    // include: {
    //   allDepartmentUsers: true,
    // },
  });