import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BlogDto } from './blog/dto/blog.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @MessagePattern({ cmd: 'ping' })
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // ping() {
  //   return of('pongkkk').pipe(delay(1000));
  // }

  @MessagePattern({ cmd: 'getAllBlogs' })
  async getAllBlogs(): Promise<BlogDto[]> {
    console.log('getAllBlogs message received');
    return this.appService.getAllBlogs();
  }

  @MessagePattern({ cmd: 'getBlogById' })
  async getBlogById(id: number): Promise<BlogDto> {
    return this.appService.getBlogById(id);
  }
}
