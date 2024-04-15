import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSearchQuery } from '../Impl/get-search.query';

@QueryHandler(GetSearchQuery)
export class GetSearchHandler implements IQueryHandler<GetSearchQuery> {
  async execute(query: GetSearchQuery) {
    query;
    return 'Hello World!';
  }
}
