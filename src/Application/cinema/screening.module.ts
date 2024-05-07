import { Module } from '@nestjs/common';
import { ScreeningController } from '../../Interface/Controllers/screening.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
//import * as fs from 'fs';
import { CommandHandlers } from './Commands/Handlers';
import { ScreeningService } from 'src/Domain/Services/screening.service';

@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTIC_HOST'),
        auth: {
          username: configService.get('ELASTIC_USERNAME'),
          password: configService.get('ELASTIC_PASSWORD'),
        },
        tls: {
          // ca: fs.readFileSync('files/http_ca.crt'),
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
  controllers: [ScreeningController],
  providers: [ScreeningService, ...CommandHandlers],
})
export class ScreeningModule {}
