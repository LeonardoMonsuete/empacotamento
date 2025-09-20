import { IsNumber, Max } from 'class-validator';

export class ProductDimensionsDto {
  @IsNumber()
  @Max(80)
  altura: number;

  @IsNumber()
  @Max(80)
  largura: number;

  @IsNumber()
  @Max(80)
  comprimento: number;
}
