import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegularizacaoSanitariaService } from './regularizacao-sanitaria.service';
import { CreateRegularizacaoSanitariaDto } from './dto/create-regularizacao-sanitaria.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('regularizacao-sanitaria')
export class RegularizacaoSanitariaController {
  constructor(
    private readonly regularizacaoSanitariaService: RegularizacaoSanitariaService,
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  create(
    @Request() req: any,
    @Body() createRegularizacaoSanitariaDto: CreateRegularizacaoSanitariaDto,
  ) {
    return this.regularizacaoSanitariaService.create(
      createRegularizacaoSanitariaDto,
      req.user.username,
    );
  }

  @Get()
  findInfo() {
    return this.regularizacaoSanitariaService.getAll();
  }
}
