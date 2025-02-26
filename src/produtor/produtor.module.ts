import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { ProdutorController } from './produtor.controller';
import { ProdutorService } from './produtor.service';
import { ProdutorRepository } from './produtor.repository';

@Module({
  controllers: [ProdutorController],
  providers: [PrismaService, ProdutorService, ProdutorRepository],
  exports: [ProdutorRepository],
})
export class ProdutorModule {}
