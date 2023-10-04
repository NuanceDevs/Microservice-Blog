import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  title: string;
  content: string;
}
