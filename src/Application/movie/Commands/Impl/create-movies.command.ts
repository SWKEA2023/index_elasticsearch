import { Movie } from 'src/Domain/Entities/movie.entity';

export class CreateMoviesCommand {
  constructor(public movies: Movie[]) {}
}
