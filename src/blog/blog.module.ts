// blog.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity'; // Import your entity
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])], // Register your repository here
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
