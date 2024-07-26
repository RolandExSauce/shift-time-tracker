import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//app entrypoint
(async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    rawBody: true,
  });
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  await app.listen(3000);
  const appUrl = await app.getUrl();
  console.log(`GaphqlServer listenning on: ${appUrl} 🫧 🫧`);
})();
