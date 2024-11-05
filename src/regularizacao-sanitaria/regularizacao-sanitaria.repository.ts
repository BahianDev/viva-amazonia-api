import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class RegularizacaoSanitariaRepository {
    constructor(private readonly prisma: PrismaService) { }

    create = this.prisma.regularizacaoSanitaria.create;

    createMany = this.prisma.regularizacaoSanitaria.createMany;

    getAll = this.prisma.regularizacaoSanitaria.findMany;

    get = this.prisma.regularizacaoSanitaria.findUnique;

    update = this.prisma.regularizacaoSanitaria.update;

    updateMany = this.prisma.regularizacaoSanitaria.updateMany;

    delete = this.prisma.regularizacaoSanitaria.delete;

    upsert = this.prisma.regularizacaoSanitaria.upsert;

    count = this.prisma.regularizacaoSanitaria.count;
}