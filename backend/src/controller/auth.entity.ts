import { ApiProperty } from '@nestjs/swagger';
import { Role, MyDepartment } from '@prisma/client';

export class AuthEntity {
  @ApiProperty({
    description: 'The JWT access token returned upon successful login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'The username of the authenticated user',
    example: 'john_doe',
  })
  username: string;

  @ApiProperty({
    description: 'The role of the authenticated user',
    example: 'USER',
  })
  role: Role;

  @ApiProperty({
    description: 'The first name of the authenticated user',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the authenticated user',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    description: 'The team leader names associated with the user',
    example: ['Jane_Smith', 'Bob_Jones'],
    type: [String],
  })
  teamLeaderNames: string[];

  @ApiProperty({
    description: 'The department name where the user belongs',
    example: 'IT',
  })
  myDepartment: MyDepartment;

  @ApiProperty({
    description: 'The department ID where the user belongs',
    example: 1,
  })
  departmentId: number;
}
