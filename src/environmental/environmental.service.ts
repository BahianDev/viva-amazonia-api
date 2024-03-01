import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { EnvironmentalRepository } from './environmental.repository';

@Injectable()
export class EnvironmentalService {
  constructor(
    private readonly environmentalRepository: EnvironmentalRepository,
  ) {}

  async create(createDto: CreateDto) {
    const { carNumber, isLegalReserve } = createDto;
    console.log(createDto)
    const environmental = await this.environmentalRepository.create({
      data: {
        carNumber,
        isLegalReserve,
      },
    });
    return environmental;
  }

  async getAll() {
    const environmentals = await this.environmentalRepository.getAll()
    return environmentals
  }
}
