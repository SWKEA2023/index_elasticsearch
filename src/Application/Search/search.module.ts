import { Module } from '@nestjs/common';
import { SearchService } from 'src/Domain/Services/search.service';
import { ElasticsearchController } from 'src/Interface/Controllers/search.controller';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        node: 'https://localhost:9200',
        auth: {
          username: configService.get('ES_USERNAME'),
          password: configService.get('ES_PASSWORD'),
        },
        tls: {
          ca: fs.readFileSync('files/http_ca.crt'),
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
  providers: [SearchService, ...QueryHandlers, ...CommandHandlers],
  controllers: [ElasticsearchController],
})
export class ElasticModule {}
