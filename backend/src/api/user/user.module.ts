import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    PrismaModule, // Import PrismaModule to use PrismaService
  ],
  providers: [UserResolver, UserService],
  exports: [UserService], // Export UserService if other modules need to use it
})
export class UserModule {}
