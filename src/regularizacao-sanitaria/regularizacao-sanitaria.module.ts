import { Module } from '@nestjs/common';
import { RegularizacaoSanitariaController } from './regularizacao-sanitaria.controller';
import { PrismaService } from 'src/common/prisma.service';
import { RegularizacaoSanitariaService } from './regularizacao-sanitaria.service';
import { RegularizacaoSanitariaRepository } from './regularizacao-sanitaria.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
    controllers: [RegularizacaoSanitariaController],
    providers: [PrismaService, RegularizacaoSanitariaService, RegularizacaoSanitariaRepository, UserRepository],
    exports: [RegularizacaoSanitariaRepository],
})
export class RegularizacaoSanitariaModule { }
