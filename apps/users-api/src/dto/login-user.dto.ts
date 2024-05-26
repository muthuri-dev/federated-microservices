import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginUserDto {
  @Field()
  @IsString({ message: 'Email should be string' })
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @Field()
  @IsString({ message: 'Password should be string' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}
