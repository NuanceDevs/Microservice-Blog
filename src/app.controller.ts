import { AppService } from './app.service';
import { Body, Controller, NotFoundException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BlogDto } from './blog/dto/blog.dto';
import { DeletePostDto } from './blog/dto/DeletePostDto';

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
  async getPostById(@Body() id: number): Promise<BlogDto> {
    console.log('getPostById message received');
    const blog = this.appService.getPostById(id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return blog;
  }

  @MessagePattern({ cmd: 'deletePost' })
  async deletePost(@Body() data: DeletePostDto) {
    console.log('del post message received');
    return this.appService.deletePost(data);
  }
}
