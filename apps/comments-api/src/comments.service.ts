import { Injectable } from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateCommentResponse } from './types/comments.types';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismadbService,
    private readonly configService: ConfigService,
  ) {}
  async createComment(
    createCommentDto: CreateCommentDto,
  ): Promise<CreateCommentResponse> {
    const { content, blog_id, user_id } = createCommentDto;
    const comment = await this.prisma.comment.create({
      data: { content, blog_id, user_id },
    });
    return { comment };
  }

  async getBlogComments(blog_id: string): Promise<Comment[]> {
    return await this.prisma.comment.findMany({ where: { blog_id } });
  }

  async getUserComments(user_id: string): Promise<Comment[]> {
    return await this.prisma.comment.findMany({ where: { user_id } });
  }
}
