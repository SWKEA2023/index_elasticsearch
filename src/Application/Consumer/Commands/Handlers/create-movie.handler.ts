import { CommandHandler } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../Impl/create-movie.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@CommandHandler(CreateMovieCommand)
export class CreateMovieHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  public async execute(command: CreateMovieCommand): Promise<void> {
    console.log('command:', command.movie[0]);

    await this.esService.index({
      index: 'movies',
      body: command.movie[0],
    });
  }
}
