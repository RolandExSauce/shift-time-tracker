import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UpdateUserInput } from './dto/user-type-defs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Get all users
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Find a user by username
  async user(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  // Create a new user
  async createUser(userData: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: userData,
    });
  }

  // Update a user by username
  async updateUser(newUserData: UpdateUserInput): Promise<User> {
    const { usernameOfToUpdateUser, ...updateData } = newUserData;
    return this.prisma.user.update({
      where: { username: usernameOfToUpdateUser },
      data: updateData,
    });
  }

  // Delete a user by username
  async deleteUser(username: string): Promise<User> {
    return this.prisma.user.delete({
      where: { username },
    });
  }
}
