import { Module } from '@nestjs/common';
import { MovieService } from '../../Domain/Services/movie.service';
import { MovieController } from '../../Interface/Controllers/movie.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import * as fs from 'fs';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';

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
  controllers: [MovieController],
  providers: [MovieService, ...CommandHandlers, ...QueryHandlers],
})
export class MovieModule {}
