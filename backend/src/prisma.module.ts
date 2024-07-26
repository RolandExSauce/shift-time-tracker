import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Import your Prisma service

@Global() // Makes the PrismaService available throughout the application
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService so it can be used in other modules
})
export class PrismaModule {}
