import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './configs/typeorm.module';
import { PostRepository } from './repository/post.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmExModule.forCustomRepository([PostRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
