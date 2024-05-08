import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create = this.prisma.user.create;

  createMany = this.prisma.user.createMany;

  getAll = this.prisma.user.findMany;

  get = this.prisma.user.findUnique;

  update = this.prisma.user.update;

  updateMany = this.prisma.user.updateMany;

  delete = this.prisma.user.delete;

  upsert = this.prisma.user.upsert;

  count = this.prisma.user.count;
}