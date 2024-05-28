import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { PrismadbService } from 'src/prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [LikesResolver, LikesService, PrismadbService, ConfigService],
  exports: [LikesModule],
})
export class LikesModule {}
