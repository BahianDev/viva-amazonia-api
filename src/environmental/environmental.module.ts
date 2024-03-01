import { Module } from '@nestjs/common';
import { EnvironmentalController } from './environmental.controller';
import { PrismaService } from 'src/common/prisma.service';
import { EnvironmentalRepository } from './environmental.repository';
import { EnvironmentalService } from './environmental.service';

@Module({
  controllers: [EnvironmentalController],
  providers: [PrismaService, EnvironmentalService, EnvironmentalRepository],
  exports: [EnvironmentalRepository],
})
export class EnvironmentalModule {}
