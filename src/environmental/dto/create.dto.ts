import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  carNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  isLegalReserve: boolean;
}
