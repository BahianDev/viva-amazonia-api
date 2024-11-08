import { Body, Controller, Get, Post, UseGuards, Request, Param } from '@nestjs/common';
import { PlanoProdutivoService } from './plano-produtivo.service';
import { CreatePlanoProdutivoDto } from './dto/create-plano-produtivo.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';


@Controller('plano-produtivo')
export class PlanoProdutivoController {
  constructor(private readonly planoProdutivoService: PlanoProdutivoService) { }

  @UseGuards(JwtGuard)
  @Post()
  create(@Request() req: any, @Body() createPlanoProdutivoDto: CreatePlanoProdutivoDto) {
    return this.planoProdutivoService.create(createPlanoProdutivoDto, req.user.username);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.planoProdutivoService.get(id);
  }

  @Get()
  getAll() {
    return this.planoProdutivoService.getAll();
  }

  @Get('info/dash')
  getInfo() {
    return this.planoProdutivoService.getInfo();
  }
}
