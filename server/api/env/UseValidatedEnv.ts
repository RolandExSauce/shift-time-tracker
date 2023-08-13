import validateEnv from "./validateEnv";

export const AWS_REGION = validateEnv().AWS_REGION
export const ACCESS_KEY_AWS = validateEnv().ACCESS_KEY_AWS
export const SECRET_KEY_AWS = validateEnv().SECRET_KEY_AWS
export const BUCKET_NAME = validateEnv().BUCKET_NAME



export const GRAPHQL_SERVER_PORT = validateEnv().GRAPHQL_SERVER_PORT; //port for express graphql app
export const EXPRESS_APP_PORT = validateEnv().EXPRESS_APP_PORT; //port for express graphql app
export const SSL_PORT = validateEnv().SSL_PORT; //port for express graphql app
export const REDIS_PORT = validateEnv().REDIS_PORT;

//Keys and expiring times for JWT -----------------------------------------------------------
export const JWT_PRIVATE_KEY_ONE = validateEnv().JWT_PRIVATE_KEY_ONE;
export const JWT_PRIVATE_KEY_TWO = validateEnv().JWT_PRIVATE_KEY_TWO;

export const JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC =
  validateEnv().JWT_PRIVATE_KEY_ONE_VERIFY_PUBLIC;
export const JWT_PRIVATE_KEY_TWO_VERIFY_PUBLIC =
  validateEnv().JWT_PRIVATE_KEY_TWO_VERIFY_PUBLIC;

export const accessTokenExpireIn = validateEnv().jwtAccessTokenExpiresIn;
export const refreshTokenExpiresIn = validateEnv().jwtRefreshTokenExpiresIn;
//------------------------------------------------------------------------
export const MONGO_URI = validateEnv().MONGODB_URI_LOCAL; //mongo url
export const SALT = validateEnv().SALT; //Salt to hash password
export const SCHEMA_PATH = validateEnv().SCHEMA_PATH; //path for merged schemas
export const NODE_ENV = validateEnv().NODE_ENV;
export const FRONT_END_APP_URL = validateEnv().FRONT_END_APP_URL;



//----------------------------------------------------------------------
export const SOCIETY_NAME = validateEnv().SOCIETY_NAME