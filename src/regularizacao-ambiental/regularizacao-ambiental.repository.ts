import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class RegularizacaoAmbientalRepository {
  constructor(private readonly prisma: PrismaService) { }

  create = this.prisma.regularizacaoAmbiental.create;

  createMany = this.prisma.regularizacaoAmbiental.createMany;

  getAll = this.prisma.regularizacaoAmbiental.findMany;

  get = this.prisma.regularizacaoAmbiental.findUnique;

  update = this.prisma.regularizacaoAmbiental.update;

  updateMany = this.prisma.regularizacaoAmbiental.updateMany;

  delete = this.prisma.regularizacaoAmbiental.delete;

  upsert = this.prisma.regularizacaoAmbiental.upsert;

  count = this.prisma.regularizacaoAmbiental.count;
}