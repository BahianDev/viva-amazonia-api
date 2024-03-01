import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnvironmentalService } from './environmental.service';
import { CreateDto } from './dto/create.dto';

@Controller('environmental')
export class EnvironmentalController {
  constructor(private readonly environmentalService: EnvironmentalService) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.environmentalService.create(createDto);
  }

  @Get()
  findAll() {
    return this.environmentalService.getAll();
  }
}
