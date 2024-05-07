import { CommandHandler } from '@nestjs/cqrs';
import { DeleteScreeningCommand } from '../Impl/delete-screening.command';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@CommandHandler(DeleteScreeningCommand)
export class DeleteScreeningHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: DeleteScreeningCommand): Promise<void> {
    const movie = await this.esService.search({
      index: 'screenings',
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
      console.log('Detele: screening not found');
      return;
    }

    this.esService.delete({
      index: 'screenings',
      id: movie.hits.hits[0]._id,
    });
  }
}
