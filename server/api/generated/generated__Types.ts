import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateCustom: any;
  Upload: any;
};

export type AllUsers = {
  __typename?: 'AllUsers';
  admins?: Maybe<Scalars['Int']>;
  normalUsers?: Maybe<Scalars['Int']>;
  totalUsers?: Maybe<Scalars['Int']>;
};

export enum CheckIfDayOff {
  Krankenstand = 'KRANKENSTAND',
  Urlaub = 'URLAUB',
  Working = 'WORKING'
}

export type CreateUserResult = GraphqlError | User;

export type DaySchedule = {
  __typename?: 'DaySchedule';
  absentReason?: Maybe<CheckIfDayOff>;
  employeeIsAbsent?: Maybe<Scalars['Boolean']>;
  endShift?: Maybe<Scalars['DateCustom']>;
  startShift?: Maybe<Scalars['DateCustom']>;
  weekday?: Maybe<Scalars['DateCustom']>;
};

export type Department = {
  __typename?: 'Department';
  allDepartmentUsers?: Maybe<Array<Maybe<User>>>;
  allUsers?: Maybe<AllUsers>;
  departmentName?: Maybe<ValidDepartment>;
};

export type DepartmentsSuccessSoc = {
  __typename?: 'DepartmentsSuccessSoc';
  departments: Array<Department>;
};

export type GetDepartmentsResult = DepartmentsSuccessSoc | GraphqlError;

export type GetUsersResultDep = GraphqlError | UsersSuccessDep;

export type GetUsersResultSoc = GraphqlError | UsersSuccessSoc;

export type GraphqlError = {
  __typename?: 'GraphqlError';
  errorMessage: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type LoginResult = GraphqlError | LoginResponse;

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createSchedule: CreateScheduleResult;
  createUser: CreateUserResult;
  loginUser?: Maybe<LoginResult>;
  updateUserByAdmin: User;
};


