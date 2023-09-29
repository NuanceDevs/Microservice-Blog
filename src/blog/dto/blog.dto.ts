import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  title: string;
  summary: string;
  content: string;
}
