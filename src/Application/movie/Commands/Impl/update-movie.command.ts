import { Movie } from 'src/Domain/Entities/movie.entity';

export class UpdateMovieCommand {
  constructor(public movie: Movie) {}
}
