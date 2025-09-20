import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class BoxesDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Id da caixa' })
  caixa_id: string | null;

  @IsObject()
  @ApiProperty({ description: 'Produtos na caixa' })
  produtos: Array<string>;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Observações gerais' })
  observacao?: string;
}
