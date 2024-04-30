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

    // Feater: Add a logger
    if (0 === movie.hits.hits.length) {
      console.log('Detele: Movie not found');
      return;
    }

    this.esService.delete({
      index: 'movies',
      id: movie.hits.hits[0]._id,
    });
  }
}
