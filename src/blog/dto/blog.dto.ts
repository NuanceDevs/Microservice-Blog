import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  id: number;
  publishedOn: Date;
  title: string;
  content: string;
  summary: string;
}
