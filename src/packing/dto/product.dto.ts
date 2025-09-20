import { IsString, IsObject } from 'class-validator';
import { ProductDimensionsDto } from './product-dimensions.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @IsString()
  @ApiProperty({ description: 'Id do produto' })
  produto_id: string;

  @IsObject()
  @ApiProperty({ description: 'Dimensões do produto' })
  dimensoes: ProductDimensionsDto;
}
