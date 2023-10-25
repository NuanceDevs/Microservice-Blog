import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  id: number;
  title: string;
  content: string;
  summary: string;
}
