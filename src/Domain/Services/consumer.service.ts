import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMovieCommand } from 'src/Application/Consumer/Commands/Impl/create-movie.command';
import { Movie } from 'src/Domain/Entities/Movie.entiry';

@Injectable()
export class ConsumerService {
  constructor(private readonly commandBus: CommandBus) {}

  createMovie(movie: Movie) {
    this.commandBus.execute(new CreateMovieCommand(movie));
    return 'This action adds a new consumer';
  }

  // findAll() {
  //   return `This action returns all consumer`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} consumer`;
  // }

  // update(id: number, updateConsumer: UpdateConsumer) {
  //   return `This action updates a #${id} consumer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} consumer`;
  // }
}
