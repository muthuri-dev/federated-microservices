import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@ObjectType()
export class ErrorType {
  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class CreateResponse {
  @Field(() => User)
  user: User;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class UpdateResponse {
  @Field(() => User)
  user: User;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
