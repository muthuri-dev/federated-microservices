import { CreateBlogDto } from './create-blog.dto';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateBlogDto extends PartialType(CreateBlogDto) {
  @Field(() => ID)
  id: string;
}
