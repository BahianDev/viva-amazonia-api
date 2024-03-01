import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductionDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  cycle: string;

  @IsNumber()
  @IsNotEmpty()
  sizePlantedArea: number;

  @IsString()
  @IsNotEmpty()
  datePlantedArea: string;
}
