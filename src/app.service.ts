import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as Multer from 'multer';
import { PostRepository } from './repository/post.repository';
import UploadResponse from './response/upload.response';
import PostRequest from './request/post.request';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private postRepository: PostRepository) {}
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  // async getPosts(): Promise<PostsResponse> {
  //   //게시물을 불러온다.
  // }

  async uploadImage(image: Multer.File) {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: String(image.originalname),
      Body: image.buffer,
    };
    const response = await this.s3.upload(params).promise();
    return UploadResponse.fromUpload(response);
  }

  async uploadPost(request: PostRequest) {
    const post = await this.postRepository.createPost(request);

    return UploadResponse.fromUpload(response);
  }
}
