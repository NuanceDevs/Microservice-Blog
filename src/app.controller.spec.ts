import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogEntity } from './blog/blog.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(BlogEntity),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should return a blog by ID', async () => {
    const blogId = 1;
    const blog: BlogEntity = {
      id: blogId,
      summary: '',
      content: '',
      title: 'Sample Blog',
    };
    // Mock the getPostById function
    jest.spyOn(appService, 'getPostById').mockResolvedValue(blog);

    const result = await appController.getPostById(blogId);

    expect(result).toBe(blog);
  });

  it('should throw NotFoundException for an invalid ID', async () => {
    const invalidBlogId = 999;
    // Mock the getPostById function to return undefined
    jest.spyOn(appService, 'getPostById').mockResolvedValue(undefined);

    try {
      await appController.getPostById(invalidBlogId);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe(`Blog with ID ${invalidBlogId} not found`);
    }
  });
});
