import {
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
    Request,
  } from '@nestjs/common';
  import { RegularizacaoFundiariaService } from './regularizacao-fundiaria.service';
  import { CreateRegularizacaoFundiariaDto } from './dto/create-regularizacao-fundiaria.dto';
  import { JwtGuard } from 'src/auth/guards/jwt.guard';
  
  @Controller('regularizacao-fundiaria')
  export class RegularizacaoFundiariaController {
    constructor(
      private readonly regularizacaoFundiariaService: RegularizacaoFundiariaService,
    ) {}
  
    @UseGuards(JwtGuard)
    @Post()
    create(
      @Request() req: any,
      @Body() createRegularizacaoFundiariaDto: CreateRegularizacaoFundiariaDto,
    ) {
      return this.regularizacaoFundiariaService.create(
        createRegularizacaoFundiariaDto,
        req.user.username,
      );
    }
  
    @Get()
    findAll() {
      return this.regularizacaoFundiariaService.getAll();
    }
  }
  