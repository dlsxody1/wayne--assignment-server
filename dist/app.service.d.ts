import * as AWS from 'aws-sdk';
import * as Multer from 'multer';
import { PostRepository } from './repository/post.repository';
import UploadResponse from './response/upload.response';
import PostRequest from './request/post.request';
import PostResponse from './response/post.response';
export declare class AppService {
    private postRepository;
    constructor(postRepository: PostRepository);
    s3: AWS.S3;
    getAllPosts(): Promise<PostResponse[]>;
    getPostById(id: number): Promise<PostResponse>;
    uploadImage({ image }: {
        image: Multer.File;
    }): Promise<UploadResponse>;
    uploadPost(request: PostRequest): Promise<PostResponse>;
}
