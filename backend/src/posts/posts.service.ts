import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({ data: dto });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post Not Found');
    return post;
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post Not Found');
    return this.prisma.post.update({ where: { id }, data: dto });
  }

  async remove(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post Not Found');
    return this.prisma.post.delete({ where: { id } });
  }
}
