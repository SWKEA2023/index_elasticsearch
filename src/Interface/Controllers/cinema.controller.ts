import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CinemaService } from '../../Domain/Services/cinema.service';
import { Cinema } from 'src/Domain/Entities/cinema.entity';

@Controller()
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @MessagePattern('createCinema')
  create(@Payload() cinema: Cinema) {
    cinema;

    // Change when adminAPI is ready
    const c = {
      screeningId: 1,
      date: '2024-04-15T11:18:13.000Z',
      startTime: '2024-04-15T11:18:13.000Z',
      endTime: '2024-04-15T11:18:13.000Z',
      createdAt: '2024-04-15T11:19:25.000Z',
      hall: {
        hallId: 4,
        hallName: 'string',
        seatRows: 0,
        seatNumber: 0,
      },
      movie: {
        pegi: 0,
        year: 0,
        title: 'string',
        movieId: 66,
        director: 'string',
        duration: 0,
        imageURL: 'string',
        language: 'string',
        trailerURL: 'string',
      },
    };

    return this.cinemaService.create(c);
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

// {
//   "screeningId": 1,
//   "date": "2024-04-15T11:18:13.000Z",
//   "startTime": "2024-04-15T11:18:13.000Z",
//   "endTime": "2024-04-15T11:18:13.000Z",
//   "createdAt": "2024-04-15T11:19:25.000Z",
//   "hall": {
//       "hallId": 4,
//       "hallName": "string",
//       "seatRows": 0,
//       "seatNumber": 0
//   },
//   "movie": {
//       "pegi": 0,
//       "year": 0,
//       "title": "string",
//       "movieId": 66,
//       "director": "string",
//       "duration": 0,
//       "imageURL": "string",
//       "language": "string",
//       "trailerURL": "string"
//   }
// }
