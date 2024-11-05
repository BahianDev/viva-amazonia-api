import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

enum ComoCompensar {
  AquisicaoCota = "AquisicaoCota",
  Arrendamento = "Arrendamento",
  Doacao = "Doacao",
  Cadastramento = "Cadastramento",
}

export class CreateRegularizacaoAmbientalDto {
  @IsBoolean()
  @IsNotEmpty()
  possuiCar: boolean;

  @IsString()
  @IsOptional()
  carComp: string;

  @IsBoolean()
  @IsNotEmpty()
  possuiReservaLegal: boolean;

  @IsBoolean()
  @IsNotEmpty()
  reservaLegalRegularizada: boolean;

  @IsString()
  @IsOptional()
  reservaLegalRegularizadaComp: string;

  @IsBoolean()
  @IsNotEmpty()
  desejaRegReservaLegal: boolean;

  @IsBoolean()
  @IsNotEmpty()
  excedenteVegNatReservaLegal: boolean;

  @IsString()
  @IsNotEmpty()
  comoCompensar: ComoCompensar;
}
