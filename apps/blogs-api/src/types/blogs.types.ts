import { Field, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/entities/blog.entity';

@ObjectType()
export class BlogErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class CreateBlogResponse {
  @Field(() => Blog)
  blog: Blog;

  @Field(() => BlogErrorType, { nullable: true })
  error?: BlogErrorType;
}

@ObjectType()
export class UpdateBlogResponse {
  @Field(() => Blog)
  blog: Blog;

  @Field(() => BlogErrorType, { nullable: true })
  error?: BlogErrorType;
}
