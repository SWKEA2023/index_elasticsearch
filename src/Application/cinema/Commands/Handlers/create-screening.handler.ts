import { CommandHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CreateScreeningCommand } from '../Impl/create-screening.command';

@CommandHandler(CreateScreeningCommand)
export class CreateScreeningHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: CreateScreeningCommand): Promise<void> {
    await this.esService.index({
      index: 'screenings',
      id: command.screening.screeningId.toString(),
      document: {
        ...command.screening,
      },
    });
  }
}
