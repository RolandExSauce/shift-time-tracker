// CUSTOM ERROR MESSAGES FOR GRAPHQL OPERATIONS
const USER_NOT_FOUND = 'Sorry, this user does not exist';
const WRONG_PASSWORD = 'No user found with this password';

const CANNOT_DELETE_ROUTER = 'Router cannot be deleted as it does not exist';
const NO_ROUTER_EXIST = 'No router found with this information';

const DELETE_WHERE_FOR_ROUTER_MISSING =
  ' Serialnumber was not provided, cannot delete router!';

const ROUTER_DELETED_BUT_BACKUP_FILE_NOT_UPDATED =
  'Router deleted, but backup file could not be updated'; //unlikely to happen unless problems with fs module

const SEARCH_OPTION_MISSING_ROUTER =
  'Provide one of the search criteria to proceed';

const CONFIG_GONE_WRONG = 'Configuration failed!';

const TOOK_TOO_LONG =
  'Check if the router is connected and has internet access!';

const ROUTER_ALREADY_CONFIGURED =
  'Router already exists and is configured,\nContact the admin if this is not correct!';

const NO_RECORDS_EMPTY_COL_ROUTER =
  'No router records found in the DB,\nContact the admin';

/**************************************************** */
const FORBIDDEN_IF_NO_AUTH = 'You are not authenticated, request denied!';

const FORBIDDEN_REQUEST_FOR_USERS =
  'This request is not allowed for normal users!'; // if normal users try to execute root or admin resources?

/************************************************************************* */
const FORBIDDEN_OPERATION_UPDATE = 'No permission to edit data!';

const BACKUP_CREATED = 'Backup successfully created';

const ERROR_WHILE_CREATING_BACKUP = 'Error while creating the backup!';

const NO_NEED_TO_CREATE_BACKUP =
  'Backup already exists - configure new routers and then create a backup!';

const DATA_INCONSISTENT =
  'There are more data entries in the CSV than in the DB - Contact the admin!';

// DEFAULT FALLBACK ERROR
const UNKNOWN_ERROR = 'An unknown error has occurred! - Contact the admin';

const COULD_NOT_UPDATE_ROUTER = 'Router does not exist, cannot be updated!';

// when operation on router performed
const ROUTER_ALTERED = (ssidOfDeletedRouter: string, routerOp: string) => {
  let replaceInString = '';
  if (routerOp === 'DELETE') replaceInString = 'HAS BEEN DELETED';
  else if (routerOp === 'UPDATE') replaceInString = 'HAS BEEN UPDATED';
  else if (routerOp === 'CONFIG') replaceInString = 'HAS BEEN CONFIGURED';
  else if (routerOp === 'NO_UPDATE')
    replaceInString = ', VALUES REMAIN THE SAME!';
  return `ROUTER WITH SSID: ${ssidOfDeletedRouter} ${replaceInString}`;
};

/* FOR USER RELATED ERR MESSAGES ******************************************************************************************** */
const NO_RECORDS_EMPTY_COL_USER =
  'No user records found in the DB,\nContact the admin';
const USER_ALREADY_EXIST =
  'A user with this username already exist,\nDuplicates are not allowed!';
const CANNOT_DELETE_USER = 'User cannot be deleted, does not exist!';
const SEARCH_OPTION_MISSING_USER =
  'Cannot commence user search, provide username';
const NO_USER_EXIST = 'No user found with this username';

const COULD_NOT_UPDATE_USER = 'User does not exist, cannot be updated!';

const UPDATE_USER_ERR = 'An error occured while updating the user';

const DELETE_WHERE_FOR_USER_MISSING =
  ' Username was not provided, cannot delete user!';

// when operation on user performed
const USER_ALTERED = (usernameOfDeletedUser: string, userOp: string) => {
  let replaceInString = '';
  if (userOp === 'DELETE') replaceInString = 'HAS BEEN DELETED';
  else if (userOp === 'UPDATE') replaceInString = 'HAS BEEN UPDATED';
  else if (userOp === 'CREATE') replaceInString = 'HAS BEEN CREATED';
  else if (userOp === 'NO_UPDATE')
    replaceInString = ', VALUES REMAIN THE SAME!';

  const escapedUsername = usernameOfDeletedUser.replace(/"/g, '\\"');
  return `USER WITH THE USERNAME: "${escapedUsername}" ${replaceInString}`;
};

// export custom messages
export {
  NO_ROUTER_EXIST,
  SEARCH_OPTION_MISSING_ROUTER,
  CONFIG_GONE_WRONG,
  CANNOT_DELETE_ROUTER,
  FORBIDDEN_IF_NO_AUTH,
  NO_RECORDS_EMPTY_COL_ROUTER,
  DELETE_WHERE_FOR_ROUTER_MISSING,
  /******************************* */
  FORBIDDEN_REQUEST_FOR_USERS,
  ROUTER_DELETED_BUT_BACKUP_FILE_NOT_UPDATED,
  FORBIDDEN_OPERATION_UPDATE,
  /***********************+**** */
  NO_NEED_TO_CREATE_BACKUP,
  ERROR_WHILE_CREATING_BACKUP,
  COULD_NOT_UPDATE_ROUTER,
  DATA_INCONSISTENT,

  /****************************** */
  ROUTER_ALREADY_CONFIGURED,
  USER_NOT_FOUND,
  WRONG_PASSWORD,
  UNKNOWN_ERROR,
  BACKUP_CREATED,
  TOOK_TOO_LONG,
  ROUTER_ALTERED,

  /*FOR USERS ******************************************* */
  SEARCH_OPTION_MISSING_USER,
  NO_RECORDS_EMPTY_COL_USER,
  USER_ALREADY_EXIST,
  CANNOT_DELETE_USER,
  NO_USER_EXIST,
  COULD_NOT_UPDATE_USER,
  DELETE_WHERE_FOR_USER_MISSING,
  UPDATE_USER_ERR,
  USER_ALTERED,
};
