import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegularizacaoAmbientalService } from './regularizacao-ambiental.service';
import { CreateRegularizacaoAmbientalDto } from './dto/create-regularizacao-ambiental.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('regularizacao-ambiental')
export class RegularizacaoAmbientalController {
  constructor(
    private readonly regularizacaoAmbientalService: RegularizacaoAmbientalService,
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  create(
    @Request() req: any,
    @Body() createRegularizacaoAmbientalDto: CreateRegularizacaoAmbientalDto,
  ) {
    return this.regularizacaoAmbientalService.create(
      createRegularizacaoAmbientalDto,
      req.user.username,
    );
  }

  @Get()
  findAll() {
    return this.regularizacaoAmbientalService.getAll();
  }
}
