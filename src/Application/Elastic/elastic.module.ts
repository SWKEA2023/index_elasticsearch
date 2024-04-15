import { Module } from '@nestjs/common';
import { ElasticsearchService } from 'src/Domain/Services/elastic.service';
import { ElasticsearchController } from 'src/Interface/Controllers/elastic.controller';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    CqrsModule,
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  providers: [ElasticsearchService, ...QueryHandlers, ...CommandHandlers],
  controllers: [ElasticsearchController],
})
export class ElasticModule {}
