import { BadRequestException, Injectable } from '@nestjs/common';
import { ProdutorRepository } from './produtor.repository';

@Injectable()
export class ProdutorService {
  constructor(private readonly produtorRepository: ProdutorRepository) {}

  async getAll() {
    const produtores = await this.produtorRepository.getAll({});

    return produtores;
  }

  async get(id: string) {
    const produtor = await this.produtorRepository.get({
      where: {
        id,
      }
    });

    if (!produtor) {
     throw new BadRequestException("Produtor not found")
    }

    return produtor;
  }
}
