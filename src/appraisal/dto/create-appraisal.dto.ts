import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min, MaxLength } from 'class-validator';

export class CreateAppraisalDto {
  @IsNotEmpty()
  @IsString()
  nomeEmpresa: string;

  @IsNotEmpty()
  @IsString()
  cargo: string;

  @IsNotEmpty()
  @IsString()
  nivel: string;

  @IsBoolean()
  anonimo: boolean;

  @IsOptional()
  @IsString()
  nomeAutor?: string;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  texto: string;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  oportunidadesCarreira: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  remuneracaoBeneficios: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  culturaValores: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  liderancaAlta: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  diversidadeInclusao: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  auxilioCreche: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  salario: number;

  @IsInt()
  @Min(1, { message: 'O valor deve ser no mínimo 1' })
  @Max(5, { message: 'O valor deve ser no máximo 5' })
  qualidadeVida: number;
}
