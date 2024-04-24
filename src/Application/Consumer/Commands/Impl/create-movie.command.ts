import { Movie } from "src/Domain/Entities/movie.entity";
export class CreateMovieCommand {
  constructor(public movie: Movie) {}
}
