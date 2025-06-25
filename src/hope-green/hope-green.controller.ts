import { Controller, Get, Param, Query } from '@nestjs/common';
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
  getNFTsByOwner(
    @Param('address') address: string,
    @Query('page') page = '1',
    @Query('pageSize') pageSize = '10',
  ) {
    const p = parseInt(page, 10);
    const size = parseInt(pageSize, 10);
    return this.hopeGreenService.getNFTsByOwner(address, p, size);
  }
}
