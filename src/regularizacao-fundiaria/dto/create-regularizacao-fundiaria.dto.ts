import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRegularizacaoFundiariaDto {
  @IsBoolean()
  @IsNotEmpty()
  possuiCafDap: boolean;

  @IsString()
  @IsOptional()
  cafDapComp: string;

  @IsBoolean()
  @IsNotEmpty()
  possuiSigef: boolean;

  @IsString()
  @IsOptional()
  sigefComp: string;

  @IsBoolean()
  @IsNotEmpty()
  registCartorioLote: boolean;

  @IsBoolean()
  @IsNotEmpty()
  possuiBaseTopoSigef: boolean;

  @IsBoolean()
  @IsNotEmpty()
  encontrouProfParaLevantamento: boolean;

  @IsString()
  @IsNotEmpty()
  localizacao: string;

  @IsBoolean()
  @IsNotEmpty()
  ccirNoSncrDoIncra: boolean;

  @IsString()
  @IsOptional()
  ccirNoSncrDoIncraComp: string;
}
