import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//your-domain.com if only controller like this
//@controller('users) -> your-domain.com/users
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
