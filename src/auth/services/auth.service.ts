// src/auth/services/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly jwtExpirationTimeInSeconds: number | undefined;
  private readonly jwtUserId: string | undefined;
  private readonly jwtUsername: string | undefined;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = Number(
      configService.get<number>('JWT_EXPIRATION_TIME'),
    );
    this.jwtUserId = configService.get<string>('JWT_USER_ID');
    this.jwtUsername = configService.get<string>('JWT_USERNAME');
  }

  signIn(): AuthResponseDto {
    if (!this.jwtUserId || !this.jwtUsername)
      throw new UnauthorizedException('Missing JWT configuration');

    const payload = { sub: this.jwtUserId, username: this.jwtUsername };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: Number(this.jwtExpirationTimeInSeconds),
    };
  }
}
