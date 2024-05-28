import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Like } from 'src/likes/entities/like.entity';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => Like, { nullable: true })
  like?: Like;

  @Field()
  user_id: string;

  @Field()
  blog_id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
