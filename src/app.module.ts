import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerModule } from './Application/Consumer/consumer.module';
import { MovieModule } from './Application/movie/movie.module';
@Module({
  imports: [ConfigModule.forRoot(), ConsumerModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
