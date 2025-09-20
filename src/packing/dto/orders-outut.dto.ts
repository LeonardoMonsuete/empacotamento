import { IsObject } from 'class-validator';
import { OrderOutputDto } from './order-output.dto';

export class OrdersOutputDto {
  @IsObject()
  pedidos: OrderOutputDto[];
}
