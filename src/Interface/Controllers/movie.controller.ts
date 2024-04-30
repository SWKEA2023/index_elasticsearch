import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MovieService } from '../../Domain/Services/movie.service';
import { Movie } from 'src/Domain/Entities/movie.entity';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @MessagePattern('movie_created')
  createMovie(@Payload() movie: Movie) {
    console.log('movie:', movie);
    return this.movieService.createMovie(movie);
  }

  @MessagePattern('insert_movies')
  createMovies(@Payload() movies: Movie[]) {
    return this.movieService.createMovies(movies);
  }

  @MessagePattern('movie_updated')
  update(@Payload() movie: Movie) {
    console.log('movie:', movie);

    return this.movieService.update(movie);
  }

  @MessagePattern('movie_deleted')
  remove(@Payload() id: number) {
    return this.movieService.deleteMovie(id);
  }
}
