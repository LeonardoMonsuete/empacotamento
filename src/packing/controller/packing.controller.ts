import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PackingService } from '../service/packing.service';
import { OrdersInputDto, OrdersOutputDto } from '../dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('packing')
@UseGuards(AuthGuard)
@Controller('packing')
export class PackingController {
  constructor(private readonly packingService: PackingService) {}
  @Post('/calculate')
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    description: 'Exemplo de payload para calculo das caixas',
    schema: {
      example: {
        pedidos: [
          {
            pedido_id: 1,
            produtos: [
              {
                produto_id: 'PS5',
                dimensoes: { altura: 40, largura: 10, comprimento: 25 },
              },
              {
                produto_id: 'Volante',
                dimensoes: { altura: 40, largura: 30, comprimento: 30 },
              },
            ],
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Exemplo de retorno de calculo',
    schema: {
      example: {
        pedidos: [
          {
            pedido_id: 1,
            caixas: [
              {
                caixa_id: 'Caixa 2',
                produtos: ['PS5', 'Volante'],
              },
            ],
          },
        ],
      },
    },
  })
  calculate(@Body() orders: OrdersInputDto): OrdersOutputDto {
    return this.packingService.calculate(orders);
  }
}
