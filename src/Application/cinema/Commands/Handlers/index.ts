import { CreateScreeningHandler } from './create-screening.handler';
import { CreateScreeningsHandler } from './create-screenings.handler';
import { DeleteScreeningHandler } from './delete-screening.handler';
import { UpdateScreeningHandler } from './update-screening.handler';

export const CommandHandlers = [
  CreateScreeningHandler,
  CreateScreeningsHandler,
  DeleteScreeningHandler,
  UpdateScreeningHandler,
];
