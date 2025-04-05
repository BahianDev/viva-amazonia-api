import { Controller, Get, Param } from '@nestjs/common';
import { HopeGreenService } from './hope-green.service';

@Controller('hope-green')
export class HopeGreenController {
  constructor(private readonly hopeGreenService: HopeGreenService) {}

  @Get()
  getActiveListings() {
    return this.hopeGreenService.getActiveListings();
  }

  @Get(':id')
  getListingById(@Param('id') id: string) {
    return this.hopeGreenService.getListingById(id);
  }
}
