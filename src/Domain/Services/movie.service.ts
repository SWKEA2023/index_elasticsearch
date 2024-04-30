import { Injectable } from '@nestjs/common';
import { Movie } from '../Entities/movie.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMoviesCommand } from 'src/Application/movie/Commands/Impl/create-movies.command';
import { DeleteMovieCommand } from 'src/Application/movie/Commands/Impl/delete-movie.command';

@Injectable()
export class MovieService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  createMovies(movies: Movie[]) {
    this.commandBus.execute(new CreateMoviesCommand(movies));
    return 'This action adds a new movie list';
  }

  // findAll() {
  //   return `This action returns all movie`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} movie`;
  // }

  // update(id: number, movie: Movie) {
  //   return `This action updates a #${id} movie`;
  // }

  deleteMovie(id: number) {
    return this.commandBus.execute(new DeleteMovieCommand(id));
  }
}
