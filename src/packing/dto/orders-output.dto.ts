import { IsObject } from 'class-validator';
import { OrderOutputDto } from './order-output.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrdersOutputDto {
  @IsObject()
  @ApiProperty({ description: 'Pedidos gerais (saída)' })
  pedidos: OrderOutputDto[];
}
