import { Injectable } from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';
import { CreateBlogDto } from './dto/create-blog.dto';
import { CreateBlogResponse, UpdateBlogResponse } from './types/blogs.types';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  constructor(
    private readonly prisma: PrismadbService,
    private readonly configService: ConfigService,
  ) {}

  async createBlog(createBlogDto: CreateBlogDto): Promise<CreateBlogResponse> {
    const { title, short_description, thumbnaill_image, content, user_id } =
      createBlogDto;
    const blog = await this.prisma.blog.create({
      data: { title, short_description, thumbnaill_image, content, user_id },
    });
    return { blog };
  }
  async updateBlog(updateBlogDto: UpdateBlogDto): Promise<UpdateBlogResponse> {
    const { title, short_description, thumbnaill_image, content, id } =
      updateBlogDto;
    const blog = await this.prisma.blog.update({
      where: { id },
      data: { title, short_description, thumbnaill_image, content },
    });
    return { blog };
  }

  async getblogs(): Promise<Blog[]> {
    return await this.prisma.blog.findMany({});
  }

  async getblog(id: string): Promise<Blog> {
    return await this.prisma.blog.findUnique({ where: { id } });
  }

  async getUserblogs(user_id: string): Promise<Blog[]> {
    return await this.prisma.blog.findMany({ where: { user_id } });
  }

  async deleteBlog(id: string): Promise<Blog> {
    return await this.prisma.blog.delete({ where: { id } });
  }
}
