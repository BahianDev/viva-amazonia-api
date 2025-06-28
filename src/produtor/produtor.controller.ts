import { Controller, Get, Param } from '@nestjs/common';
import { ProdutorService } from './produtor.service';

@Controller('produtor')
export class ProdutorController {
  constructor(private readonly produtorService: ProdutorService) {}

  @Get()
  getAll() {
    return this.produtorService.getAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.produtorService.get(id);
  }
}
