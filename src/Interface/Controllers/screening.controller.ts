import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScreeningService as ScreeningService } from '../../Domain/Services/screening.service';
import { Screening } from 'src/Domain/Entities/screening.entity';

@Controller()
export class ScreeningController {
  constructor(private readonly screeningService: ScreeningService) {}

  @MessagePattern('screenings_list')
  createScreenings(@Payload() screenings: Screening[]) {
    return this.screeningService.createScreenings(screenings);
  }

  @MessagePattern('screening_created')
  create(@Payload() screening: Screening) {
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
