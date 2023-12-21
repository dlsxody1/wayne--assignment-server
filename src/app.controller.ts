import {
  Body,
  Controller,
  Get,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PostApi } from './common/api.decorator';
import * as Multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Posts } from './entity/post.entity';
import PostRequest from './request/post.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return 'hi';
  }

  @PostApi(() => Posts, {
    path: '/post',
    description: '게시물 업로드',
    auth: false,
  })
  async uploadPost(@Body() request: PostRequest) {
    return this.appService.uploadPost(request);
  }

  @PostApi(() => {}, {
    path: '/upload',
    description: '파일 업로드',
    auth: false,
  })
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image: Multer.file) {
    const result = await this.appService.uploadImage({
      image,
    });
    return result;
  }
}