export type MutationCreatePostArgs = {
  title?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationCreateScheduleArgs = {
  createScheduleInput: CreateScheduleInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginUserArgs = {
  loginInput: LoginInput;
};


export type MutationUpdateUserByAdminArgs = {
  updateInput: UpdateInput;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GETDepartmentsSOC?: Maybe<GetDepartmentsResult>;
  GETUsersDEP?: Maybe<GetUsersResultDep>;
  GETUsersSOC?: Maybe<GetUsersResultSoc>;
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  refreshAccessToken: TokenResponse;
  tomorrow: Scalars['DateCustom'];
};


export type QueryTomorrowArgs = {
  date: Scalars['DateCustom'];
};

export type SchedulePlan = {
  __typename?: 'SchedulePlan';
  WeekSchedule?: Maybe<Array<Maybe<DaySchedule>>>;
  month?: Maybe<Scalars['DateCustom']>;
  year?: Maybe<Scalars['DateCustom']>;
};

export type Society = {
  __typename?: 'Society';
  allSocietyUsers?: Maybe<Array<Maybe<User>>>;
  allUsers?: Maybe<AllUsers>;
  numOfDepartments?: Maybe<Scalars['Int']>;
  societyDepartments?: Maybe<Array<Maybe<Department>>>;
  societyGroup?: Maybe<Scalars['String']>;
  societyName?: Maybe<Scalars['String']>;
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  access_token: Scalars['String'];
  status: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  employeeRole: UserRole;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  personalNumber: Scalars['String'];
  schedule?: Maybe<Array<Maybe<SchedulePlan>>>;
  teamLeaderName: Scalars['String'];
  userDepartment: ValidDepartment;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UsersSuccessDep = {
  __typename?: 'UsersSuccessDep';
  depUsers: Array<User>;
};

export type UsersSuccessSoc = {
  __typename?: 'UsersSuccessSoc';
  socUsers: Array<User>;
};

export enum ValidDepartment {
  Hr = 'HR',
  It = 'IT',
  Vk = 'VK'
}

export type CreateScheduleInput = {
  Month: Scalars['String'];
  Year: Scalars['Int'];
  absentReason: CheckIfDayOff;
  employeeIsAbsent: Scalars['Boolean'];
  endShift: Scalars['String'];
  startShift: Scalars['String'];
  userId: Scalars['String'];
  weekday: Scalars['Int'];
};

export type CreateScheduleResult = GraphqlError | SchedulePlan;

export type CreateUserInput = {
  employeeRole: UserRole;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  teamLeaderName: Scalars['String'];
  userDepartment: ValidDepartment;
};

export type LoginInput = {
  password: Scalars['String'];
  personalNumber: Scalars['String'];
};

export type UpdateInput = {
  newFirstName?: InputMaybe<Scalars['String']>;
  newLastName?: InputMaybe<Scalars['String']>;
  newRole?: InputMaybe<UserRole>;
  newTeamLeaderName?: InputMaybe<Scalars['String']>;
  newUserDepartment?: InputMaybe<ValidDepartment>;
  personalNumber: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  CreateUserResult: ( GraphqlError ) | ( User );
  GetDepartmentsResult: ( DepartmentsSuccessSoc ) | ( GraphqlError );
  GetUsersResultDep: ( GraphqlError ) | ( UsersSuccessDep );
  GetUsersResultSoc: ( GraphqlError ) | ( UsersSuccessSoc );
  LoginResult: ( GraphqlError ) | ( LoginResponse );
  createScheduleResult: ( GraphqlError ) | ( SchedulePlan );
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  CreateUserResult: ( GraphqlError ) | ( User );
  GetDepartmentsResult: ( DepartmentsSuccessSoc ) | ( GraphqlError );
  GetUsersResultDep: ( GraphqlError ) | ( UsersSuccessDep );
  GetUsersResultSoc: ( GraphqlError ) | ( UsersSuccessSoc );
  LoginResult: ( GraphqlError ) | ( LoginResponse );
  createScheduleResult: ( GraphqlError ) | ( SchedulePlan );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AllUsers: ResolverTypeWrapper<AllUsers>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CheckIfDayOff: CheckIfDayOff;
  CreateUserResult: ResolverTypeWrapper<ResolversUnionTypes['CreateUserResult']>;
  DateCustom: ResolverTypeWrapper<Scalars['DateCustom']>;
  DaySchedule: ResolverTypeWrapper<DaySchedule>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Department: ResolverTypeWrapper<Department>;
  DepartmentsSuccessSoc: ResolverTypeWrapper<DepartmentsSuccessSoc>;
  GetDepartmentsResult: ResolverTypeWrapper<ResolversUnionTypes['GetDepartmentsResult']>;
  GetUsersResultDep: ResolverTypeWrapper<ResolversUnionTypes['GetUsersResultDep']>;
  GetUsersResultSoc: ResolverTypeWrapper<ResolversUnionTypes['GetUsersResultSoc']>;
  GraphqlError: ResolverTypeWrapper<GraphqlError>;
  String: ResolverTypeWrapper<Scalars['String']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LoginResult: ResolverTypeWrapper<ResolversUnionTypes['LoginResult']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  SchedulePlan: ResolverTypeWrapper<SchedulePlan>;
  Society: ResolverTypeWrapper<Society>;
  TokenResponse: ResolverTypeWrapper<TokenResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  UsersSuccessDep: ResolverTypeWrapper<UsersSuccessDep>;
  UsersSuccessSoc: ResolverTypeWrapper<UsersSuccessSoc>;
  ValidDepartment: ValidDepartment;
  createScheduleInput: CreateScheduleInput;
  createScheduleResult: ResolverTypeWrapper<ResolversUnionTypes['createScheduleResult']>;
  createUserInput: CreateUserInput;
  loginInput: LoginInput;
  updateInput: UpdateInput;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AllUsers: AllUsers;
  Int: Scalars['Int'];
  CreateUserResult: ResolversUnionParentTypes['CreateUserResult'];
  DateCustom: Scalars['DateCustom'];
  DaySchedule: DaySchedule;
  Boolean: Scalars['Boolean'];
  Department: Department;
  DepartmentsSuccessSoc: DepartmentsSuccessSoc;
  GetDepartmentsResult: ResolversUnionParentTypes['GetDepartmentsResult'];
  GetUsersResultDep: ResolversUnionParentTypes['GetUsersResultDep'];
  GetUsersResultSoc: ResolversUnionParentTypes['GetUsersResultSoc'];
  GraphqlError: GraphqlError;
  String: Scalars['String'];
  LoginResponse: LoginResponse;
  LoginResult: ResolversUnionParentTypes['LoginResult'];
  Mutation: {};
  Post: Post;
  Query: {};
  SchedulePlan: SchedulePlan;
  Society: Society;
  TokenResponse: TokenResponse;
  Upload: Scalars['Upload'];
  User: User;
  UsersSuccessDep: UsersSuccessDep;
  UsersSuccessSoc: UsersSuccessSoc;
  createScheduleInput: CreateScheduleInput;
  createScheduleResult: ResolversUnionParentTypes['createScheduleResult'];
  createUserInput: CreateUserInput;
  loginInput: LoginInput;
  updateInput: UpdateInput;
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AllUsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllUsers'] = ResolversParentTypes['AllUsers']> = {
  admins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  normalUsers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalUsers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResult'] = ResolversParentTypes['CreateUserResult']> = {
  __resolveType: TypeResolveFn<'GraphqlError' | 'User', ParentType, ContextType>;
};

export interface DateCustomScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateCustom'], any> {
  name: 'DateCustom';
}

export type DayScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['DaySchedule'] = ResolversParentTypes['DaySchedule']> = {
  absentReason?: Resolver<Maybe<ResolversTypes['CheckIfDayOff']>, ParentType, ContextType>;
  employeeIsAbsent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endShift?: Resolver<Maybe<ResolversTypes['DateCustom']>, ParentType, ContextType>;
  startShift?: Resolver<Maybe<ResolversTypes['DateCustom']>, ParentType, ContextType>;
  weekday?: Resolver<Maybe<ResolversTypes['DateCustom']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  allDepartmentUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  allUsers?: Resolver<Maybe<ResolversTypes['AllUsers']>, ParentType, ContextType>;
  departmentName?: Resolver<Maybe<ResolversTypes['ValidDepartment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentsSuccessSocResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartmentsSuccessSoc'] = ResolversParentTypes['DepartmentsSuccessSoc']> = {
  departments?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetDepartmentsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetDepartmentsResult'] = ResolversParentTypes['GetDepartmentsResult']> = {
  __resolveType: TypeResolveFn<'DepartmentsSuccessSoc' | 'GraphqlError', ParentType, ContextType>;
};

export type GetUsersResultDepResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetUsersResultDep'] = ResolversParentTypes['GetUsersResultDep']> = {
  __resolveType: TypeResolveFn<'GraphqlError' | 'UsersSuccessDep', ParentType, ContextType>;
};

export type GetUsersResultSocResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetUsersResultSoc'] = ResolversParentTypes['GetUsersResultSoc']> = {
  __resolveType: TypeResolveFn<'GraphqlError' | 'UsersSuccessSoc', ParentType, ContextType>;
};

export type GraphqlErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphqlError'] = ResolversParentTypes['GraphqlError']> = {
  errorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'GraphqlError' | 'LoginResponse', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, Partial<MutationCreatePostArgs>>;
  createSchedule?: Resolver<ResolversTypes['createScheduleResult'], ParentType, ContextType, RequireFields<MutationCreateScheduleArgs, 'createScheduleInput'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['LoginResult']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'loginInput'>>;
  updateUserByAdmin?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserByAdminArgs, 'updateInput'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GETDepartmentsSOC?: Resolver<Maybe<ResolversTypes['GetDepartmentsResult']>, ParentType, ContextType>;
  GETUsersDEP?: Resolver<Maybe<ResolversTypes['GetUsersResultDep']>, ParentType, ContextType>;
  GETUsersSOC?: Resolver<Maybe<ResolversTypes['GetUsersResultSoc']>, ParentType, ContextType>;
  getAllPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  refreshAccessToken?: Resolver<ResolversTypes['TokenResponse'], ParentType, ContextType>;
  tomorrow?: Resolver<ResolversTypes['DateCustom'], ParentType, ContextType, RequireFields<QueryTomorrowArgs, 'date'>>;
};

