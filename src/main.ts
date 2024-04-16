import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [configService.get('RMQ_URL') as string],
        queue: configService.get('RMQ_QUEUE'),
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
