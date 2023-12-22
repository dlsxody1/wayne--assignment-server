import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as Multer from 'multer';
import { PostRepository } from './repository/post.repository';
import UploadResponse from './response/upload.response';
import PostRequest from './request/post.request';
import PostResponse from './response/post.response';

@Injectable()
export class AppService {
  constructor(private postRepository: PostRepository) {}
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  async getAllPosts() {
    const posts = await this.postRepository.getAllPosts();
    return posts.map((post) => PostResponse.fromPost(post));
  }

  async getPostById(id: number) {
    const post = await this.postRepository.getPostById(id);
    return PostResponse.fromPost(post);
  }

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
    return PostResponse.fromPost(post);
  }
}
