import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@ObjectType()
export class UserErrorType {
  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class CreateUserResponse {
  @Field(() => User)
  user: User;

  @Field(() => UserErrorType, { nullable: true })
  error?: UserErrorType;
}

@ObjectType()
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => UserErrorType, { nullable: true })
  error?: UserErrorType;
}

@ObjectType()
export class UpdateUserResponse {
  @Field(() => User)
  user: User;

  @Field(() => UserErrorType, { nullable: true })
  error?: UserErrorType;
}
