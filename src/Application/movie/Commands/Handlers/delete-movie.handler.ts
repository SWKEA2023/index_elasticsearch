import { CommandHandler } from '@nestjs/cqrs';
import { DeleteMovieCommand } from '../Impl/delete-movie.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@CommandHandler(DeleteMovieCommand)
export class DeleteMovieHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: DeleteMovieCommand): Promise<void> {
    const movie = await this.esService.search({
      index: 'movies',
      body: {
        query: {
          match: {
            id: command.id,
          },
        },
      },
    });

    this.esService.delete({
      index: 'movies',
      id: movie.hits.hits[0]._id,
    });
  }
}
