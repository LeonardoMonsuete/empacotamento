import { IsNumber, IsObject } from 'class-validator';
import { BoxesDto } from './boxes.dto';

export class OrderOutputDto {
  @IsNumber()
  pedido_id: number;

  @IsObject()
  caixas: BoxesDto[];
}
