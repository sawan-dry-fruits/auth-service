import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: UserDto): Promise<User> {
    return this.authService.register(user);
  }

  @Post('login')
  async login(
    @Body() user: UserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    return await this.authService.findOne(user.email, user.password, response);
  }
}
