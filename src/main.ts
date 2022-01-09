import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.NODE_ENV)
  const app = await NestFactory.create(
    AppModule,
    // {
    //   logger: ['error', 'warn', 'debug']
    // }
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
