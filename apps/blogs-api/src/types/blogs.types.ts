import { Field, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/entities/blog.entity';

@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field()
  code: string;
}

@ObjectType()
export class CreateResponse {
  @Field(() => Blog)
  blog: Blog;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class UpdateResponse {
  @Field(() => Blog)
  blog: Blog;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
