import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BlogEntity } from './blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  async getBlogById(id: number): Promise<BlogEntity | undefined> {
    return this.blogRepository.findOne({ where: { id } });
  }
}
