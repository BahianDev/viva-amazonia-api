import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean, IsArray, IsOptional, IsDateString } from 'class-validator';

enum TipoDeArea {
  RL = 'RL',
  UAS = 'UAS',
  C = 'C',

}

enum CicloProducao {
  Anual = 'Anual',
  Bianual = 'Bianual',
  Bimestral = 'Bimestral',
  Semestral = 'Semestral',
}

export class CreatePlanoProdutivoDto {
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  @IsNotEmpty()
  tipoDeArea: TipoDeArea;

  @IsDateString()
  @IsNotEmpty()
  dataInicioPlantio: string;

  @IsBoolean()
  @IsNotEmpty()
  usaFertilizantes: boolean;

  @IsBoolean()
  @IsNotEmpty()
  usaPesticidas: boolean;

  @IsNumber()
  @IsNotEmpty()
  hectare: number;

  @IsNumber()
  @IsNotEmpty()
  linhas: number;

  @IsNumber()
  @IsNotEmpty()
  espacamento: number;

  @IsNumber()
  @IsNotEmpty()
  quantMudasFlorestais: number;

  @IsNumber()
  @IsNotEmpty()
  quantMudasFrutiferas: number;

  @IsNumber()
  @IsNotEmpty()
  calcario: number;

  @IsNumber()
  @IsNotEmpty()
  adulboOrganico: number;

  @IsArray()
  @IsNotEmpty()
  especiesMudasFlorestais: string[];

  @IsString()
  @IsOptional()
  especiesMudasFlorestaisOutro?: string;

  @IsArray()
  @IsNotEmpty()
  especiesMudasFrutiferas: string[];

  @IsString()
  @IsOptional()
  especiesMudasFrutiferasOutro?: string;

  @IsString()
  @IsNotEmpty()
  clicloProducao: CicloProducao;

  @IsString()
  @IsNotEmpty()
  lat: string;

  @IsString()
  @IsNotEmpty()
  lng: string;
}
