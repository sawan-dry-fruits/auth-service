import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './../user/user.dto';
import { comparePassword, hashPassword } from './../utils/password.utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(user: UserDto): Promise<UserDto> {
    const newUser = new User();
    newUser.password = await hashPassword(user.password);
    newUser.name = user.name;
    newUser.email = user.email;
    const { password, ...result } = await this.userRepository.save(newUser);
    return result;
  }

  async findOne(
    email: string,
    password: string,
    response: Response,
  ): Promise<string> {
    const user = await this.userRepository.findOneOrFail({ where: { email } });
    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }
    if (!comparePassword(password, user.password)) {
      throw new BadRequestException('Invalid Credentials');
    }
    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });
    return jwt;
  }

  async getUser(request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) throw new UnauthorizedException();

      const user = await this.userRepository.findOneOrFail({
        where: { id: data['id'] },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
