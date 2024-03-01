import { Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { ProductionRepository } from './production.repository';

@Injectable()
export class ProductionService {

  constructor(private readonly productionRepository: ProductionRepository) {}
  
  async create(createProductionDto: CreateProductionDto) {
    const { type, cycle, sizePlantedArea, datePlantedArea } =
      createProductionDto;

    const production = await this.productionRepository.create({
      data: {
        type,
        cycle,
        sizePlantedArea,
        datePlantedArea,
      },
    });
    return production;
  }

  async getAll() {
    const productions = await this.productionRepository.getAll();
    return productions;
  }
}
