import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  //after init, await for child controllers and provider
  async onModuleInit() {
    await this.$connect();
  }

  //gracefull shutdown when application shuts down
  async enableShutdownHooks(app: INestApplication) {
    await app.close();
  }
}
