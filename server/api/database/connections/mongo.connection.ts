import mongoose from "mongoose";
import { MONGO_URI } from "../../env/UseValidatedEnv";
import { createCompanyDocs } from "../create-docs/companyDocs";

//Establishing connection to MongoDB, pre-creating departments
const MongoConnection = async (): Promise<Boolean> => {
  await mongoose.connect(MONGO_URI).then(async (res) => {
    if (res) createCompanyDocs();
    return res
      ? console.log(`Connected to Mongo Database 🥦🥦`)
      : console.log("Can't reach database");
  });

  const Success: mongoose.Connection = mongoose.connection.on(
    "error",
    (error) => console.log(`Oops, error: ${error}`)
  );
  return Success ? true : false;
};
export default MongoConnection;
