import { Injectable } from '@nestjs/common';
import { ProdutorRepository } from './produtor.repository';

@Injectable()
export class ProdutorService {
  constructor(private readonly produtorRepository: ProdutorRepository) {}

  async getAll() {
    const produtores = await this.produtorRepository.getAll({});

    return produtores;
  }
}
