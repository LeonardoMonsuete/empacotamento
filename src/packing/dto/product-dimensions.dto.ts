import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max } from 'class-validator';

export class ProductDimensionsDto {
  @IsNumber()
  @Max(80)
  @ApiProperty({ description: 'Altura do produto' })
  altura: number;

  @IsNumber()
  @Max(80)
  @ApiProperty({ description: 'Largura do produto' })
  largura: number;

  @IsNumber()
  @Max(80)
  @ApiProperty({ description: 'Comprimento do produto' })
  comprimento: number;
}
