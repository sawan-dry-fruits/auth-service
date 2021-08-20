import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: UserDto): Promise<UserDto> {
    return this.authService.register(user);
  }

  @Post('login')
  async login(
    @Body() user: UserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    return await this.authService.findOne(user.email, user.password, response);
  }
  @Get('user')
  async getUser(@Req() request: Request) {
    return await this.authService.getUser(request);
  }
}
