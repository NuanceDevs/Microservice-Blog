import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog/blog.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'root',
      database: process.env.POSTGRES_DB_NAME || 'test',
      entities: [BlogEntity],
      synchronize: true, // This should be used with caution in production
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BlogEntity]), // Register your repository here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
