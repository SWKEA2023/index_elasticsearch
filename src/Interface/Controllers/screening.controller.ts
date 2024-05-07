import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScreeningService as ScreeningService } from '../../Domain/Services/screening.service';
import { Screening } from 'src/Domain/Entities/screening.entity';

@Controller()
export class ScreeningController {
  constructor(private readonly screeningService: ScreeningService) {}

  @MessagePattern('screenings_list')
  createScreenings(@Payload() screenings: Screening[]) {
    screenings;

    // Change when adminAPI is ready
    // const c = {
    //   screeningId: 1,
    //   date: '2024-04-15T11:18:13.000Z',
    //   startTime: '2024-04-15T11:18:13.000Z',
    //   endTime: '2024-04-15T11:18:13.000Z',
    //   createdAt: '2024-04-15T11:19:25.000Z',
    //   hall: {
    //     hallId: 4,
    //     hallName: 'string',
    //     seatRows: 0,
    //     seatNumber: 0,
    //   },
    //   movie: {
    //     pegi: 0,
    //     year: 0,
    //     title: 'string',
    //     movieId: 66,
    //     director: 'string',
    //     duration: 0,
    //     imageURL: 'string',
    //     language: 'string',
    //     trailerURL: 'string',
    //   },
    // };

    return this.screeningService.createScreenings(screenings);
  }

  @MessagePattern('screening_created')
  create(@Payload() screening: Screening) {
    screening;

    return this.screeningService.create(screening);
  }

  @MessagePattern('screening_updated')
  update(@Payload() screening: Screening) {
    return this.screeningService.update(screening);
  }

  @MessagePattern('screening_deleted')
  remove(@Payload() id: number) {
    return this.screeningService.delete(id);
  }
}
