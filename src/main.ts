import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  origin: true, // Allow all origins, or specify a domain like 'https://example.com'
  methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['*'], // Allowed headers
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression()); // use compression to improve speed
  app.enableCors(corsOptions);
  // Enable CORS with the defined options
  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('Data Lens example')
    .setDescription('The Data Lens API description')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
