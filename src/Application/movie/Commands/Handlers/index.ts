import { CreateMovieHandler } from './create-movie.handler';
import { CreateMoviesHandler } from './create-movies.handler';
import { DeleteMovieHandler } from './delete-movie.handler';
import { UpdateMovieHandler } from './update-movie.handler';

export const CommandHandlers = [
  CreateMovieHandler,
  CreateMoviesHandler,
  DeleteMovieHandler,
  UpdateMovieHandler,
];
