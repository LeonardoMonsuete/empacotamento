import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ description: 'Token JWT gerado' })
  token: string;

  @ApiProperty({ description: 'Tempo de expiração em segundos' })
  expiresIn: number;
}
