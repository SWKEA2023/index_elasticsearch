import { CommandHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CreateMovieCommand } from '../Impl/create-movie.command';

@CommandHandler(CreateMovieCommand)
export class CreateMovieHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: CreateMovieCommand): Promise<void> {
    await this.esService.index({
      index: 'movies',
      id: command.movie.movieId.toString(),
      document: {
        ...command.movie,
      },
    });
  }
}
