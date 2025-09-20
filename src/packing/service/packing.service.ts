import { Injectable } from '@nestjs/common';
import {
  OrderOutputDto,
  OrdersInputDto,
  OrdersOutputDto,
  ProductDimensionsDto,
} from '../dto';
import { BOX_SPECS, BoxType, BoxDimensions } from '../constants';

interface OpenBox {
  caixa_id: BoxType | null;
  produtos: string[];
  dimensions?: BoxDimensions;
  observacao?: string;
}

@Injectable()
export class PackingService {
  calculate(orders: OrdersInputDto): OrdersOutputDto {
    const result: OrderOutputDto[] = [];

    for (const order of orders.pedidos) {
      const caixasAbertas: OpenBox[] = [];

      // ordena produtos por volume crescente
      const produtosOrdenados = [...order.produtos].sort((a, b) => {
        const volumeA =
          a.dimensoes.altura * a.dimensoes.largura * a.dimensoes.comprimento;
        const volumeB =
          b.dimensoes.altura * b.dimensoes.largura * b.dimensoes.comprimento;
        return volumeA - volumeB;
      });

      for (const produto of produtosOrdenados) {
        // encontra a menor caixa possivel que comporte o produto
        const bestBox = this.pickBestBox(produto.dimensoes);

        if (!bestBox) {
          // produto nao cabe em nenhuma caixa
          caixasAbertas.push({
            caixa_id: null,
            produtos: [produto.produto_id],
            observacao: 'Produto não cabe em nenhuma caixa disponível.',
          });
          continue;
        }

        // abre nova caixa do tipo bestBox
        let caixa = caixasAbertas.find((c) => c.caixa_id === bestBox);
        if (!caixa) {
          caixa = {
            caixa_id: bestBox,
            produtos: [],
            dimensions: BOX_SPECS[bestBox],
          };
          caixasAbertas.push(caixa);
        }

        // adiciona o produto na caixa correta
        caixa.produtos.push(produto.produto_id);
      }

      // monta saída do pedido
      result.push({
        pedido_id: order.pedido_id,
        caixas: caixasAbertas.map((c) => ({
          caixa_id: c.caixa_id,
          produtos: c.produtos,
          ...(c.observacao ? { observacao: c.observacao } : {}),
        })),
      });
    }

    return { pedidos: result } as OrdersOutputDto;
  }

  // verifica se o produto cabe na caixa
  private fitsInBox(prodDim: ProductDimensionsDto, boxDim: BoxDimensions) {
    return (
      prodDim.altura <= boxDim.height &&
      prodDim.largura <= boxDim.width &&
      prodDim.comprimento <= boxDim.depth
    );
  }

  // retorna a menor caixa possivel que comporte o produto
  private pickBestBox(dimension: ProductDimensionsDto): BoxType | undefined {
    // ordena caixas por volume crescente
    const sortedBoxes = Object.entries(BOX_SPECS)
      .sort(
        ([, a], [, b]) =>
          a.height * a.width * a.depth - b.height * b.width * b.depth,
      )
      .map(([key]) => key as BoxType);

    for (const box of sortedBoxes) {
      if (this.fitsInBox(dimension, BOX_SPECS[box])) return box;
    }
    return undefined;
  }
}
