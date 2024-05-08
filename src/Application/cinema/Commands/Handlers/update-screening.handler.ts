import { CommandHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { UpdateScreeningCommand } from '../Impl/update-screening.command';

@CommandHandler(UpdateScreeningCommand)
export class UpdateScreeningHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: UpdateScreeningCommand): Promise<void> {
    const screening = await this.esService.search({
      index: 'screenings',
      body: {
        query: {
          match: {
            screeningId: command.screening.screeningId,
          },
        },
      },
    });

    // Feature: Add a logger
    if (0 === screening.hits.hits.length) {
      console.log('Update: Screening not found');
      return;
    }

    this.esService.update({
      index: 'screenings',
      id: screening.hits.hits[0]._id,
      body: {
        doc: command.screening,
      },
    });
  }
}
