import { Directive, ID, ObjectType, Field } from '@nestjs/graphql';
import { Comment } from './comment.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];
}
