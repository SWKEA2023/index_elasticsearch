import { Screening } from "src/Domain/Entities/screening.entity";

export class UpdateScreeningCommand {
  constructor(public screening: Screening) {}
}
