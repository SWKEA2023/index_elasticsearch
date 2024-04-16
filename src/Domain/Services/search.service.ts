import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { GetSearchQuery } from 'src/Application/Search/Queries/Impl/get-search.query';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SearchService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}

  async search(q: string) {
    const result = await this.esService.search({
      index: this.configService.get('ES_INDEX_TARGET'),
      q: q,
      // body: {
      //   query: {
      //     match: {
      //       title: q,
      //     },
      //   },
      // },
    });

    return result.hits.hits;
  }

  async getSearch() {
    return this.queryBus.execute(new GetSearchQuery());
  }
}
