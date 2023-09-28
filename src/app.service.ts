import { Injectable } from '@nestjs/common';

import { BlogDto } from './blog/dto/blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog/blog.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllBlogs(): Promise<BlogDto[]> {
    return await this.blogRepository.find();
  }

  async createPost(): Promise<void> {}

  async getBlogById(id: number): Promise<BlogDto> {
    return {
      id,
      title: 'Blog 1',
      summary: 'Blog 1 summary',
    };
  }
}
