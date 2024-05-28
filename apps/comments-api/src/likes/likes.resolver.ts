import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';

@Resolver(() => Like)
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @Mutation(() => Like)
  async like(@Args('likeInputs') createLikeDto: CreateLikeDto): Promise<Like> {
    return await this.likesService.like(createLikeDto);
  }

  @Mutation(() => Like)
  async disLike(@Args('id') id: string): Promise<Like> {
    return await this.likesService.disLike(id);
  }
}
