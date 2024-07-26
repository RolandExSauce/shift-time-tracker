/* DESCRIPTIONS FOR GRAPHQL FIELDS TO MATCH AUTO GENERATED SCHEMA, DO NOT EDIT */

// global fields ***********************************************************************************************
const errDescr = `Type GraphqlError, with customError field of type Scalar String, to return custom defined errors`;
const successMsgDescr = `Type Success, with successMsg field of type Scalar String, returns success msg based on successfull operations`;
/**************************************************************************************************** */

//First for User type

// field descriptions, type/inputs
const userDescr = `Type User to match User entity for db mapping`;
const loginInputDescr = `Input type, input fields to pass when login in`;
const createInputDescr = `Input type, input fields to pass when creating new user`;
const updateInputDescr = `Input type, new input fields to pass when updating user`;
const userResDescr = `Type UserResponse, return User Obj with accesstoken`;
const usersSuccessDescr = `Type UsersSuccess, will return array of User Objects`;

//user mutation and querie fields *********************************************************************
const updateUserMutationDescr = `mutation to update user, will return UpdatedUserResponse`;
const createUserMutationDescr = `mutation to create user, will return CreatedUserResponse`;
const deleteUserMutationDescr = `mutation to delete user, will return DeletedUserResponse`;
const loginUserMutationDescr = `mutation to log in user, will return TokenResponse`;
const getUsersQueryDescr = `get all users query, will return GetUsersResponse`;
/***************************************************************************************** */

//user graphql unions *******************************************************************************************
const tokenResUnionDescr = `union TokenResponse will return UserResponse or GraphqlError`;
const getUsersResUnionDescr = `union GetUsersResult, will return UsersSuccess or GraphqlError`;
const createdUserResUnionDescr = `union CreatedUserResult, will return Success msg or GraphqlError`;
const updatedUserResUnionDescr = `union UpdatedUserResult, will return Success msg or GraphqlError`;
const deletedUserResUnionDescr = `union DeleteUserResult, will return Success msg or GraphqlError`;
/*********************************************************************************************************/

//Now we do the same for Device type
// field descriptions type/inputs
const deviceConfStatusDescr = `Type DeviceConfigStatus, will technical intel on the device, is in DB? last used firmwarefile, etc.`;
const deviceConfStatusAfterConf = `Type StatusAfterConfig, will show us the current technical intels on the device after config was done`;
const deviceWithBaseInfoDescr = `Type DeviceWithBaseInfo to match BaseRouterModel entity for db mapping`;
const deviceWithMoreInfoDescr = `Type DeviceWithMoreInfo to match SuperRouterModel (extends BaseRouterModel) entity for db mapping`;
const devicesSuccessDescr = `Type DevicesSuccess, will return array of Device Objects`;
const deviceInfoDescr = `Input type DeviceInfo, input fields to pass when configuring a new device, some are optionals`;
const deviceConfInputDescr = `Input type DeviceConfigInput, all input fields to pass when configuring a new device, embedded types (subtypes), like DeviceInfo is part of it`;
const newDeviceConfigStatusInputDescr = `Input type NewDeviceConfigStatusInput, input fields to pass when updating device's config status data`;
const updateDeviceInputDescr = `Input type UpdateDeviceInput, all input fields to pass when updating device's data, embedded types (subtypes), like NewDeviceConfigStatusInput is part of it`;

//user mutation and querie fields *********************************************************************
const configDeviceMutationDescr = `mutation to config device, will return ConfigDeviceResult`;
const getDevicesQueryDescr = `query to fetch all devices, will return GetDevicesResponse`;
const searchDeviceDetailedQueryDescr = `query to search for device if we want more detailed info, will return DeviceDetailedSearchResult`;
const updateDeviceDetailedMutationDescr = `mutation to update device data, will return UpdatedDeviceResponse`;
const deleteOneOrMoreDeviceMutationDescr = `mutation to delete one or more devices, will return DeletedOneOrMoreDevicesResponse`;
/***************************************************************************************** */

//user graphql unions *******************************************************************************************
const configResUnionDescr = `union ConfigDeviceResult, will return StatusAfterConfig or GraphqlError`;
const getDevicesResUnionDescr = `union GetDevicesResponse, will return DevicesSuccess or GraphqlError`;
const deviceDetailedSearchResultDescr = `union DeviceWithMoreInfo, will return DeviceWithMoreInfo or GraphqlError`;
const updatedDeviceResUnionDescr = `union UpdatedDeviceResponse, will return Success msg or GraphqlError`;
const deletedOneOrManyResUnionDescr = `union DeletedOneOrMoreDevicesResponse, will return Success msg or GraphqlError`;
/*********************************************************************************************************/

export {
  //global fields descriptions
  errDescr,
  userDescr,

  //user fields descriptions
  successMsgDescr,
  loginInputDescr,
  createInputDescr,
  updateInputDescr,
  usersSuccessDescr,
  userResDescr,

  //user unions descriptions
  tokenResUnionDescr,
  createdUserResUnionDescr,
  updatedUserResUnionDescr,
  deletedUserResUnionDescr,
  getUsersResUnionDescr,
  /******************************/

  //user mutations and queries descriptions
  getUsersQueryDescr,
  loginUserMutationDescr,
  createUserMutationDescr,
  updateUserMutationDescr,
  deleteUserMutationDescr,

  /* imports for device ******************/
  deviceConfStatusDescr,
  deviceConfStatusAfterConf,
  deviceWithBaseInfoDescr,
  deviceWithMoreInfoDescr,
  devicesSuccessDescr,
  deviceInfoDescr,
  deviceConfInputDescr,
  newDeviceConfigStatusInputDescr,
  updateDeviceInputDescr,

  //device unions descriptions
  configResUnionDescr,
  getDevicesResUnionDescr,
  deviceDetailedSearchResultDescr,
  updatedDeviceResUnionDescr,
  deletedOneOrManyResUnionDescr,

  //device mutations and queries descriptions
  configDeviceMutationDescr,
  getDevicesQueryDescr,
  searchDeviceDetailedQueryDescr,
  updateDeviceDetailedMutationDescr,
  deleteOneOrMoreDeviceMutationDescr,
};
