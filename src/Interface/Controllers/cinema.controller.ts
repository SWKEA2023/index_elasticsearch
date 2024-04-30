import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CinemaService } from '../../Domain/Services/cinema.service';
import { Cinema } from 'src/Domain/Entities/cinema.entity';

@Controller()
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @MessagePattern('createCinema')
  create(@Payload() cinema: Cinema) {
    return this.cinemaService.create(cinema);
  }

  @MessagePattern('updateCinema')
  update(@Payload() cinema: Cinema) {
    return this.cinemaService.update(cinema);
  }

  @MessagePattern('removeCinema')
  remove(@Payload() id: number) {
    return this.cinemaService.delete(id);
  }
}
