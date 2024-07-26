//custom err messages for user related resolvers:

const NO_USERS_FOUND = `No users were found`;
const DUPLICATE_USER = `Duplicate record, user already exist`;
const FAILED_TO_CREATE_USER = `Failed to create user`; //unlikely to happen unless typeorm issues
const USER_NOT_FOUND_DELETE_FAILED = 'Failed to delete, user does not exist';
const USER_NOT_FOUND = 'Sorry, this user does not exist';
const WRONG_PASSWORD = 'No user found with this password';

/*********************************************************************************/
//custom err messages for router related resolvers:
const NO_DEVICES_FOUND = `No devices were found`;

// For both user and device ****************************************************************************** */

// when operation on user or device was performed
//TODO: Add more functionalities
const RECORD_ALTERED = (
  entityType: string,
  recordDeletedName: string, //can either be the device ssid or the username
  operationOp: string,
) => {
  let replaceInString = '';
  if (operationOp === 'DELETE') replaceInString = 'has been deleted';
  else if (operationOp === 'UPDATE') replaceInString = 'has been updated';
  else if (operationOp === 'CREATE') replaceInString = 'has been created';
  else if (operationOp === 'NO_UPDATE')
    replaceInString = ', values remain the same!';

  const escapedUsernameOrSSID = recordDeletedName.replace(/"/g, '\\"');
  return `${entityType === 'USER' ? 'user' : 'device'} with the 
  ${entityType === 'USER' ? 'username' : 'SSID'}: "${escapedUsernameOrSSID}" ${replaceInString}`;
};

export {
  NO_USERS_FOUND,
  DUPLICATE_USER,
  FAILED_TO_CREATE_USER,
  USER_NOT_FOUND_DELETE_FAILED,
  USER_NOT_FOUND,
  WRONG_PASSWORD,
  RECORD_ALTERED,
  /*************/
  NO_DEVICES_FOUND,
};
