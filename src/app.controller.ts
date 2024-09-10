import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { warn } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Delete()
  getHello(): string {
    return 'jong';
  }
}
