import { Module } from '@nestjs/common';
import { ProductionController } from './production.controller';
import { PrismaService } from 'src/common/prisma.service';
import { ProductionService } from './production.service';
import { ProductionRepository } from './production.repository';

@Module({
  controllers: [ProductionController],
  providers: [PrismaService, ProductionService, ProductionRepository],
  exports: [ProductionRepository],
})
export class ProductionModule {}
