import { Injectable } from '@nestjs/common';
import PostsResponse from './response/posts.response';
import * as AWS from 'aws-sdk';
import * as Multer from 'multer';

@Injectable()
export class AppService {
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  async getPosts(): Promise<PostsResponse> {
    //게시물을 불러온다.
  }

  async uploadImages(file: Multer.File) {
    const AWS_S3_BUCKET = 'waynestorage';

    const params = {
      Bucket: AWS_S3_BUCKET,
      Key: String(file.originalname),
      Body: file.buffer,
    };
    const response = await this.s3.upload(params);
    return response;
  }
}
