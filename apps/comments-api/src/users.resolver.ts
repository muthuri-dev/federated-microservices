import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly commentsService: CommentsService) {}
  @ResolveField(() => [Comment])
  async comments(@Parent() user: User): Promise<Comment[]> {
    return await this.commentsService.getUserComments(user.id);
  }
}
