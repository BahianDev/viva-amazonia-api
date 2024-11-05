import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class RegularizacaoFundiariaRepository {
  constructor(private readonly prisma: PrismaService) { }

  create = this.prisma.regularizacaoFundiaria.create;

  createMany = this.prisma.regularizacaoFundiaria.createMany;

  getAll = this.prisma.regularizacaoFundiaria.findMany;

  get = this.prisma.regularizacaoFundiaria.findUnique;

  update = this.prisma.regularizacaoFundiaria.update;

  updateMany = this.prisma.regularizacaoFundiaria.updateMany;

  delete = this.prisma.regularizacaoFundiaria.delete;

  upsert = this.prisma.regularizacaoFundiaria.upsert;

  count = this.prisma.regularizacaoFundiaria.count;
}