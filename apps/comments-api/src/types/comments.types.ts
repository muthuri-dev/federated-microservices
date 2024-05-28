import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/entities/comment.entity';

@ObjectType()
export class CommentErrorType {
  @Field()
  message: string;

  @Field()
  code: string;
}

@ObjectType()
export class CreateCommentResponse {
  @Field(() => Comment)
  comment?: Comment;

  @Field(() => CommentErrorType, { nullable: true })
  error?: CommentErrorType;
}
