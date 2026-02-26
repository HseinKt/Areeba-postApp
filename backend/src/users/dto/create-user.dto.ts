import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  userName!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(70)
  password!: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
