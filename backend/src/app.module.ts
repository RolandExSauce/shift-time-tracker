import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { GraphQLConfigModule } from './graphql.module';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [DatabaseModule, GraphQLConfigModule, UserModule],
  controllers: [],
})
export class AppModule {}
