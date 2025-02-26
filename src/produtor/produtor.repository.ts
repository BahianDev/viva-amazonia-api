import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ProdutorRepository {
  constructor(private readonly prisma: PrismaService) {}

  create = this.prisma.produtor.create;

  createMany = this.prisma.produtor.createMany;

  getAll = this.prisma.produtor.findMany;

  get = this.prisma.produtor.findUnique;

  update = this.prisma.produtor.update;

  updateMany = this.prisma.produtor.updateMany;

  delete = this.prisma.produtor.delete;

  upsert = this.prisma.produtor.upsert;

  count = this.prisma.produtor.count;
}
