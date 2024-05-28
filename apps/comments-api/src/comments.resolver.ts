import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateCommentResponse } from './types/comments.types';

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
}
