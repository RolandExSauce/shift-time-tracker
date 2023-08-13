import { GETUsersDEP } from "../../graphql/society/middleware/departmentUsersResolver";
import { GETDepartmentsSOC } from "../../graphql/society/societyDepartmentsResolver";
import { GETUsersSOC } from "../../graphql/society/societyUsersResolver";

//Queries related to society and department
export const Query = {
  GETDepartmentsSOC,
  GETUsersSOC,
  GETUsersDEP,
};
