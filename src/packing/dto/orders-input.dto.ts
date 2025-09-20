import { IsObject } from 'class-validator';
import { OrderInputDto } from './order-input.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrdersInputDto {
  @IsObject()
  @ApiProperty({ description: 'Pedidos gerais (entrada)' })
  pedidos: OrderInputDto[];
}
