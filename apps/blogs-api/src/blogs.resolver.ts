import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateResponse, UpdateResponse } from './types/blogs.types';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Mutation(() => CreateResponse)
  async createBlog(
    @Args('createInputs') createBlogDto: CreateBlogDto,
  ): Promise<CreateResponse> {
    return await this.blogsService.createBlog(createBlogDto);
  }

  @Mutation(() => UpdateResponse)
  async updateBlog(
    @Args('updateInputs') updateBlogDto: UpdateBlogDto,
  ): Promise<UpdateResponse> {
    return await this.blogsService.updateBlog(updateBlogDto);
  }

  @Query(() => [Blog])
  async getblogs(): Promise<Blog[]> {
    return await this.blogsService.getblogs();
  }

  @Query(() => Blog)
  async getblog(@Args('id') id: string): Promise<Blog> {
    return await this.blogsService.getblog(id);
  }

  @Query(() => [Blog])
  async getUserblogs(@Args('user_id') user_id: string): Promise<Blog[]> {
    return await this.blogsService.getUserblogs(user_id);
  }
}
