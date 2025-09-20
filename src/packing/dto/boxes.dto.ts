import { IsObject, IsOptional, IsString } from 'class-validator';

export class BoxesDto {
  @IsString()
  @IsOptional()
  caixa_id: string | null;

  @IsObject()
  produtos: Array<string>;

  @IsString()
  @IsOptional()
  observacao?: string;
}
