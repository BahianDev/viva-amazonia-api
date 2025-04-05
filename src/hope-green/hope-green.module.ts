import { Module } from '@nestjs/common';
import { HopeGreenService } from './hope-green.service';
import { HopeGreenController } from './hope-green.controller';


@Module({
  controllers: [HopeGreenController],
  providers: [HopeGreenService],
  exports: [],
})
export class HopeGreenModule {}
