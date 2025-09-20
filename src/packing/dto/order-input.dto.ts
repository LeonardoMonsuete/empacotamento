import { IsNumber, IsObject } from 'class-validator';
import { ProductDto } from './product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrderInputDto {
  @IsNumber()
  @ApiProperty({ description: 'Id do pedido' })
  pedido_id: number;

  @IsObject()
  @ApiProperty({ description: 'Produtos do pedido' })
  produtos: ProductDto[];
}
