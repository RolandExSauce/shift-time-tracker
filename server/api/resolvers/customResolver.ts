import { IResolvers } from "@graphql-tools/utils";
import { dateScalar, uploadScalar } from "../graphql/custom/scalars";

//custom types 
export const customResolvers: IResolvers = {
  DateCustom: dateScalar,
  Upload: uploadScalar
};
