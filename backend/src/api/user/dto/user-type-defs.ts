import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Role, MyDepartment, ShiftStatus, AbsentReason } from '@prisma/client';
import {
  userDescr,
  loginInputDescr,
  createInputDescr,
  updateInputDescr,
  userResDescr,
  usersSuccessDescr,
} from 'src/api/graphql.fields.descriptions';

// Define User type **************************************************************
@ObjectType({ description: userDescr })
export class User {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [String])
  teamLeaderNames: string[]; //user can have multiple team leaders

  @Field(() => MyDepartment)
  myDepartment: MyDepartment;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  departmentId: number;

  @Field(() => [SchedulePlan])
  schedules: SchedulePlan[]; //user will have a bunch of schedules, e.g. for january, february and so on
}

// Define LoginInput type, we simply log in with a username and password *******************************
@InputType({ description: loginInputDescr })
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

// Define CreateUserInput type ******************************************************
@InputType({ description: createInputDescr })
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => Role)
  role: Role;

  @Field(() => MyDepartment)
  myDepartment: MyDepartment;

  @Field(() => [String], { nullable: true })
  teamLeaderNames?: string[];

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int, { nullable: true })
  departmentId?: number;
}

// Define UpdateUserInput type *******************************************************
@InputType({ description: updateInputDescr })
export class UpdateUserInput {
  @Field()
  usernameOfToUpdateUser: string; //must atleast pass the username of user we wanna update

  @Field({ nullable: true })
  newUsername?: string;

  @Field({ nullable: true })
  newPassword?: string;

  @Field(() => Role, { nullable: true })
  newRole?: Role;

  @Field(() => MyDepartment, { nullable: true })
  newMyDepartment?: MyDepartment;

  @Field(() => [String], { nullable: true })
  newTeamLeaderNames?: string[];

  @Field({ nullable: true })
  newFirstName?: string;

  @Field({ nullable: true })
  newLastName?: string;

  @Field(() => Int, { nullable: true })
  departmentId?: number;
}

// Define UserResponse type ************************************************************
@ObjectType({ description: userResDescr })
export class UserResponse {
  @Field(() => User)
  user: User;

  @Field()
  accessToken: string;
}

// Define UsersSuccess type ************************************************************
@ObjectType({ description: usersSuccessDescr })
export class UsersSuccess {
  @Field(() => [User])
  users: User[];
}

// Define Department type **************************************************************
@ObjectType()
export class Department {
  @Field(() => Int)
  id: number;

  @Field(() => MyDepartment)
  departmentName: MyDepartment;

  @Field(() => [User])
  departmentUsers: User[];
}

// Define SchedulePlan type ************************************************************
@ObjectType()
export class SchedulePlan {
  @Field()
  id: string;

  @Field(() => Int)
  year: number;

  @Field(() => Int)
  month: number;

  @Field(() => [DaySchedule])
  days: DaySchedule[];

  @Field(() => User)
  user: User;

  @Field()
  userId: string;
}

// Define DaySchedule type *************************************************************
@ObjectType()
export class DaySchedule {
  @Field()
  id: string;

  @Field()
  workDate: Date;

  @Field()
  startShift: Date;

  @Field()
  endShift: Date;

  @Field(() => ShiftStatus)
  shiftStatus: ShiftStatus;

  @Field(() => AbsentReason)
  ifAbsentThenReason: AbsentReason;

  @Field()
  schedulePlanId: string;
}
