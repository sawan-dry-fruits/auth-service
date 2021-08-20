import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './../user/user.dto';
import { comparePassword, hashPassword } from './../utils/password.utils';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(user: UserDto): Promise<User> {
    const newUser = new User();
    newUser.password = await hashPassword(user.password);
    newUser.name = user.name;
    newUser.email = user.email;
    return await this.userRepository.save(newUser);
  }

  async findOne(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOneOrFail({ where: { email } });
    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }
    if (!comparePassword(password, user.password)) {
      throw new BadRequestException('Invalid Credentials');
    }
    return user;
  }
}
