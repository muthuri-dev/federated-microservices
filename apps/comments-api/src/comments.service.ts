import { Injectable } from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismadbService,
    private readonly configService: ConfigService,
  ) {}
}
