import { Module } from '@nestjs/common';
import { RegularizacaoFundiariaController } from './regularizacao-fundiaria.controller';
import { PrismaService } from 'src/common/prisma.service';
import { RegularizacaoFundiariaRepository } from './regularizacao-fundiaria.repository';
import { RegularizacaoFundiariaService } from './regularizacao-fundiaria.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
    controllers: [RegularizacaoFundiariaController],
    providers: [PrismaService, RegularizacaoFundiariaService, RegularizacaoFundiariaRepository, UserRepository],
    exports: [RegularizacaoFundiariaRepository],
})
export class RegularizacaoFundiariaModule { }
