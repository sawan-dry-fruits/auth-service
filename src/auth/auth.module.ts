import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, PassportModule],
  providers: [],
})
export class AuthModule {}
