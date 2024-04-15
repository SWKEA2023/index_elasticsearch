import { Module } from '@nestjs/common';
import { AppController } from './Interface/Controllers/app.controller';
import { AppService } from './Domain/Services/app.service';
import { ConfigModule } from '@nestjs/config';
import { ElasticModule } from './Application/Search/search.module';
@Module({
  imports: [ConfigModule.forRoot(), ElasticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
