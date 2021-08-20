import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

/**
 * @author Piyush Mehta
 *
 * @description User Entity Class
 *
 * @export
 * @class User
 */
@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @Length(2, 30, {
    message: 'The name must be at least 2 but not longer than 30 characters',
  })
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  @ApiProperty()
  email: string;

  @Column()
  @IsString()
  @Length(6, 30, {
    message:
      'The password must be at least 6 but not longer than 30 characters',
  })
  @ApiProperty()
  password: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  @ApiProperty()
  @IsDate()
  createdAt: Date;
}
