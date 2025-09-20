import { IsObject } from 'class-validator';
import { OrderInputDto } from './order-input.dto';

export class OrdersInputDto {
  @IsObject()
  pedidos: OrderInputDto[];
}
