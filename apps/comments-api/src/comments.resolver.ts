import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateCommentResponse } from './types/comments.types';
import { Blog } from './entities/blog.entity';
import { User } from './entities/user.entity';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => Comment)
  async createComment(
    @Args('commentInputs') createCommentDto: CreateCommentDto,
  ): Promise<CreateCommentResponse> {
    return await this.commentsService.createComment(createCommentDto);
  }

  @Query(() => [Comment])
  async getBlogComments(@Args('blog_id') blog_id: string): Promise<Comment[]> {
    return await this.commentsService.getBlogComments(blog_id);
  }

  @ResolveField(() => Blog)
  public async blog(@Parent() comment: Comment): Promise<any | Blog> {
    return await { __typename: 'Blog', id: comment.blog_id };
  }

  @ResolveField(() => User)
  public async user(@Parent() comment: Comment): Promise<User | any> {
    return await { __typename: 'User', id: comment.user_id };
  }
}
