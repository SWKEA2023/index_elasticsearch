import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './Application/movie/movie.module';
import { ScreeningModule } from './Application/cinema/screening.module';
@Module({
  imports: [ConfigModule.forRoot(), MovieModule, ScreeningModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
