import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class Blog {
  @Field(() => ID)
  id: string;

  @Field(() => Comment, { nullable: true })
  comment?: Comment;
}
