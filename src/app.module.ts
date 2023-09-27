import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog/blog.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'db',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'postgres',
  //     database: 'postgres',
  //     entities: [BlogEntity],
  //     synchronize: true, // This should be used with caution in production
  //     autoLoadEntities: true,
  //   }),
  //   TypeOrmModule.forFeature([BlogEntity]), // Register your repository here
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
