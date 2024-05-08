import { Screening } from 'src/Domain/Entities/screening.entity';

export class CreateScreeningCommand {
  constructor(public screening: Screening) {}
}
