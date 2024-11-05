import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRegularizacaoSanitariaDto {
  @IsBoolean()
  @IsNotEmpty()
  licenca: boolean;

  @IsString()
  @IsOptional()
  licencaComp?: string;

  @IsString()
  @IsNotEmpty()
  produtosAgricolas: string;

  @IsBoolean()
  @IsNotEmpty()
  controleDePragas: boolean;

  @IsBoolean()
  @IsNotEmpty()
  usaProdutosQuimicos: boolean;

  @IsString()
  @IsNotEmpty()
  armazenamentoProdutos: string;

  @IsBoolean()
  @IsNotEmpty()
  tratamentoResiduoAgricolas: boolean;
}
