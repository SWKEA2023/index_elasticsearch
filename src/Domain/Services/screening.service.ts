import { Injectable } from '@nestjs/common';
import { Screening } from '../Entities/screening.entity';
import { CommandBus } from '@nestjs/cqrs';
import { CreateScreeningsCommand } from 'src/Application/cinema/Commands/Impl/create-screenings.command';
import { CreateScreeningCommand } from 'src/Application/cinema/Commands/Impl/create-screening.command';
import { UpdateScreeningCommand } from 'src/Application/cinema/Commands/Impl/update-screening.command';
import { DeleteScreeningCommand } from 'src/Application/cinema/Commands/Impl/delete-screening.command';

@Injectable()
export class ScreeningService {
  constructor(private readonly commandBus: CommandBus) {}

  createScreenings(screenings: Screening[]) {
    return this.commandBus.execute(new CreateScreeningsCommand(screenings));
  }

  create(screening: Screening) {
    return this.commandBus.execute(new CreateScreeningCommand(screening));
  }

  update(screening: Screening) {
    return this.commandBus.execute(new UpdateScreeningCommand(screening));
  }

  delete(id: number) {
    return this.commandBus.execute(new DeleteScreeningCommand(id));
  }
}
