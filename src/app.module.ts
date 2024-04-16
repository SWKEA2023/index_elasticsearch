import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerModule } from './Application/Consumer/consumer.module';
@Module({
  imports: [ConfigModule.forRoot(), ConsumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
