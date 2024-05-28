import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field()
  like: number;

  @Field()
  user_id: string;

  @Field()
  comment_id: string;
}
