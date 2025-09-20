import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { AuthService } from '../services/auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiResponse({ status: 200, type: AuthResponseDto })
  signIn(): AuthResponseDto {
    const authResponse: AuthResponseDto = this.authService.signIn();
    return authResponse;
  }
}
