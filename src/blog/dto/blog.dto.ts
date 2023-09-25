import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  id: number;
  title: string;
  summary: string;
}
