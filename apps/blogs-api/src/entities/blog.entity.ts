import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class Blog {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  short_description: string;

  @Field()
  thumbnaill_image: string;

  @Field()
  content: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  user?: User;
}
