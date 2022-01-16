import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/s3")
  async getSignedS3(): Promise<string>{
    const url = this.appService.getSignedS3URL()
    return url;
  }

}
