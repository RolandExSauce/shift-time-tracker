import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//config db with typeorm
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qWfZV7na64GwbjyHk',
      database: 'shift_time_tracker',
      entities: [], //TODO: what to pass here, model ? the prisma model ?
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
