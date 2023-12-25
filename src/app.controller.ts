import {
  Body,
  Controller,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GetApi, PostApi } from './common/api.decorator';
import * as Multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Posts } from './entity/post.entity';
import PostRequest from './request/post.request';
import PostResponse from './response/post.response';
import PostsResponse from './response/posts.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GetApi(() => PostsResponse, {
    path: '/',
    description: '전체 게시물 조회',
    auth: false,
  })
  async getAllPosts() {
    return this.appService.getAllPosts();
  }

  @GetApi(() => PostResponse, {
    path: 'detail/:id',
    description: 'id에 해당하는 게시물',
    auth: false,
  })
  async getPostById(id: number) {
    return this.appService.getPostById(id);
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
