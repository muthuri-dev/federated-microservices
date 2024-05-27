import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Blog } from './blog.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Blog], { nullable: true })
  blogs?: Blog[];
}
