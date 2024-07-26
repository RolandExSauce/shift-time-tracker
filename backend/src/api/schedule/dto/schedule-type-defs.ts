import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Role, MyDepartment, ShiftStatus, AbsentReason } from '@prisma/client';

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

// Define User type **************************************************************
@ObjectType({ description: 'Represents a user in the system' })
export class User {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [String])
  teamLeaderNames: string[]; // user can have multiple team leaders

  @Field(() => MyDepartment)
  myDepartment: MyDepartment;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  departmentId: number;

  @Field(() => [SchedulePlan])
  schedules: SchedulePlan[]; // user will have a bunch of schedules, e.g. for January, February and so on
}

// Define CreateSchedulePlanInput type ******************************************************
@InputType()
export class CreateSchedulePlanInput {
  @Field()
  id: string;

  @Field(() => Int)
  year: number;

  @Field(() => Int)
  month: number;

  @Field(() => [DayScheduleInput])
  days: DayScheduleInput[];

  @Field()
  userId: string;
}

// Define UpdateSchedulePlanInput type *******************************************************
@InputType()
export class UpdateSchedulePlanInput {
  @Field()
  id: string; // ID is required for update operations

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => Int, { nullable: true })
  month?: number;

  @Field(() => [DayScheduleInput], { nullable: true })
  days?: DayScheduleInput[];

  @Field({ nullable: true })
  userId?: string;
}

// Define DayScheduleInput type *************************************************************
@InputType()
export class DayScheduleInput {
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

// Define UserInput type **************************************************************
@InputType({ description: 'Input for creating or updating a user' })
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

@InputType({ description: 'Input for updating a user' })
export class UpdateUserInput {
  @Field()
  usernameOfToUpdateUser: string; // Must at least pass the username of user we want to update

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

// Define other types if needed
