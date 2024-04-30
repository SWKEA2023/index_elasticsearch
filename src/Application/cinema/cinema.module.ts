import { Module } from '@nestjs/common';
import { CinemaService } from '../../Domain/Services/cinema.service';
import { CinemaController } from '../../Interface/Controllers/cinema.controller';

@Module({
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
