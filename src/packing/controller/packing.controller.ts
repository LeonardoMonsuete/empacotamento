import { Body, Controller, Post } from '@nestjs/common';
import { PackingService } from '../service/packing.service';
import { OrdersInputDto, OrdersOutputDto } from '../dto';

@Controller('packing')
export class PackingController {
  constructor(private readonly packingService: PackingService) {}
  @Post('/calculate')
  calculate(@Body() orders: OrdersInputDto): OrdersOutputDto {
    return this.packingService.calculate(orders);
  }
}
