import { Injectable } from '@nestjs/common';
import { Screening } from '../Entities/screening.entity';
import { CommandBus } from '@nestjs/cqrs';
import { CreateScreeningsCommand } from 'src/Application/cinema/Commands/Impl/create-screenings.command';

@Injectable()
export class ScreeningService {
  constructor(private readonly commandBus: CommandBus) {}

  createScreenings(screenings: Screening[]) {
    return this.commandBus.execute(new CreateScreeningsCommand(screenings));
  }

  create(screening: Screening) {
    screening;
    return 'This action adds a new screening';
  }

  update(screening: Screening) {
    return `This action updates a #${screening} screening`;
  }

  delete(id: number) {
    return `This action removes a #${id} screening`;
  }
}
