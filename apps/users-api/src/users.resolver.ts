import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateResponse, LoginResponse } from './types/user.types';
import { LoginUserDto } from './dto/login-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateResponse)
  async CreateUser(
    @Args('userInput') createUserDto: CreateUserDto,
  ): Promise<CreateResponse> {
    return await this.usersService.CreateUser(createUserDto);
  }

  @Query(() => LoginResponse)
  async LoginUser(
    @Args('loginInput') loginUserDto: LoginUserDto,
  ): Promise<LoginResponse> {
    return await this.usersService.LoginUser(loginUserDto);
  }

  @Query(() => [User])
  async GetUsers(): Promise<User[]> {
    return await this.usersService.GetUsers();
  }

  @Query(() => User)
  async GetUserById(@Args('id') id: string): Promise<User> {
    return await this.usersService.GetUserById(id);
  }
}
