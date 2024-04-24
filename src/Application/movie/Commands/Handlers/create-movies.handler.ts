import { CommandHandler } from '@nestjs/cqrs';
import { CreateMoviesCommand as CreateMoviesCommand } from '../Impl/create-movies.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@CommandHandler(CreateMoviesCommand)
export class CreateMoviesHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: CreateMoviesCommand): Promise<void> {
    this.esService.helpers.bulk({
      datasource: command.movies,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onDocument: (doc) => ({ index: { _index: 'movies' } }),
    });
    // const result = await client.helpers.bulk({
    //   datasource: dataset,
    //   onDocument: (doc) => ({ index: { _index: 'index_name' } }),
    // });
  }
}
