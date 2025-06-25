import { Controller, Get, Param } from '@nestjs/common';
import { HopeGreenService } from './hope-green.service';

@Controller('hope-green')
export class HopeGreenController {
  constructor(private readonly hopeGreenService: HopeGreenService) {}

  @Get()
  getActiveListings() {
    return this.hopeGreenService.getActiveListings();
  }

  @Get('listings/:id')
  getListingById(@Param('id') id: string) {
    return this.hopeGreenService.getListingById(Number(id));
  }

  @Get('wallet/:address')
  getNFTsByOwner(@Param('address') address: string) {
    return this.hopeGreenService.getNFTsByOwner(address);
  }
}
