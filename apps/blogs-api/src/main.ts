import { NestFactory } from '@nestjs/core';
import { BlogsModule } from './blogs.module';

async function bootstrap() {
  const app = await NestFactory.create(BlogsModule);
  await app.listen(3002);
}
bootstrap();
