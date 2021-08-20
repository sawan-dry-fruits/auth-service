import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';
import { comparePassword } from 'src/utils/password.utils';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: UserDto): Promise<User> {
    return this.authService.register(user);
  }

  @Post('login')
  async login(@Body() user: UserDto) {
    const found = await this.authService.findOne(user.email);

    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }
    if (!comparePassword(user.password, found.password)) {
      throw new BadRequestException('Invalid Credentials');
    }
    return found;
  }
}
