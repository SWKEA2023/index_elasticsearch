import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MovieService } from '../../Domain/Services/movie.service';
import { Movie } from 'src/Domain/Entities/movie.entity';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @MessagePattern('insert_movies')
  createMovies(@Payload() movies: Movie[]) {
    console.log('movies:', movies);

    return this.movieService.createMovies(movies);
  }

  // @MessagePattern('updateMovie')
  // update(@Payload() movie: Movie) {
  //   return this.movieService.update(movie.movieId, movie);
  // }

  @MessagePattern('movie_deleted')
  remove(@Payload() id: number) {
    console.log('id:', id);

    // Admin api needs to send the id of the movie to be deleted
    // return this.movieService.deleteMovie(1);
  }
}
