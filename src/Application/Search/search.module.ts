import { Module } from '@nestjs/common';
import { SearchService } from 'src/Domain/Services/search.service';
import { ElasticsearchController } from 'src/Interface/Controllers/search.controller';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import * as fs from 'fs';

@Module({
  imports: [
    CqrsModule,
    ElasticsearchModule.register({
      node: 'https://localhost:9200',
      auth: {
        // Books API key
        // apiKey: 'MDRndzNvNEJGOHVRUnBIdDNwQ3A6bHZpRm1oMXRTZ1dkV20yM1d1QVhJdw=='

        // Movies API key
        apiKey: 'MzRnNTNvNEJGOHVRUnBIdDZaRG86eHBrRkZISVhTQnFnT1dOcUMwaFV4Zw==',
      },
      tls: {
        ca: fs.readFileSync('http_ca.crt'),
        rejectUnauthorized: false,
      },
    }),
  ],
  providers: [SearchService, ...QueryHandlers, ...CommandHandlers],
  controllers: [ElasticsearchController],
})
export class ElasticModule {}
