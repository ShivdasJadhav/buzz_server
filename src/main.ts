import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: ["https://shivs-buzz.vercel.app","https://nextpractices-5pfmxi0qo-shivdasjadhav.vercel.app"]
  })
  await app.listen(3001);
}
bootstrap();
