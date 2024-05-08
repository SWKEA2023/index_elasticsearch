import { CommandHandler } from '@nestjs/cqrs';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CreateScreeningsCommand } from '../Impl/create-screenings.command';

@CommandHandler(CreateScreeningsCommand)
export class CreateScreeningsHandler {
  constructor(private readonly esService: ElasticsearchService) {}

  async execute(command: CreateScreeningsCommand): Promise<void> {
    this.esService.helpers.bulk({
      datasource: command.screenings,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onDocument: (doc) => ({ index: { _index: 'screenings' } }),
    });
  }
}
