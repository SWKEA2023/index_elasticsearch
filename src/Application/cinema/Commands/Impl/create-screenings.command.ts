import { Screening } from "src/Domain/Entities/screening.entity";

export class CreateScreeningsCommand {
  constructor(public screenings: Screening[]) {}
}
