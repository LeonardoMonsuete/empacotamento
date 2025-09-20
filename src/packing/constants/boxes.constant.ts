export enum BoxType {
  CAIXA_1 = 'Caixa 1',
  CAIXA_2 = 'Caixa 2',
  CAIXA_3 = 'Caixa 3',
}

export interface BoxDimensions {
  height: number;
  width: number;
  depth: number;
}

export type BoxSpecs = Record<BoxType, BoxDimensions>;

export const BOX_SPECS: BoxSpecs = {
  [BoxType.CAIXA_1]: { height: 30, width: 40, depth: 80 },
  [BoxType.CAIXA_2]: { height: 50, width: 50, depth: 40 },
  [BoxType.CAIXA_3]: { height: 50, width: 80, depth: 60 },
};
