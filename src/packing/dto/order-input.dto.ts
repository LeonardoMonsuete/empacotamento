import { IsNumber, IsObject } from 'class-validator';
import { ProductDto } from './product.dto';

export class OrderInputDto {
  @IsNumber()
  pedido_id: number;

  @IsObject()
  produtos: ProductDto[];
}
