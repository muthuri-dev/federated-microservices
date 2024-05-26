import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
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
}
