import { Module } from '@nestjs/common';
import { PlanoProdutivoController } from './plano-produtivo.controller';
import { PrismaService } from 'src/common/prisma.service';
import { PlanoProdutivoService } from './plano-produtivo.service';
import { PlanoProdutivoRepository } from './plano-produtivo.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
  controllers: [PlanoProdutivoController],
  providers: [PrismaService, PlanoProdutivoService, PlanoProdutivoRepository, UserRepository],
  exports: [PlanoProdutivoRepository],
})
export class PlanoProdutivoModule { }
