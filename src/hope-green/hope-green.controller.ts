import { Controller, Get } from '@nestjs/common';
import { HopeGreenService } from './hope-green.service';

@Controller('hope-green')
export class HopeGreenController {
  constructor(private readonly hopeGreenService: HopeGreenService) {}

  @Get()
  getActiveListings() {
    return this.hopeGreenService.getActiveListings();
  }
}
