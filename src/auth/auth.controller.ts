import { Body, Controller, Post } from '@nestjs/common';
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
}
