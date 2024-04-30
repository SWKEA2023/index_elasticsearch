import { CommandHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { UpdateMovieCommand } from '../Impl/update-movie.command';

@CommandHandler(UpdateMovieCommand)
export class UpdateMovieHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: UpdateMovieCommand): Promise<void> {
    const movie = await this.esService.search({
      index: 'movies',
      body: {
        query: {
          match: {
            movieId: command.movie.movieId,
          },
        },
      },
    });

    // Feater: Add a logger
    if (0 === movie.hits.hits.length) {
      console.log('Update: Movie not found');
      return;
    }

    this.esService.update({
      index: 'movies',
      id: movie.hits.hits[0]._id,
      body: {
        doc: command.movie,
      },
    });
  }
}
