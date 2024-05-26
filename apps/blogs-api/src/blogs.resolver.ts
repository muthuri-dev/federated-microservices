import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogResponse, UpdateBlogResponse } from './types/blogs.types';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Mutation(() => CreateBlogResponse)
  async createBlog(
    @Args('createInputs') createBlogDto: CreateBlogDto,
  ): Promise<CreateBlogResponse> {
    return await this.blogsService.createBlog(createBlogDto);
  }

  @Mutation(() => UpdateBlogResponse)
  async updateBlog(
    @Args('updateInputs') updateBlogDto: UpdateBlogDto,
  ): Promise<UpdateBlogResponse> {
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
