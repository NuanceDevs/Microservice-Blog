import { AppService } from './app.service';
import { Body, Controller } from '@nestjs/common';
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
  async createBlog(@Body() data: BlogDto): Promise<BlogDto> {
    console.log(data);
    data.publishedOn = new Date();
    console.log('createBlog message received');
    return this.appService.createPost(data);
  }

  @MessagePattern({ cmd: 'getPostById' })
  async getBlogById(@Body() id: number): Promise<BlogDto> {
    console.log('getPostById message received');
    return this.appService.getPostById(id);
  }
}
