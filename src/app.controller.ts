import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.hello();
  }

  @Post()
  greeting(@Body('name') name: string): string {
    return this.appService.greeting(name);
  }
}
