import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  content: string;
}

export class updatePostDto extends PartialType(CreatePostDto) {}
