import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsString({ message: 'Name should be a string' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

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
