import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BlogDto } from './blog/dto/blog.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getAllBlogs' })
  async getAllBlogs(): Promise<BlogDto[]> {
    console.log('getAllBlogs message received');
    return this.appService.getAllBlogs();
  }

  @MessagePattern({ cmd: 'createPost' })
  async createBlog(): Promise<void> {
    console.log('createBlog message received');
    this.appService.createPost();
  }

  @MessagePattern({ cmd: 'getBlogById' })
  async getBlogById(id: number): Promise<BlogDto> {
    return this.appService.getBlogById(id);
  }
}
