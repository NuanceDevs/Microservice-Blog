import { BlogService } from './blog.service';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get(':id')
  async getBlogById(@Param('id') id: number) {
    const blog = await this.blogService.getBlogById(id);
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return blog;
  }
}
