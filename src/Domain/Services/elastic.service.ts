import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { GetSearchQuery } from 'src/Application/Elasticsearch/Queries/Impl/get-search.query';

@Injectable()
export class ElasticsearchService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getSearch() {
    return this.queryBus.execute(new GetSearchQuery());
  }
}
