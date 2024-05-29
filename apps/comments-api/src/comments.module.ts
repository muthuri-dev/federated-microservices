import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismadbService } from './prismadb/prismadb.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { LikesModule } from './likes/likes.module';
import { BlogsResolver } from './blogs.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LikesModule,
  ],
  providers: [
    CommentsResolver,
    CommentsService,
    PrismadbService,
    ConfigService,
    BlogsResolver,
  ],
})
export class CommentsModule {}
