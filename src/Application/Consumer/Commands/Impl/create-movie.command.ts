import { Movie } from 'src/Domain/Entities/Movie.entiry';

export class CreateMovieCommand {
  constructor(public movie: Movie) {}
}
