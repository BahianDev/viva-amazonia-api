import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ProductionRepository {
  constructor(private readonly prisma: PrismaService) {}

  create = this.prisma.production.create;

  createMany = this.prisma.production.createMany;

  getAll = this.prisma.production.findMany;

  get = this.prisma.production.findUnique;

  update = this.prisma.production.update;

  updateMany = this.prisma.production.updateMany;

  delete = this.prisma.production.delete;

  upsert = this.prisma.production.upsert;

  count = this.prisma.production.count;
}