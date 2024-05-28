import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCommentDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  content: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  blog_id: string;
}
