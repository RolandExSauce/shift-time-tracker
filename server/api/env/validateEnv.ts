import { cleanEnv, num, port, str } from "envalid";
require("dotenv").config({ path: require("find-config")("../../.env") });

interface ENVS {
  //amazon
  AWS_REGION: string;
  ACCESS_KEY_AWS: string;
  SECRET_KEY_AWS: string;
  BUCKET_NAME: string;

  //ports

  REDIS_PORT: number;

  //----------------------
  MONGODB_URI_LOCAL: string;
  //---------------------
  NODE_ENV: string;
  GRAPHQL_SERVER_PORT: number;
  EXPRESS_APP_PORT: number;
  SSL_PORT: number;

  //------------------------------
  JWT_PRIVATE_KEY_ONE: string;
  JWT_PRIVATE_KEY_TWO: string;

  JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC: string;
  JWT_PRIVATE_KEY_TWO_VERIFY_PUBLIC: string;

  jwtAccessTokenExpiresIn: string;
  jwtRefreshTokenExpiresIn: string;

  //------------------------------
  SALT: number;
  SCHEMA_PATH: string;
  FRONT_END_APP_URL: string;

  //hard coded variable names:

  SOCIETY_NAME: string;
}
const processEnv: NodeJS.ProcessEnv = process.env; // access env variables

//Function to validate .env variables
const validateEnv = (): Readonly<ENVS> => {
  return cleanEnv(processEnv, {

    AWS_REGION: str(),
    ACCESS_KEY_AWS: str(),
    SECRET_KEY_AWS: str(),
    BUCKET_NAME: str(),

    NODE_ENV: str(),

    GRAPHQL_SERVER_PORT: port(),
    EXPRESS_APP_PORT: port(),
    SSL_PORT: port(),

    REDIS_PORT: port(),

    MONGODB_URI_LOCAL: str(),

    JWT_PRIVATE_KEY_ONE: str(),
    JWT_PRIVATE_KEY_TWO: str(),

    JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC: str(),
    JWT_PRIVATE_KEY_TWO_VERIFY_PUBLIC: str(),

    jwtAccessTokenExpiresIn: str(),
    jwtRefreshTokenExpiresIn: str(),

    //----------------
    SALT: num(),
    SCHEMA_PATH: str(),
    FRONT_END_APP_URL: str(),

    //------------------------
    SOCIETY_NAME: str(),
  });
};
export default validateEnv;
