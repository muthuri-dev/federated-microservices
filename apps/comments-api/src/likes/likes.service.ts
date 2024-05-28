import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismadbService } from 'src/prismadb/prismadb.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    private readonly prisma: PrismadbService,
    private readonly configService: ConfigService,
  ) {}

  async like(createLikeDto: CreateLikeDto): Promise<Like> {
    const { like, user_id, comment_id } = createLikeDto;
    return await this.prisma.like.create({
      data: {
        like,
        user_id,
        comment_id,
      },
    });
  }

  async disLike(id: string): Promise<Like> {
    return await this.prisma.like.delete({ where: { id } });
  }
}
