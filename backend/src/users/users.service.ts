import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';

type User = {
  id: number;
  userName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type CreateUserInput = {
  userName: string;
  password: string;
};

type UpdateUserInput = Partial<CreateUserInput>;

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserInput): Promise<User> {
    const existing = await this.prisma.user.findFirst({
      where: { userName: data.userName },
    });

    if (existing) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    return await this.prisma.user.create({
      data: {
        userName: data.userName,
        password: hashedPassword,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number): Promise<User | null> {
    const userExist = await this.prisma.user.findUnique({ where: { id } });
    if (!userExist) throw new NotFoundException('user Not Found');

    return userExist;
  }

  async update(id: number, data: UpdateUserInput): Promise<User> {
    const exist = await this.prisma.user.findUnique({ where: { id } });
    if (!exist) throw new NotFoundException('User Not Found');

    const updatedData: UpdateUserInput = {};
    if (data.userName !== undefined) updatedData.userName = data.userName;
    if (data.password !== undefined) {
      updatedData.password = await bcrypt.hash(data.password, SALT_ROUNDS);
    }

    return this.prisma.user.update({ where: { id }, data: updatedData });
  }

  async remove(id: number): Promise<User> {
    const exist = await this.prisma.user.findUnique({ where: { id } });
    if (!exist) throw new NotFoundException('User Not Found');

    return this.prisma.user.delete({ where: { id } });
  }
}
