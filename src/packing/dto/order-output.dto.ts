import { IsNumber, IsObject } from 'class-validator';
import { BoxesDto } from './boxes.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrderOutputDto {
  @IsNumber()
  @ApiProperty({ description: 'Id do pedido' })
  pedido_id: number;

  @IsObject()
  @ApiProperty({ description: 'Caixas do pedido' })
  caixas: BoxesDto[];
}
