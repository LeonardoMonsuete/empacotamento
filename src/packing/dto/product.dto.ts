import { IsString, IsObject } from 'class-validator';
import { ProductDimensionsDto } from './product-dimensions.dto';

export class ProductDto {
  @IsString()
  produto_id: string;

  @IsObject()
  dimensoes: ProductDimensionsDto;
}
