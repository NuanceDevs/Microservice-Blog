import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module'; // Import your BlogModule from the correct path
import { BlogEntity } from './blog/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000, // The default port for PostgreSQL is usually 5432, not 5000
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [BlogEntity], // You should specify your entities here
      synchronize: true, // This should be used with caution in production
      autoLoadEntities: true,
    }),
    BlogModule, // Include your BlogModule here
  ],
})
export class AppModule {}
