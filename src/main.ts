import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGENES?.split(',') ?? [
      'http://localhost:3005',
      'http://localhost:3000',
    ],
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const documento = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Inca Travel Peru API')
      .setDescription('API de transporte turístico y tours')
      .setVersion('1.0')
      .addBearerAuth()
      .build(),
  );
  SwaggerModule.setup('api/documentacion', app, documento);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
