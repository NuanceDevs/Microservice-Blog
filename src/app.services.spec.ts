import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { BlogDto } from './blog/dto/blog.dto';
import { BlogEntity } from './blog/blog.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AppService', () => {
  let appService: AppService;
  let blogRepository: Repository<BlogEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    appService = module.get<AppService>(AppService);
    blogRepository = module.get<Repository<BlogEntity>>(
      getRepositoryToken(BlogEntity),
    );
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should return an array of BlogDto from getAllBlogs', async () => {
    const blogDtoArray: BlogDto[] = [
      {
        id: 1,
        summary: 'd',
        title: 'test',
        content: '',
      },
    ];
    jest.spyOn(blogRepository, 'find').mockResolvedValue(blogDtoArray);
    const result = await appService.getAllBlogs();
    expect(result).toEqual(blogDtoArray);
  });

  it('should return nothing from getAllBlogs', async () => {
    const result = await appService.getAllBlogs();
    expect(result).toEqual(undefined);
  });

  it('should create a new post and return it from createPost', async () => {
    const newBlogPost: BlogDto = {
      id: 1,
      summary: 'd',
      title: 'test',
      content: '',
    };
    jest.spyOn(blogRepository, 'save').mockResolvedValue(newBlogPost);
    const result = await appService.createPost(newBlogPost);
    expect(result).toEqual(newBlogPost);
  });

  it('should return a BlogEntity by ID from getPostById', async () => {
    const id = 1; // Replace with a valid ID for testing
    const blogEntity: BlogEntity = {
      id: 1,
      summary: 'd',
      title: 'test',
      content: '',
    };
    jest.spyOn(blogRepository, 'findOne').mockResolvedValue(blogEntity);
    const result = await appService.getPostById(id);
    expect(result).toEqual(blogEntity);
  });
});
