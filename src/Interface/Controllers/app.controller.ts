import { Controller } from '@nestjs/common';
import { AppService } from '../../Domain/Services/app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('created_que')
  handleOrderPlaced(@Payload() data: string) {
    console.log('data:', data);

    return null;
  }

  // @EventPattern('Elastic_QUEUE')
  // getNotifications(@Payload() data: string) {
  //   console.log('data', data);
  // }
}
