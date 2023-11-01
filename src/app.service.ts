import { Injectable } from '@nestjs/common';

import { BlogDto } from './blog/dto/blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog/blog.entity';
import { DeletePostDto } from './blog/dto/DeletePostDto';

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

  async createPost(data: BlogDto): Promise<any> {
    return this.blogRepository.save(data);
  }


  async getPostById(id: number): Promise<BlogEntity> {
    return this.blogRepository.findOne({ where: { id } });
  }

  async deletePost(data: DeletePostDto) {
    const id = data.id;
    return this.blogRepository.delete({ id });
  }
}
