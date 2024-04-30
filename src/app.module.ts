import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './Application/movie/movie.module';
@Module({
  imports: [ConfigModule.forRoot(), MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
