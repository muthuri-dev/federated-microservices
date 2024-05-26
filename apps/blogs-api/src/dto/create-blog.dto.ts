import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBlogDto {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Title cannot be empty' })
  title: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'description cannot be empty' })
  short_description: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'image cannot be empty' })
  thumbnaill_image: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'content cannot be empty' })
  content: string;

  @Field()
  @IsString()
  user_id: string;
}
