import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumerService } from '../../Domain/Services/consumer.service';
import { Movie } from 'src/Domain/Entities/movie.entity';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('create_movie')
  create(@Payload() movie: Movie) {
    // console.log('movie:', movie[0]);
    return this.consumerService.createMovie(movie);
  }

  // @MessagePattern('findAllConsumer')
  // findAll() {
  //   return this.consumerService.findAll();
  // }

  // @MessagePattern('findOneConsumer')
  // findOne(@Payload() id: number) {
  //   return this.consumerService.findOne(id);
  // }

  // @MessagePattern('updateConsumer')
  // update(@Payload() updateConsumerDto: UpdateConsumerDto) {
  //   return this.consumerService.update(updateConsumerDto.id, updateConsumerDto);
  // }

  // @MessagePattern('removeConsumer')
  // remove(@Payload() id: number) {
  //   return this.consumerService.remove(id);
  // }
}
