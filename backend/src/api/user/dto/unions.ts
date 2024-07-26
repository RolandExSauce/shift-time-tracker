import { createUnionType } from '@nestjs/graphql';
import { User, UserResponse, UsersSuccess } from './user-type-defs';
import {
  tokenResUnionDescr,
  getUsersResUnionDescr,
  createdUserResUnionDescr,
  updatedUserResUnionDescr,
  deletedUserResUnionDescr,
} from 'src/api/graphql.fields.descriptions';
import { GraphqlError, Success } from 'src/api/graphql.global.type-defs';

//general response
const GeneralResponse = [Success, GraphqlError] as const;

//union token response
const TokenResponse = createUnionType({
  name: 'TokenResponse',
  description: tokenResUnionDescr,
  types: () => [UserResponse, GraphqlError] as const,
  resolveType(obj: { user: User; customError: string }) {
    return obj.user ? 'UserResponse' : 'GraphqlError';
  },
});

//union fetch users result
const GetUsersResponse = createUnionType({
  name: 'GetUsersResponse',
  description: getUsersResUnionDescr,
  types: () => [UsersSuccess, GraphqlError] as const,
  resolveType(obj: { users: User[]; customError: string }) {
    return obj.users ? 'UsersSuccess' : 'GraphqlError';
  },
});

//union create user result
const CreatedUserResponse = createUnionType({
  name: 'CreatedUserResponse',
  description: createdUserResUnionDescr,
  types: () => GeneralResponse,
  resolveType(obj: { successMsg: string; customError: string }) {
    return obj.successMsg ? 'Success' : 'GraphqlError';
  },
});

//union update user result
const UpdatedUserResponse = createUnionType({
  name: 'UpdatedUserResponse',
  description: updatedUserResUnionDescr,
  types: () => GeneralResponse,
  resolveType(obj: { successMsg: string; customError: string }) {
    return obj.successMsg ? 'Success' : 'GraphqlError';
  },
});

//union delete user result
const DeletedUserResponse = createUnionType({
  name: 'DeletedUserResponse',
  description: deletedUserResUnionDescr,
  types: () => GeneralResponse,
  resolveType(obj: { successMsg: string; customError: string }) {
    return obj.successMsg ? 'Success' : 'GraphqlError';
  },
});

export {
  TokenResponse,
  GetUsersResponse,
  CreatedUserResponse,
  UpdatedUserResponse,
  DeletedUserResponse,
};
