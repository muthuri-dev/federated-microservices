import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @ResolveField(() => [Blog])
  public async blogs(@Parent() user: User): Promise<Blog[]> {
    return await this.blogsService.getUserBlogs(user.id);
  }
}
