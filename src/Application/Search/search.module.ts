import { Module } from '@nestjs/common';
import { SearchService } from 'src/Domain/Services/search.service';
import { ElasticsearchController } from 'src/Interface/Controllers/search.controller';
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
  providers: [SearchService, ...QueryHandlers, ...CommandHandlers],
  controllers: [ElasticsearchController],
})
export class ElasticModule {}
