import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MovieService } from '../../Domain/Services/movie.service';
import { Movie } from 'src/Domain/Entities/movie.entity';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @MessagePattern('InsertMovies')
  createMovies(@Payload() movies: Movie[]) {
    console.log('movies:', movies);

    return this.movieService.createMovies(movies);
  }

  // @MessagePattern('findAllMovie')
  // findAll() {
  //   return this.movieService.findAll();
  // }

  // @MessagePattern('findOneMovie')
  // findOne(@Payload() id: number) {
  //   return this.movieService.findOne(id);
  // }

  // @MessagePattern('updateMovie')
  // update(@Payload() movie: Movie) {
  //   return this.movieService.update(movie.movieId, movie);
  // }

  // @MessagePattern('removeMovie')
  // remove(@Payload() id: number) {
  //   return this.movieService.remove(id);
  // }
}
