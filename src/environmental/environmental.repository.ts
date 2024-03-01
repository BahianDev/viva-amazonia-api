import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class EnvironmentalRepository {
  constructor(private readonly prisma: PrismaService) {}

  create = this.prisma.environmental.create;

  createMany = this.prisma.environmental.createMany;

  getAll = this.prisma.environmental.findMany;

  get = this.prisma.environmental.findUnique;

  update = this.prisma.environmental.update;

  updateMany = this.prisma.environmental.updateMany;

  delete = this.prisma.environmental.delete;

  upsert = this.prisma.environmental.upsert;

  count = this.prisma.environmental.count;
}