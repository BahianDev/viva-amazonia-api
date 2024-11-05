import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class PlanoProdutivoRepository {
  constructor(private readonly prisma: PrismaService) { }

  create = this.prisma.planoProdutivo.create;

  createMany = this.prisma.planoProdutivo.createMany;

  getAll = this.prisma.planoProdutivo.findMany;

  get = this.prisma.planoProdutivo.findUnique;

  update = this.prisma.planoProdutivo.update;

  updateMany = this.prisma.planoProdutivo.updateMany;

  delete = this.prisma.planoProdutivo.delete;

  upsert = this.prisma.planoProdutivo.upsert;

  count = this.prisma.planoProdutivo.count;
}