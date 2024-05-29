import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Blog } from './entities/blog.entity';
import { Comment } from './entities/comment.entity';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField(() => [Comment])
  public async comments(@Parent() blog: Blog): Promise<Comment[]> {
    return await this.commentsService.getBlogComments(blog.id);
  }
}
