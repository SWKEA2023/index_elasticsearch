import { Injectable } from '@nestjs/common';
import { Cinema } from '../Entities/cinema.entity';

@Injectable()
export class CinemaService {
  create(cinema: Cinema) {
    cinema;
    return 'This action adds a new cinema';
  }

  update(cinema: Cinema) {
    return `This action updates a #${cinema} cinema`;
  }

  delete(id: number) {
    return `This action removes a #${id} cinema`;
  }
}
