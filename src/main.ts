import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: ["http:localhost:3000","https://buzz-client.vercel.app","https://buzz-client.netlify.app"]
  })
  await app.listen(3001);
}
bootstrap();
