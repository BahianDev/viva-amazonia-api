import { Module } from '@nestjs/common';
import { RegularizacaoAmbientalController } from './regularizacao-ambiental.controller';
import { PrismaService } from 'src/common/prisma.service';
import { RegularizacaoAmbientalRepository } from './regularizacao-ambiental.repository';
import { RegularizacaoAmbientalService } from './regularizacao-ambiental.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  controllers: [RegularizacaoAmbientalController],
  providers: [PrismaService, RegularizacaoAmbientalService, RegularizacaoAmbientalRepository, UserRepository],
  exports: [RegularizacaoAmbientalRepository],
})
export class RegularizacaoAmbientalModule { }
