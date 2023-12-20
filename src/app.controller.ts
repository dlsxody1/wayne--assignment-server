import { Controller, Get, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { PostApi } from './common/api.decorator';
import * as Multer from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @PostApi(() => {}, {
    path: '/upload',
    description: '파일 업로드',
    auth: false,
  })
  async uploadImages(@UploadedFile() file: Multer.File) {
    const result = await this.appService.uploadImages(file);
    return result;
  }
}
