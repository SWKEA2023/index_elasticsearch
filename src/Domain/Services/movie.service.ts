import { Injectable } from '@nestjs/common';
import { Movie } from '../Entities/movie.entity';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMoviesCommand } from 'src/Application/movie/Commands/Impl/create-movies.command';
import { DeleteMovieCommand } from 'src/Application/movie/Commands/Impl/delete-movie.command';
import { UpdateMovieCommand } from 'src/Application/movie/Commands/Impl/update-movie.command';
import { CreateMovieCommand } from 'src/Application/movie/Commands/Impl/create-movie.command';

@Injectable()
export class MovieService {
  constructor(private readonly commandBus: CommandBus) {}

  createMovie(movie: Movie) {
    return this.commandBus.execute(new CreateMovieCommand(movie));
  }

  createMovies(movies: Movie[]) {
    return this.commandBus.execute(new CreateMoviesCommand(movies));
  }

  update(movie: Movie) {
    return this.commandBus.execute(new UpdateMovieCommand(movie));
  }

  deleteMovie(id: number) {
    return this.commandBus.execute(new DeleteMovieCommand(id));
  }
}
