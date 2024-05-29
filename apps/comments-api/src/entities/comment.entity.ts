import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Like } from 'src/likes/entities/like.entity';
import { Blog } from './blog.entity';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields:"id")')
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

  @Field(() => Blog)
  blog?: Blog;

  @Field(() => User)
  user?: User;
}
