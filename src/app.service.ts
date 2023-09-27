import { Injectable } from '@nestjs/common';

import { BlogDto } from './blog/dto/blog.dto';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(BlogDto)
  //   private readonly blogRepository: Repository<BlogDto>,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllBlogs(): Promise<BlogDto[]> {
    return [
      {
        id: 1,
        title: 'Blog 1',
        summary: 'Blog 1 summary',
      },
      {
        id: 2,
        title: 'Blog 2',
        summary: 'Blog 2 summary',
      },
    ];
  }

  async getBlogById(id: number): Promise<BlogDto> {
    return {
      id,
      title: 'Blog 1',
      summary: 'Blog 1 summary',
    };
  }
}
