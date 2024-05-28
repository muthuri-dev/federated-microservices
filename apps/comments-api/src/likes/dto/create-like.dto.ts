import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLikeDto {
  @Field()
  like: number;

  @Field()
  user_id: string;

  @Field()
  comment_id: string;
}
