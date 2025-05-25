import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsheadersInterceptor } from './corsheaders/corsheaders.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CorsheadersInterceptor())
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
