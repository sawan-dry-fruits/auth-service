import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Unique } from 'typeorm';
@Unique(['email'])
export class UserDto {
  @ApiProperty({ default: 'Piyush' })
  @IsString()
  name: string;

  @ApiProperty({ default: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: 'password' })
  @IsString()
  password?: string;
}
