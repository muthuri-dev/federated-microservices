import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateResponse, LoginResponse } from './types/user.types';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismadbService,
    private readonly configService: ConfigService,
  ) {}

  async CreateUser(createUserDto: CreateUserDto): Promise<CreateResponse> {
    const { name, email, password } = createUserDto;
    const isEmail = await this.prisma.user.findUnique({ where: { email } });
    if (isEmail)
      throw new BadRequestException('Email already exists with another user');
    const user = await this.prisma.user.create({
      data: { name, email, password },
    });
    return { user };
  }

  async LoginUser(loginUserDto: LoginUserDto): Promise<LoginResponse> {
    const { email, password } = loginUserDto;
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid email');

    if (user.password !== password)
      throw new UnauthorizedException('Wrong password');

    return { user };
  }

  async GetUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async GetUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('User does not exist');
    return user;
  }
}
