import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './Application/movie/movie.module';
import { CinemaModule } from './Application/cinema/cinema.module';
@Module({
  imports: [ConfigModule.forRoot(), MovieModule, CinemaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