export type SchedulePlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchedulePlan'] = ResolversParentTypes['SchedulePlan']> = {
  WeekSchedule?: Resolver<Maybe<Array<Maybe<ResolversTypes['DaySchedule']>>>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['DateCustom']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['DateCustom']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocietyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Society'] = ResolversParentTypes['Society']> = {
  allSocietyUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  allUsers?: Resolver<Maybe<ResolversTypes['AllUsers']>, ParentType, ContextType>;
  numOfDepartments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  societyDepartments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  societyGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  societyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenResponse'] = ResolversParentTypes['TokenResponse']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employeeRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personalNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedule?: Resolver<Maybe<Array<Maybe<ResolversTypes['SchedulePlan']>>>, ParentType, ContextType>;
  teamLeaderName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userDepartment?: Resolver<ResolversTypes['ValidDepartment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersSuccessDepResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersSuccessDep'] = ResolversParentTypes['UsersSuccessDep']> = {
  depUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersSuccessSocResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersSuccessSoc'] = ResolversParentTypes['UsersSuccessSoc']> = {
  socUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateScheduleResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['createScheduleResult'] = ResolversParentTypes['createScheduleResult']> = {
  __resolveType: TypeResolveFn<'GraphqlError' | 'SchedulePlan', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllUsers?: AllUsersResolvers<ContextType>;
  CreateUserResult?: CreateUserResultResolvers<ContextType>;
  DateCustom?: GraphQLScalarType;
  DaySchedule?: DayScheduleResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  DepartmentsSuccessSoc?: DepartmentsSuccessSocResolvers<ContextType>;
  GetDepartmentsResult?: GetDepartmentsResultResolvers<ContextType>;
  GetUsersResultDep?: GetUsersResultDepResolvers<ContextType>;
  GetUsersResultSoc?: GetUsersResultSocResolvers<ContextType>;
  GraphqlError?: GraphqlErrorResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SchedulePlan?: SchedulePlanResolvers<ContextType>;
  Society?: SocietyResolvers<ContextType>;
  TokenResponse?: TokenResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UsersSuccessDep?: UsersSuccessDepResolvers<ContextType>;
  UsersSuccessSoc?: UsersSuccessSocResolvers<ContextType>;
  createScheduleResult?: CreateScheduleResultResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';